// import {
//   GSContext,
//   GSDataSource,
//   GSStatus,
//   logger,
//   PlainObject,
// } from '@godspeedsystems/core';
// import axios from 'axios';

// const SourceType = 'DS';
// const Type = 'git';
// const CONFIG_FILE_NAME = 'git';
// const DEFAULT_CONFIG = {
//   base_url: 'https://api.github.com',
//   timeout: 10000,
//   retries: 3,
//   retryDelay: 1000,
// };

// export default class DataSource extends GSDataSource {
//   axiosInstance: any; // Axios instance for this DataSource

//   constructor(config: PlainObject) {
//     super(config);
//   }

//   /**
//    * The initClient method initializes the Axios instance and returns the client as a PlainObject.
//    */
//   async initClient(): Promise<PlainObject> {
//     logger.info('Initializing Axios client for GitDataSource...');
//     try {
//       this.axiosInstance = axios.create({
//         baseURL: this.config.base_url || DEFAULT_CONFIG.base_url,
//         timeout: this.config.timeout || DEFAULT_CONFIG.timeout,
//         headers: this.config.headers || {},
//         maxRedirects: 0,
//       });

//       // Returning the axiosInstance as a PlainObject
//       return {
//         axiosInstance: this.axiosInstance,
//       };
//     } catch (error) {
//       console.error('Error initializing Axios client:', error);
//       throw new Error('Failed to initialize Axios client for GitDataSource.');
//     }
//   }

//   /**
//    * The execute method handles various HTTP methods (GET, POST, PUT, DELETE) using Axios.
//    */
//   async execute(
//     ctx: GSContext,
//     args: { method: string; url: string; data?: any; headers?: any },
//   ): Promise<GSStatus> {
//     try {
//       let response;

//       switch (args.method.toLowerCase()) {
//         case 'get':
//           logger.info(`GET request to ${args.url}`);
//           response = await this.axiosInstance.get(args.url, {
//             headers: args.headers,
//           });
//           break;
//         case 'post':
//           response = await this.axiosInstance.post(args.url, args.data, {
//             headers: args.headers,
//           });
//           break;
//         case 'put':
//           response = await this.axiosInstance.put(args.url, args.data, {
//             headers: args.headers,
//           });
//           break;
//         case 'delete':
//           response = await this.axiosInstance.delete(args.url, {
//             headers: args.headers,
//           });
//           break;
//         default:
//           return new GSStatus(false, 405, `Method ${args.method} not allowed`);
//       }

//       // Return success if response is valid
//       if (response.status >= 200 && response.status < 300) {
//         return new GSStatus(true, response.status, undefined, response.data);
//       }

//       // Handle non-success HTTP codes
//       return new GSStatus(
//         false,
//         response.status,
//         response.statusText,
//         response.data,
//       );
//     } catch (error: any) {
//       return this.handleError(error);
//     }
//   }

//   /**
//    * Consistent error handling
//    */
//   private handleError(error: any): GSStatus {
//     if (axios.isAxiosError(error)) {
//       return new GSStatus(
//         false,
//         error.response?.status || 500,
//         error.message,
//         error.response?.data,
//       );
//     } else {
//       return new GSStatus(false, 500, 'An unexpected error occurred', error);
//     }
//   }
// }
// export { DataSource,SourceType, Type, CONFIG_FILE_NAME, DEFAULT_CONFIG };
