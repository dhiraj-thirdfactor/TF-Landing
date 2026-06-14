"use client";

import { useDeferredValue, useEffect, useState } from "react";
import { ChevronRight, Menu, Search, X } from "lucide-react";
import { docsVersion, endpointGroups, endpoints, type DocEndpoint } from "../data/documentation";
import CodeBlock from "./forDev/CodeBlock";

const methodStyles = {
  GET: "bg-[#EAF7EF] text-[#14733B]",
  POST: "bg-[#EAF4FD] text-[#0067B8]",
};

export default function DeveloperDocs() {
  const [query, setQuery] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const results = deferredQuery
    ? endpoints.filter((endpoint) =>
        [
          endpoint.title,
          endpoint.path,
          endpoint.method,
          endpoint.group,
          endpoint.description,
          ...endpoint.keywords,
        ]
          .join(" ")
          .toLowerCase()
          .includes(deferredQuery),
      )
    : endpoints;

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  function navigateTo(id: string) {
    setMobileNavOpen(false);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    });
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-[#DDE6ED] bg-[#F7FAFC]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-4 md:px-8 lg:px-[80px]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#007BE5]">Developer documentation</p>
            <p className="mt-1 text-[13px] text-[#64748B]">API Gateway v{docsVersion}</p>
          </div>
          <button
            type="button"
            onClick={() => setMobileNavOpen(true)}
            className="flex h-10 items-center gap-2 border border-[#C9D7E2] bg-white px-3 text-[13px] text-[#00274A] lg:hidden"
          >
            <Menu size={16} />
            Browse APIs
          </button>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="sticky top-0 hidden h-screen overflow-y-auto border-r border-[#DDE6ED] bg-[#FBFCFD] p-6 lg:block">
          <DocsNavigation query={query} setQuery={setQuery} results={results} navigateTo={navigateTo} />
        </aside>

        <main className="min-w-0">
          <div className="mx-auto max-w-[900px] px-4 py-12 md:px-8 md:py-16">
            <header id="overview" className="scroll-mt-28 border-b border-[#DDE6ED] pb-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#007BE5]">ThirdFactor AI API Gateway</p>
              <h1 className="mt-4 text-[40px] font-normal leading-[1.05] tracking-[-0.035em] text-[#00274A] md:text-[54px]">
                Identity verification APIs
              </h1>
              <p className="mt-6 max-w-[700px] text-[16px] leading-[1.7] text-[#526476]">
                Integrate face verification, liveness, document OCR, forgery analysis, KYC flows, and business document detection through one gateway.
              </p>

              <div className="mt-10 grid border border-[#DDE6ED] sm:grid-cols-2">
                <Info label="Base URL" value="https://<CUSTOM_URL>" />
                <Info label="Authentication" value="Bearer token" />
                <Info label="Transport" value="HTTPS / TLS 1.2+" />
                <Info label="Image inputs" value="Base64 unless noted" />
              </div>
            </header>

            <section id="authentication" className="scroll-mt-28 border-b border-[#DDE6ED] py-12">
              <SectionLabel>Getting started</SectionLabel>
              <h2 className="mt-3 text-[30px] font-normal tracking-[-0.025em] text-[#00274A]">Authentication</h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-[#526476]">
                ThirdFactor issues a custom base URL and access token to your organization. Keep tokens on trusted servers and never expose them in browser or mobile client code.
              </p>
              <div className="mt-7">
                <CodeBlock code={`Authorization: Bearer <YOUR_ACCESS_TOKEN>`} />
              </div>
            </section>

            <section id="errors" className="scroll-mt-28 border-b border-[#DDE6ED] py-12">
              <SectionLabel>Conventions</SectionLabel>
              <h2 className="mt-3 text-[30px] font-normal tracking-[-0.025em] text-[#00274A]">Errors and status codes</h2>
              <div className="mt-7 overflow-x-auto border border-[#DDE6ED]">
                <table className="w-full min-w-[520px] text-left text-[13px]">
                  <thead className="bg-[#F5F8FA] text-[#526476]">
                    <tr>
                      <th className="px-4 py-3 font-medium">Code</th>
                      <th className="px-4 py-3 font-medium">Meaning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5EBF0] text-[#33485B]">
                    <tr><td className="px-4 py-3 font-mono">200</td><td className="px-4 py-3">Request completed successfully.</td></tr>
                    <tr><td className="px-4 py-3 font-mono">401</td><td className="px-4 py-3">Authentication failed or token is invalid.</td></tr>
                    <tr><td className="px-4 py-3 font-mono">422</td><td className="px-4 py-3">Input validation failed.</td></tr>
                    <tr><td className="px-4 py-3 font-mono">500</td><td className="px-4 py-3">Unexpected server error.</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-7">
                <CodeBlock code={`{
  "detail": [{
    "loc": ["body", "field_name"],
    "msg": "Field is required",
    "type": "value_error.missing"
  }]
}`} />
              </div>
            </section>

            {endpointGroups.map((group) => {
              const groupEndpoints = endpoints.filter((endpoint) => endpoint.group === group);
              return (
                <section key={group} aria-labelledby={`group-${slugify(group)}`}>
                  <div className="border-b border-[#9FB5C7] pb-4 pt-14">
                    <p id={`group-${slugify(group)}`} className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#64748B]">
                      {group}
                    </p>
                  </div>
                  {groupEndpoints.map((endpoint) => (
                    <EndpointSection key={endpoint.id} endpoint={endpoint} />
                  ))}
                </section>
              );
            })}

            <section id="security" className="scroll-mt-28 py-14">
              <SectionLabel>Operations</SectionLabel>
              <h2 className="mt-3 text-[30px] font-normal tracking-[-0.025em] text-[#00274A]">Security and privacy</h2>
              <ul className="mt-6 grid gap-3 text-[14px] leading-[1.65] text-[#526476]">
                <li>All traffic must use HTTPS with TLS 1.2 or newer.</li>
                <li>Face and document data is processed transiently unless audit storage is explicitly configured.</li>
                <li>Bearer tokens must never be committed to source control or exposed in client-side applications.</li>
                <li>Webhook payloads can contain PII and Base64 images. Apply your organization&apos;s retention and access policies.</li>
              </ul>
            </section>
          </div>
        </main>
      </div>

      <div className={`fixed inset-0 z-[110] bg-white transition-transform duration-300 lg:hidden ${mobileNavOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-[64px] items-center justify-between border-b border-[#DDE6ED] px-4">
          <span className="text-[15px] font-medium text-[#00274A]">API navigation</span>
          <button type="button" onClick={() => setMobileNavOpen(false)} className="flex size-10 items-center justify-center" aria-label="Close API navigation">
            <X size={20} />
          </button>
        </div>
        <div className="h-[calc(100dvh-64px)] overflow-y-auto p-5">
          <DocsNavigation query={query} setQuery={setQuery} results={results} navigateTo={navigateTo} />
        </div>
      </div>
    </div>
  );
}

function DocsNavigation({
  query,
  setQuery,
  results,
  navigateTo,
}: {
  query: string;
  setQuery: (query: string) => void;
  results: DocEndpoint[];
  navigateTo: (id: string) => void;
}) {
  return (
    <>
      <label className="relative block">
        <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8091A0]" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search APIs"
          className="h-11 w-full border border-[#C9D7E2] bg-white pl-9 pr-3 text-[13px] text-[#00274A] outline-none placeholder:text-[#91A0AD] focus:border-[#007BE5]"
        />
      </label>

      {query.trim() ? (
        <div className="mt-5">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[#8091A0]">
            {results.length} result{results.length === 1 ? "" : "s"}
          </p>
          <div className="space-y-1">
            {results.map((endpoint) => (
              <button key={endpoint.id} type="button" onClick={() => navigateTo(endpoint.id)} className="flex w-full items-start gap-2 px-2 py-2.5 text-left hover:bg-[#EDF4F9]">
                <span className={`mt-0.5 px-1.5 py-0.5 font-mono text-[9px] font-semibold ${methodStyles[endpoint.method]}`}>{endpoint.method}</span>
                <span>
                  <span className="block text-[13px] text-[#243D52]">{endpoint.title}</span>
                  <span className="mt-0.5 block break-all font-mono text-[10px] text-[#8091A0]">{endpoint.path}</span>
                </span>
              </button>
            ))}
            {results.length === 0 && <p className="px-2 py-5 text-[13px] text-[#8091A0]">No matching APIs.</p>}
          </div>
        </div>
      ) : (
        <nav className="mt-7">
          <button type="button" onClick={() => navigateTo("overview")} className="mb-5 flex w-full items-center justify-between text-left text-[13px] font-medium text-[#00274A]">
            Overview <ChevronRight size={14} />
          </button>
          <button type="button" onClick={() => navigateTo("authentication")} className="mb-2 block text-[13px] text-[#526476] hover:text-[#007BE5]">Authentication</button>
          <button type="button" onClick={() => navigateTo("errors")} className="mb-7 block text-[13px] text-[#526476] hover:text-[#007BE5]">Errors and status codes</button>
          {endpointGroups.map((group) => (
            <div key={group} className="mb-7">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[#8091A0]">{group}</p>
              <div className="space-y-1">
                {endpoints.filter((endpoint) => endpoint.group === group).map((endpoint) => (
                  <button key={endpoint.id} type="button" onClick={() => navigateTo(endpoint.id)} className="block w-full py-1 text-left text-[13px] text-[#526476] hover:text-[#007BE5]">
                    {endpoint.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      )}
    </>
  );
}

function EndpointSection({ endpoint }: { endpoint: DocEndpoint }) {
  return (
    <article id={endpoint.id} className="scroll-mt-24 border-b border-[#DDE6ED] py-12">
      <div className="flex flex-wrap items-center gap-3">
        <span className={`px-2 py-1 font-mono text-[10px] font-semibold ${methodStyles[endpoint.method]}`}>{endpoint.method}</span>
        <code className="break-all font-mono text-[13px] text-[#33485B]">{endpoint.path}</code>
      </div>
      <h2 className="mt-5 text-[28px] font-normal tracking-[-0.02em] text-[#00274A] md:text-[32px]">{endpoint.title}</h2>
      <p className="mt-4 text-[15px] leading-[1.7] text-[#526476]">{endpoint.description}</p>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-[#718391]">
        <span>Auth: <strong className="font-medium text-[#33485B]">{endpoint.auth ? "Bearer token" : "Not required"}</strong></span>
        {endpoint.contentType && <span>Content-Type: <code className="text-[#33485B]">{endpoint.contentType}</code></span>}
      </div>

      {endpoint.parameters && (
        <div className="mt-8 overflow-x-auto border border-[#DDE6ED]">
          <table className="w-full min-w-[620px] text-left text-[12px]">
            <thead className="bg-[#F5F8FA] text-[#526476]">
              <tr>
                <th className="px-4 py-3 font-medium">Parameter</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Required</th>
                <th className="px-4 py-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5EBF0] text-[#526476]">
              {endpoint.parameters.map((parameter) => (
                <tr key={parameter.name}>
                  <td className="px-4 py-3 font-mono text-[#00274A]">{parameter.name}</td>
                  <td className="px-4 py-3">{parameter.type}</td>
                  <td className="px-4 py-3">{parameter.required ? "Yes" : parameter.defaultValue ? `Default: ${parameter.defaultValue}` : "No"}</td>
                  <td className="px-4 py-3 leading-[1.55]">{parameter.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {endpoint.notes && (
        <div className="mt-7 border-l-2 border-[#007BE5] bg-[#F4F9FD] px-5 py-4">
          {endpoint.notes.map((note) => <p key={note} className="mb-2 text-[13px] leading-[1.6] text-[#526476] last:mb-0">{note}</p>)}
        </div>
      )}

      <div className="mt-8 grid gap-6">
        {endpoint.requestExample && (
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[#718391]">Request</p>
            <CodeBlock code={endpoint.requestExample} />
          </div>
        )}
        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[#718391]">Response</p>
          <CodeBlock code={endpoint.responseExample} />
        </div>
      </div>
    </article>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[#DDE6ED] p-4 last:border-b-0 sm:border-b sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
      <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#8091A0]">{label}</p>
      <p className="mt-2 break-all text-[13px] text-[#33485B]">{value}</p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#007BE5]">{children}</p>;
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
