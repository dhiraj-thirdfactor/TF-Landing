export type HttpMethod = "GET" | "POST";

export interface ApiEndpoint {
  id: string;
  title: string;
  description: string;
  method: HttpMethod;
  endpoint: string;
  auth: boolean;
  contentType?: string;
  request?: {
    type: "json" | "form" | "file";
    bodyExample?: Record<string, unknown>;
  };
  responseExample?: Record<string, unknown>;
}