export type DocParameter = {
  name: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
  description: string;
};

export type DocEndpoint = {
  id: string;
  group: string;
  title: string;
  description: string;
  method: "GET" | "POST";
  path: string;
  auth: boolean;
  contentType?: string;
  parameters?: DocParameter[];
  requestExample?: string;
  responseExample: string;
  notes?: string[];
  keywords: string[];
};

export const docsVersion = "0.1.0";

export const endpoints: DocEndpoint[] = [
  {
    id: "health",
    group: "Essentials",
    title: "Health check",
    description: "Verify that the ThirdFactor AI API Gateway is operational.",
    method: "GET",
    path: "/health",
    auth: false,
    responseExample: `{
  "status": "healthy",
  "service": "thirdfactor-ai-gateway"
}`,
    keywords: ["status", "availability", "monitoring"],
  },
  {
    id: "image-to-base64",
    group: "Utilities",
    title: "Image to Base64",
    description: "Convert an uploaded image file into a data URL for endpoints that accept Base64 input.",
    method: "POST",
    path: "/image-to-base64/",
    auth: true,
    contentType: "multipart/form-data",
    parameters: [
      { name: "image", type: "File", required: true, description: "Image file to convert." },
    ],
    requestExample: `curl -X POST "$BASE_URL/image-to-base64/" \\
  -H "Authorization: Bearer $THIRDFACTOR_TOKEN" \\
  -F "image=@document.jpg"`,
    responseExample: `{
  "data_url": "data:image/jpeg;base64,/9j/4AAQ...",
  "content_type": "image/jpeg",
  "filename": "document.jpg"
}`,
    keywords: ["image", "base64", "upload", "conversion"],
  },
  {
    id: "detect-face",
    group: "Face APIs",
    title: "Detect face",
    description: "Detect faces and optional attributes such as age range, gender, glasses, and occlusion.",
    method: "POST",
    path: "/detect-face/",
    auth: true,
    contentType: "application/x-www-form-urlencoded",
    parameters: [
      { name: "base64_image", type: "string", required: true, description: "Base64 encoded face image." },
      { name: "features", type: "string", defaultValue: "ALL", description: "Comma-separated attributes: ALL, AGE_RANGE, EYEGLASSES, GENDER, FACE_OCCLUDED, SUNGLASSES." },
    ],
    requestExample: `curl -X POST "$BASE_URL/detect-face/" \\
  -H "Authorization: Bearer $THIRDFACTOR_TOKEN" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  --data-urlencode "base64_image=<BASE64_IMAGE>" \\
  --data-urlencode "features=ALL"`,
    responseExample: `{
  "result": true,
  "total_faces": 1,
  "faces": [{
    "confidence": 0.84,
    "age_range": { "min_age": 27, "max_age": 32, "detected_age": 29 },
    "gender": "Male",
    "occluded": false
  }]
}`,
    keywords: ["face", "age", "gender", "occlusion", "attributes"],
  },
  {
    id: "analyze-liveness",
    group: "Face APIs",
    title: "Analyze liveness",
    description: "Analyze a video for liveness, anti-spoofing signals, and blink activity.",
    method: "POST",
    path: "/api/analyze-liveness",
    auth: false,
    contentType: "multipart/form-data",
    parameters: [
      { name: "video", type: "File", required: true, description: "Video file to analyze." },
    ],
    requestExample: `curl -X POST "$BASE_URL/api/analyze-liveness" \\
  -F "video=@liveness.mp4"`,
    responseExample: `{
  "liveness_score": "0.70",
  "antispoof_score": "1.00",
  "blink_count": 0,
  "is_live": true,
  "frames": ["data:image/jpeg;base64,/9j/4AAQ..."]
}`,
    keywords: ["liveness", "video", "antispoof", "blink", "spoofing"],
  },
  {
    id: "compare-face",
    group: "Face APIs",
    title: "Compare face (1:1)",
    description: "Compare two Base64 face images and determine whether they belong to the same person.",
    method: "POST",
    path: "/compare-face/",
    auth: true,
    contentType: "application/json",
    parameters: [
      { name: "threshold", type: "number", defaultValue: "52.0", description: "Similarity threshold used for matching." },
      { name: "live_check", type: "boolean", defaultValue: "false", description: "Run an optional liveness check." },
      { name: "occlusion_check", type: "boolean", defaultValue: "false", description: "Check for face obstructions." },
    ],
    requestExample: `curl -X POST "$BASE_URL/compare-face/?threshold=52" \\
  -H "Authorization: Bearer $THIRDFACTOR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '["<BASE64_IMAGE_1>", "<BASE64_IMAGE_2>"]'`,
    responseExample: `{
  "verified": true,
  "confidence": 98.5,
  "percentage_match": 99.9
}`,
    keywords: ["face comparison", "1:1", "match", "verification", "similarity"],
  },
  {
    id: "face-reverse-search",
    group: "Face APIs",
    title: "Compare face (1:N)",
    description: "Run a reverse search for a face against a previously ingested database.",
    method: "POST",
    path: "/api/face-reverse-search",
    auth: false,
    contentType: "binary",
    parameters: [
      { name: "body", type: "Binary file", required: true, description: "Raw image bytes." },
    ],
    requestExample: `curl -X POST "$BASE_URL/api/face-reverse-search" \\
  -H "Content-Type: application/octet-stream" \\
  --data-binary "@face.jpg"`,
    responseExample: `{
  "matches": [{
    "id": 25,
    "score": 0.32,
    "metadata": { "filename": "ingest_user.jpg" }
  }],
  "query_time_seconds": 1.38,
  "search_time_seconds": 0.00007
}`,
    keywords: ["face", "reverse search", "1:n", "database", "identification"],
  },
  {
    id: "batch-ingest",
    group: "Face APIs",
    title: "Ingest face",
    description: "Add an image to the face database for future 1:N searches.",
    method: "POST",
    path: "/batch_ingest",
    auth: false,
    contentType: "binary",
    parameters: [
      { name: "body", type: "Binary file", required: true, description: "Raw image bytes." },
    ],
    requestExample: `curl -X POST "$BASE_URL/batch_ingest" \\
  -H "Content-Type: application/octet-stream" \\
  --data-binary "@face.jpg"`,
    responseExample: `{
  "results": [{
    "filename": "face.jpg",
    "id": 35
  }]
}`,
    keywords: ["face", "ingest", "database", "index"],
  },
  {
    id: "document-crop",
    group: "Document APIs",
    title: "Detect and crop document",
    description: "Identify a supported document type and return a cropped Base64 image.",
    method: "POST",
    path: "/type-of-document-crop/",
    auth: true,
    contentType: "application/x-www-form-urlencoded",
    parameters: [
      { name: "base64_image", type: "string", required: true, description: "Base64 encoded document image." },
    ],
    requestExample: `curl -X POST "$BASE_URL/type-of-document-crop/" \\
  -H "Authorization: Bearer $THIRDFACTOR_TOKEN" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  --data-urlencode "base64_image=<BASE64_DOCUMENT>"`,
    responseExample: `{
  "document_type": "national-id-front",
  "score": 0.98,
  "cropped_image": "data:image/jpeg;base64,/9j/..."
}`,
    notes: ["Supported types include citizenship, driving licence, passport, PAN, disability ID, national ID, voter ID, and foreign passport."],
    keywords: ["document", "crop", "classification", "citizenship", "passport", "pan"],
  },
  {
    id: "document-ocr",
    group: "Document APIs",
    title: "Analyze document (OCR)",
    description: "Extract structured identity data from a supported document image.",
    method: "POST",
    path: "/document-extract-information/",
    auth: true,
    contentType: "application/x-www-form-urlencoded",
    parameters: [
      { name: "base64_image", type: "string", required: true, description: "Base64 encoded document image." },
    ],
    requestExample: `curl -X POST "$BASE_URL/document-extract-information/" \\
  -H "Authorization: Bearer $THIRDFACTOR_TOKEN" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  --data-urlencode "base64_image=<BASE64_DOCUMENT>"`,
    responseExample: `{
  "success": true,
  "data": {
    "id_number": "XXXX-XXXX-XXXX",
    "name": "Jane Smith",
    "address": "Sample Address",
    "gender": "F",
    "dob": { "year": "1995", "month": "07", "day": "10" },
    "detected_type": "national-id",
    "confidence": 0.97
  }
}`,
    keywords: ["ocr", "document", "extract", "citizenship", "identity", "nepali"],
  },
  {
    id: "detect-forgery",
    group: "Document APIs",
    title: "Detect forgery",
    description: "Analyze an image for potential manipulation and return a forgery decision.",
    method: "POST",
    path: "/api/analyze",
    auth: false,
    contentType: "multipart/form-data",
    parameters: [
      { name: "image", type: "File", required: true, description: "PNG image to analyze." },
    ],
    requestExample: `curl -X POST "$BASE_URL/api/analyze" \\
  -F "image=@identity.png;type=image/png"`,
    responseExample: `{
  "is_forged": false,
  "analysis": {
    "status": "AUTHENTIC",
    "forgery_score": "0.13",
    "details": "No manipulation detected"
  }
}`,
    keywords: ["forgery", "document", "manipulation", "authenticity"],
  },
  {
    id: "generate-kyc-url",
    group: "KYC flows",
    title: "Generate KYC URL",
    description: "Create a hosted or SDK KYC session using an HS256 signed JWT.",
    method: "POST",
    path: "/tfauth/get-kyc-url/",
    auth: false,
    contentType: "application/json",
    parameters: [
      { name: "jwt_token", type: "string", required: true, description: "HS256 JWT signed with your organization secret." },
    ],
    requestExample: `curl -X POST "$BASE_URL/tfauth/get-kyc-url/" \\
  -H "Content-Type: application/json" \\
  -d '{ "jwt_token": "<SIGNED_JWT>" }'`,
    responseExample: `{
  "url": "https://endpoint/tfauth/start?",
  "remaining_credits": 97
}`,
    notes: [
      "JWT claims include iss, token, identifier, label, callback, iat, and is_sdk.",
      "For web flows set is_sdk to false and include return_url. Flutter SDK flows set is_sdk to true and omit return_url.",
      "Completed verification results are POSTed to the callback URL supplied in the JWT.",
    ],
    keywords: ["kyc", "sdk", "saas", "jwt", "callback", "webhook", "credits", "ocr"],
  },
  {
    id: "kyc-webhook",
    group: "KYC flows",
    title: "KYC webhook payload",
    description: "Receive final verification, document, gesture, face, OCR, and signature results at your callback URL.",
    method: "POST",
    path: "<YOUR_CALLBACK_URL>",
    auth: false,
    contentType: "application/json",
    responseExample: `{
  "session": "F7bgp2I",
  "is_verified": true,
  "documentDetectionSuccess": true,
  "faceDetectionSuccess": true,
  "gestureSuccess": true,
  "percentage_match": 64.7401,
  "ocr_summary": {
    "document_type": "citizenship",
    "confidence": 0.9573,
    "is_document_valid": true,
    "successful_images": 2
  },
  "signature": "<SIGNATURE>"
}`,
    notes: [
      "Treat all payloads as UTF-8. Nepali fields may contain Devanagari Unicode.",
      "Image fields contain Base64 data and may be large.",
      "The example source payload is redacted. Store PII only when required by your compliance policy.",
    ],
    keywords: ["webhook", "callback", "ocr", "signature", "unicode", "payload", "pii"],
  },
  {
    id: "kyb-single",
    group: "KYB APIs",
    title: "Business document detection",
    description: "Classify one uploaded business document and optionally validate it against an expected class.",
    method: "POST",
    path: "/api/v1/business_doc_detection/inference/single",
    auth: false,
    contentType: "multipart/form-data",
    parameters: [
      { name: "file", type: "File", required: true, description: "Business document image." },
      { name: "expected_class", type: "string", description: "Optional expected class for validation." },
      { name: "confidence", type: "number", defaultValue: "0.7", description: "Minimum confidence threshold." },
    ],
    requestExample: `curl -X POST "$BASE_URL/api/v1/business_doc_detection/inference/single" \\
  -F "file=@vat-pan.jpg" \\
  -F "expected_class=business_vat_pan" \\
  -F "confidence=0.7"`,
    responseExample: `{
  "filename": "vat-pan.jpg",
  "predicted_class": "business_vat_pan",
  "expected_class": "business_vat_pan",
  "confidence": 0.95,
  "is_correct": true,
  "bbox": [100, 150, 400, 500]
}`,
    keywords: ["kyb", "business", "vat", "pan", "classification"],
  },
  {
    id: "kyb-folder",
    group: "KYB APIs",
    title: "Business document folder inference",
    description: "Batch process business document images from a server-side folder path.",
    method: "POST",
    path: "/api/v1/business_doc_detection/inference/folder",
    auth: false,
    contentType: "multipart/form-data",
    parameters: [
      { name: "folder_path", type: "string", required: true, description: "Folder containing images to process." },
      { name: "confidence", type: "number", defaultValue: "0.7", description: "Minimum confidence threshold." },
    ],
    responseExample: `{
  "total_images": 10,
  "correct_predictions": 8,
  "incorrect_predictions": 1,
  "no_predictions": 1,
  "files": [
    { "filename": "doc1.jpg", "predicted_class": "vat", "confidence": 0.98 }
  ]
}`,
    keywords: ["kyb", "business", "batch", "folder", "classification"],
  },
  {
    id: "kyb-health",
    group: "KYB APIs",
    title: "KYB health check",
    description: "Check the status of the business document detection service.",
    method: "GET",
    path: "/api/v1/business_doc_detection/health",
    auth: false,
    responseExample: `{ "status": "Ok" }`,
    keywords: ["kyb", "health", "status"],
  },
];

export const endpointGroups = Array.from(new Set(endpoints.map((endpoint) => endpoint.group)));
