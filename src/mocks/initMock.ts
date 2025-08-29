export async function initMock() {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    const { worker } = await import("./browser");
    await worker.start({ onUnhandledRequest: "bypass" });
    console.log("[MSW] ready");
  }
}
