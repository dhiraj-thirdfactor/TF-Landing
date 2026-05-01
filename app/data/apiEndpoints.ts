import { ApiEndpoint } from "@/types/api";

export const apiEndpoints: ApiEndpoint[] = [
  {
    id: "health",
    title: "Health Check",
    description: "Verifies that the API service is operational.",
    method: "GET",
    endpoint: "/health",
    auth: false,
    responseExample: {
      status: "healthy",
      service: "thirdfactor-ai-gateway",
    },
  },
  {
    id: "detect-face",
    title: "Detect Face",
    description: "Detects faces and attributes.",
    method: "POST",
    endpoint: "/detect-face/",
    auth: true,
    contentType: "application/x-www-form-urlencoded",
    request: {
      type: "form",
      bodyExample: {
        base64_image: "<BASE64>",
        features: "ALL",
      },
    },
    responseExample: {
      result: true,
      total_faces: 1,
    },
  },
];