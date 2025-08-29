import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/mock-api/health", () => HttpResponse.json({ ok: true })),
];
