const SOCIAL_TARGETS: Record<string, string> = {
  x: "https://x.com/clico_global",
  linkedin: "https://www.linkedin.com/company/clico-global",
  youtube: "https://www.youtube.com/@clicoglobal",
  github: "https://github.com/clico-global",
};

type Env = {
  SOCIAL_PROXY_AUTH?: string;
};

export async function onRequestGet({ request, env }: { request: Request; env: Env }) {
  const url = new URL(request.url);
  const target = (url.searchParams.get("target") ?? "x").toLowerCase();
  const destination = SOCIAL_TARGETS[target] ?? SOCIAL_TARGETS["x"]!;

  const headers = new Headers(request.headers);
  headers.set("X-Edge-Auth", env.SOCIAL_PROXY_AUTH ?? "missing-token");
  headers.set("X-Edge-Proxied", "clico-socials");

  const proxiedRequest = new Request(destination, {
    method: request.method,
    headers,
    redirect: "follow",
  });

  const response = await fetch(proxiedRequest);
  const responseHeaders = new Headers(response.headers);
  responseHeaders.set("x-clico-social-proxy", "true");
  responseHeaders.set("cache-control", "no-store");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
  });
}
