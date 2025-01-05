// File: llmService.ts
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PullRequestFile, PullRequestReview, ReviewFormatParameters } from './types/models';
import mustache from 'mustache';

export async function generateReview(data: PullRequestFile[]): Promise<PullRequestReview> {
  try {
    const messages = getMessages(data);
    const llmResponse = await getLlmResponse(messages);
    const result = ReviewFormatParameters.safeParse(llmResponse);
    
    if (!result.success) {
      console.error('Validation failed:', result.error);
      return {
        body: 'Error in generating review',
        comments: [],
        event: 'COMMENT'
      };
    }
    
    return {
      body: result.data.body,
      comments: result.data.comments,
      event: result.data.event
    };
  } catch (error) {
    console.error('Error generating review:', error);
    return {
      body: 'Error in generating review',
      comments: [],
      event: 'COMMENT'
    };
  }
}

async function getLlmResponse(messages: any[]): Promise<any> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not set');
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  try {
    // Combine system and user messages into a single prompt
    const systemPrompt = messages[0].content;
    const userPrompt = messages[1].content;
    const combinedPrompt = `${systemPrompt}\n\nUser Request: ${userPrompt}`;

    const result = await model.generateContent(combinedPrompt);
    const response = result.response;
    const text = response.text();
    
    // Since Gemini might return the response in a text format,
    // we need to ensure it's proper JSON
    try {
      return JSON.parse(text);
    } catch (e) {
      // If the response isn't valid JSON, try to extract JSON from it
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      throw new Error('Failed to parse Gemini response as JSON');
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
}

export function getMessages(data: PullRequestFile[]): any[] {
  const filePrompt = mustache.render(
    `{{#.}}
      file path:{{filename}}
      content to review:{{patch}}
    {{/.}}`,
    data
  );

  return [
    {
      role: 'system',
      content: `You are an experienced Tech Lead reviewing pull requests.
Your task is to review code changes and provide recommendations for improvements.
Focus on code quality, readability, and maintainability.
For each file, provide specific feedback with the exact position where comments should be placed.

Note: The position value is the line number counting from the first "@@" hunk header in the file.
Line 1 is immediately after "@@", incrementing through whitespace and additional hunks.

Please provide feedback in the following JSON format only:
{
  "body": "overall comment for the PR",
  "event": "APPROVE" | "REQUEST_CHANGES" | "COMMENT",
  "comments": [
    {
      "path": "file path",
      "body": "comment for the file",
      "position": line number
    }
  ]
}

Score the PR from 1-10. If score > 8, set event as "APPROVE". If < 3, use "REQUEST_CHANGES". Otherwise, use "COMMENT".`
    },
    {
      role: 'user',
      content: `Review the following PR files and their contents:\n${filePrompt}`
    }
  ];
}