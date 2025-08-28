import "./globals.css";
import { ReduxProvider } from "@/store/Providers";
import { MSWProvider } from "@/mocks/MSWProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <MSWProvider>
            {children}
          </MSWProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}