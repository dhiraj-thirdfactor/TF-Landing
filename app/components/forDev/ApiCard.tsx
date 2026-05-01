
import { ApiEndpoint } from "@/app/types/api";
import CodeBlock from "./CodeBlock";

export default function ApiCard({ api }: { api: ApiEndpoint }) {
  return (
    <div className="border rounded-xl p-6 mb-8 bg-white shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{api.title}</h3>
      <p className="text-neutral-600 mb-4">{api.description}</p>

      <div className="text-sm mb-2">
        <span className="font-medium">Method:</span> {api.method}
      </div>

      <div className="text-sm mb-4">
        <span className="font-medium">Endpoint:</span>{" "}
        <code>{api.endpoint}</code>
      </div>

      {api.request?.bodyExample && (
        <>
          <h4 className="font-medium mt-4 mb-2">Request</h4>
          <CodeBlock code={JSON.stringify(api.request.bodyExample, null, 2)} />
        </>
      )}

      {api.responseExample && (
        <>
          <h4 className="font-medium mt-4 mb-2">Response</h4>
          <CodeBlock code={JSON.stringify(api.responseExample, null, 2)} />
        </>
      )}
    </div>
  );
}