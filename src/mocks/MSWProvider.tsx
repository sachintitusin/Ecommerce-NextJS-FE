"use client";
import { useEffect, useState } from "react";
import { initMock } from "./initMock";

export function MSWProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  useEffect(() => { initMock().then(() => setReady(true)); }, []);
  if (!ready) return <></>; // tiny guard to avoid early fetches
  return <>{children}</>;
}
