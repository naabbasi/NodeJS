import axios, { AxiosInstance } from "axios";

export class HttpClient {
  private static instance: AxiosInstance | undefined;
  private baseURL: string = `http://localhost:8000/api/`;

  constructor() {
    if (HttpClient.instance === undefined) {
      HttpClient.instance = axios.create({
        baseURL: this.baseURL,
        timeout: 1000,
        withCredentials: true,
        headers: {
          "X-Token": "100-XXX-000-XXX",
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": "Bearer Implemented Later..."
        }
      });
    }
  }

  public get(endpoint: string): Promise<any> | undefined {
    return HttpClient.instance?.get(endpoint);
  }

  public post(url: string, data?: any): Promise<any> | undefined {
    return HttpClient.instance?.post(url, data);
  }

  public stream(url: string): EventSource {
    const eventSource = new EventSource(url, { withCredentials: true });
    return eventSource;
  }

  public downloadFile(url: string) {
    return HttpClient.instance?.get(url, { withCredentials: true, responseType: "arraybuffer" });
  }
}