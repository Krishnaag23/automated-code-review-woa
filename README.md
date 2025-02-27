# **Automated Code Review WOA**

The **Automated Code Review Project** is a powerful tool designed to automate and enhance the code review process using static analysis, AI-driven insights, and GitHub integration. It supports multiple programming languages, including JavaScript, TypeScript, and Python, and leverages tools like [ESLint](https://eslint.org/), [Babel Parser](https://babeljs.io/), and [Google Generative AI](https://developers.google.com/generative-ai). The plugin integrates seamlessly with GitHub pull requests and provides actionable feedback on code quality, security, and maintainability.

## Key Features

- **Static Analysis**: Uses [ESLint](https://eslint.org/) to enforce coding standards and detect linting issues.
- **Code Smell Detection**: Identifies problematic code patterns that may affect maintainability.
- **Complexity Metrics**: Calculates cognitive and traditional complexity scores to assess code readability.
- **Security Checks**: Scans for common security vulnerabilities using custom regex patterns.
- **AI-Driven Suggestions**: Provides actionable code review comments using [Google Generative AI](https://developers.google.com/generative-ai).
- **GitHub Integration**: Automates pull request analysis using the [Octokit REST API](https://octokit.github.io/rest.js/).
- **Language Parsing**: Supports parsing of JavaScript, TypeScript, and Python using [Babel Parser](https://babeljs.io/).
- **Workflow Automation**: Defines tasks for fetching repository files, analyzing code, and storing review results.

## 🚀 Live Demo & Resources

- **🔗 API Docs**: [Check it out here](https://automated-code-review-woa.onrender.com/api-docs/)
- **💻 Live Demo**: [Explore the UI](https://automated-code-review-frontend-ten.vercel.app/)
- **📝 Medium Article**: [Read the full story](https://medium.com/@krishnaagrawal5002/revolutionizing-code-reviews-our-journey-with-godspeeds-winter-of-ai-5fda2cde7a3e)

## Getting Started

### Installation

Install the required dependencies by running:

```bash
npm install @godspeedsystems/core @google/generative-ai eslint @octokit/rest @babel/types @babel/parser @babel/traverse diff uuid
```

### Environment Variables

Add the necessary API keys and tokens in the `.env` file:

```env
# Google Gemini API key — obtain from the [Google Generative AI](https://developers.google.com/generative-ai) console.
GEMINI_API_KEY=your_gemini_api_key

# GitHub token for pull request analysis
GITHUB_TOKEN=your_github_token

#Database Url for your postgres instance
DATABASE_URL=
POSTGRES_URL=
```
### Running the Project

1. **Start the Project**:
   Run the project using the Godspeed CLI:

   ```bash
   godspeed serve
   ```

   This will start the project on `localhost:3000`.

2. **Access the API Documentation**:
   Once the project is running, open your browser and navigate to:

   ```
   http://localhost:3000/api-docs
   ```

   This will display the Swagger API documentation for the project, including the **webhook endpoint** and other available routes.

3. **Trigger the Webhook**:
   Use the `/webhook` endpoint to trigger the code review workflow. The API documentation provides details on the required payload and expected responses.
### Payload Structure

The webhook expects a JSON payload with the following fields:

| Field       | Type   | Required | Description                           | Default Value |
|-------------|--------|----------|---------------------------------------|---------------|
| `owner`     | string | Yes      | GitHub repository owner (username).  | -             |
| `repo`      | string | Yes      | GitHub repository name.               | -             |
| `repo_id`   | string | Yes      | GitHub repository ID.                 | -             |
| `pr_id`     | string | Yes      | Pull request number.                  | -             |
| `language`  | string | No       | Programming language of the code.    | `JavaScript`  |

### Example Payload

```json
{
  "owner": "username",
  "repo": "repo-name",
  "repo_id": "12345",
  "pr_id": "1",
  "language": "JavaScript"
}
```

### Example Request

```json
{
  "owner": "krishnaag23",
  "repo": "automated-code-review-testing",
  "repo_id": "1",
  "pr_id": "4",
  "language": "Typescript"
}
```

### Example Response

```json
{
  "id": 5,
  "repoId": "1",
  "filePath": "src/sonar.ts",
  "issues": {
    "file": "anonymous-file",
    "issues": [
      {
        "line": 2,
        "type": "lint",
        "message": "Function 'complexFunction' has a complexity of 12. Maximum allowed is 5. [complexity]"
      },
      {
        "line": 2,
        "type": "lint",
        "message": "Refactor this function to reduce its Cognitive Complexity from 12 to the 5 allowed. [sonarjs/cognitive-complexity]"
      },
      {
        "line": 5,
        "type": "lint",
        "message": "Unexpected console statement. [no-console]"
      },
      {
        "line": 10,
        "type": "lint",
        "message": "Unexpected console statement. [no-console]"
      },
      {
        "line": 16,
        "type": "lint",
        "message": "Unexpected console statement. [no-console]"
      },
      {
        "line": 18,
        "type": "lint",
        "message": "Unexpected console statement. [no-console]"
      },
      {
        "line": 26,
        "type": "lint",
        "message": "Unexpected console statement. [no-console]"
      },
      {
        "line": 33,
        "type": "lint",
        "message": "Unexpected console statement. [no-console]"
      },
      {
        "line": 36,
        "type": "lint",
        "message": "Unexpected console statement. [no-console]"
      },
      {
        "line": 39,
        "type": "lint",
        "message": "Unexpected console statement. [no-console]"
      },
      {
        "line": 44,
        "type": "lint",
        "message": "Unexpected console statement. [no-console]"
      },
      {
        "line": 11,
        "type": "codesmell",
        "message": "High cyclomatic complexity (12)"
      }
    ],
    "complexity": 13,
    "aiSuggestions": [
      "## Code Quality: 2/10",
      "The function has a **high cyclomatic complexity**, which makes it challenging to understand, maintain, and test. The cyclomatic complexity of this function is 10.",
      "## Critical Issues",
      "- **High cyclomatic complexity:** The function has multiple branches, loops, and decision points, making it difficult to understand and maintain.",
      "- **Use of logical expressions in if statements:** Using logical expressions in if statements can make the code difficult to follow and understand.",
      "## Security Concerns",
      "The code does not contain any direct security concerns.",
      "## Performance Observations",
      "The function has multiple loops and conditional statements, which can affect performance, especially for large values of `x`.",
      "## Code Structure",
      "The code is not well-structured and lacks proper organization. It would benefit from using descriptive variable names and breaking down complex logic into smaller, more manageable functions.",
      "## Specific Recommendations",
      "- **Reduce cyclomatic complexity:** Extract complex logic into separate functions, reduce the number of branches, and simplify decision-making.",
      "- **Use descriptive variable names:** Replace generic names like `x` with more descriptive names to improve clarity.",
      "- **Break down complex logic:** Divide the function into smaller, more manageable functions to improve readability and maintainability.",
      "- **Consider using a design pattern:** Use a suitable design pattern (e.g., Strategy, State) to improve code organization and reduce complexity.",
      "## Positive Aspects",
      "- The function effectively handles various conditions and scenarios.",
      "- It provides detailed logging to assist in debugging and understanding the flow of the program.",
      "## Suggested Improvements",
      "The following code provides an improved version of the `complexFunction` function with reduced cyclomatic complexity:",
      "```typescript",
      "// Improved version of the complex function with reduced cyclomatic complexity",
      "function improvedComplexFunction(x) {",
      " // Handle x greater than 10",
      " if (x > 10) {",
      " console.log(\"x is greater than 10\");",
      " }",
      " // Handle x less than 0",
      " if (x < 0) {",
      " console.log(\"x is less than 0\");",
      " }",
      " // Handle even and odd numbers",
      " for (let i = 0; i < 5; i++) {",
      " console.log(i, isEven(i) ? \"is even\" : \"is odd\");",
      " }",
      " // Handle decrementing x",
      " while (x > 0) {",
      " x--;",
      " if (x === 3) {",
      " console.log(\"x reached 3\");",
      " }",
      " }",
      " // Handle specific cases of x",
      " switch (x) {",
      " case 1:",
      " console.log(\"x is one\");",
      " break;",
      " case 2:",
      " console.log(\"x is two\");",
      " break;",
      " default:",
      " console.log(\"x is something else\");",
      " }",
      " // Handle the case where x is zero and less than 5, or x is greater than 100",
      " if (isSpecialCase(x)) {",
      " console.log(\"x is either zero (with x < 5) or unusually high\");",
      " }",
      " // Utility function to determine if a number is even",
      " function isEven(n) {",
      " return n % 2 === 0;",
      " }",
      " // Utility function to determine if x satisfies certain conditions",
      " function isSpecialCase(x) {",
      " return (x === 0 && x < 5) || x > 100;",
      " }",
      "}",
      "```",
      "In this improved version:",
      "- We introduced utility functions (`isEven` and `isSpecialCase`) to reduce code duplication and improve readability.",
      "- We extracted the loop and switch-case logic into separate functions for better organization and reduced cyclomatic complexity.",
      "- We used more descriptive variable names to enhance clarity."
    ]
  },
  "createdAt": "2025-02-05T22:03:40.102Z"
}
```


### ESLint Configuration

This project uses a base ESLint configuration. You can customize the rules in your project’s `eslint.config.mjs` file:

```js
export default {
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'sonarjs/cognitive-complexity': ['error', 5],
    'sonarjs/no-identical-functions': 'error',
    complexity: ['error', 5],
    'no-console': 'warn',
  },
};
```

## About

The project has a plugin which extends the `GSDataSource` class from [Godspeed](https://github.com/godspeedsystems). Below is an expample structure to initialise it:

```typescript
import CodeReviewPlugin from 'path-to-plugin/code-review-plugin';

const config = { /* configuration options */ };

// Instantiate the plugin
const codeReviewPlugin = new CodeReviewPlugin(config);
```

### Executing Analysis

The plugin supports multiple actions:
- **`analyze_pr`**: Analyzes a GitHub pull request.
- **`review_code`**: Reviews a code snippet for style and design issues.
- **`static_analysis`**: Runs a full static analysis, including linting, code smells, complexity, and security checks.

Example usage:

```typescript
const action = 'static_analysis';
const payload = { code: 'const a = 1;', language: 'javascript' };

codeReviewPlugin.execute(ctx, { action, payload })
  .then(results => console.log(results))
  .catch(error => console.error(error));
```

### Workflow Integration

This project has an automated workflow, which can be further customised as per need:

```yaml
id: code_review_workflow
description: Automated code review workflow

tasks:
  - id: fetch_repo_files
    fn: datasource.git.get./repos/<% inputs.body.owner %>/<% inputs.body.repo %>/pulls/<% inputs.body.pr_id %>/files
    args:
      headers:
        Authorization: <% `Bearer ${config.github.token}` %>
        Accept: application/vnd.github.v3+json
      skipAuth: true

  - id: analyze_files
    fn: codeReview
    args:
      content: <% outputs.fetch_repo_files.data[0].patch || '' %>
      filename: <% outputs.fetch_repo_files.data[0].filename %>
      language: <% inputs.body.language || 'JavaScript' %>

  - id: store_results
    fn: save_results
    args:
      data:
        repoId: <% inputs.body.repo_id %>
        filePath: <% outputs.fetch_repo_files.data[0].filename %>
        issues: <% JSON.stringify(outputs.analyze_files.data) %>
```

This workflow fetches pull request file changes, analyzes the code, and stores the review results.

## Code Parsing and Analysis

This project distinguishes between regular code and diff content by checking for diff-style markers (e.g., lines beginning with `@@` or `diff`). It uses [Babel Parser](https://babeljs.io/docs/en/babel-parser) with plugins tailored for JavaScript or TypeScript. If parsing fails, the plugin logs errors and attempts to recover.

### Error Handling

The plugin includes robust error handling to ensure stability:

```typescript
try {
  const result = await this.model.generateContent(prompt);
  return await result.response.text();
} catch (error) {
  logger.error('AI analysis failed:', error);
  return ['AI analysis temporarily unavailable'];
}
```

## Best Practices

- Regularly update the ESLint configuration to align with your project’s coding standards.
- Use the AI-driven suggestions as a supplement to manual code reviews, not a replacement.
- Monitor the complexity metrics to maintain code readability and maintainability.

## Roadmap

- Add support for more programming languages (e.g., Java, C#).
- Enhance AI-driven suggestions with more context-aware recommendations.
- Integrate with additional code review platforms (e.g., GitLab, Bitbucket).
- Build a dashboard for visualizing code review metrics and trends.

## **Innovators/Developers​**
- Krishna Agarwal  
- Ashish Upadhyay 

## **Mentor**
- Pushpendra Singh ​

