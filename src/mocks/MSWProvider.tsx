"use client";

import { useEffect, useState } from "react";
import { initMock } from "./initMock";

export function MSWProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {

    initMock().then(() => {
      console.log("[MSW] Worker started ✅");
      setReady(true);
    }).catch(error=>{
        console.log(error)
    })
  }, []);

  if (!ready) {
    return <p>Loading mocks...</p>; // avoid firing queries too early
  }

  return <>{children}</>;
}
