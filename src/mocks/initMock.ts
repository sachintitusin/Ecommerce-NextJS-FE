export async function initMock() {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    const { worker } = await import("./browser");
    await worker.start({
      onUnhandledRequest: "bypass", // log requests that MSW doesn’t catch
    });
    console.log("[MSW] Worker started and ready ✅");
  }
}
