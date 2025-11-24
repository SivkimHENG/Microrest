import axios, { AxiosInstance } from "axios";
import { logger } from "../utils/logging";

export class HttpService {
  private client: AxiosInstance
  constructor(serviceConfig: any) {
    this.client = axios.create({
      baseURL: serviceConfig.baseURL,
      timeout: serviceConfig.timeout || 5000,
      headers: {
        'Content-Type': 'application/json',
      }
    });

    this.client.interceptors.request.use((config) => {
      logger.info(`HTTP Request: ${config.method?.toUpperCase()} ${config.url}`);
      return config;
    },
      (error) => {
        logger.error(`HTTP Request Error: ${error.message}`);
        return Promise.reject(error);
      }
    );
    this.client.interceptors.response.use((response) => {
      return response;
    },
      (error) => {
        logger.error(`Response error: ${error.message}`);
        if (error.response) {
          return Promise.reject({
            status: error.response.status,
            message: error.response.statusText,
            data: error.response.data
          });
        }
        return Promise.reject({
          status: 500,
          message: 'Service unavailable'
        });
      }
    );
  }

  async get(url: string, config: {}) {
    const response = await this.client.get(url, config);
    return response.data;
  }

  async post(url: string, data: any, config: {}) {
    const response = await this.client.post(url, data, config);
    return response.data;
  }

  async put(url: string, data: any, config: {}) {   
    const response = await this.client.put(url, data, config);
    return response.data;
  }
  async delete(url: string, config: {}) {   
    const response = await this.client.delete(url, config);   
    return response.data;
  }
}
