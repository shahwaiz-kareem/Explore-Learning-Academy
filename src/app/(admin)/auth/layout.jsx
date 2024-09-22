import TopLoader from "@/components/shared/TopLoader";
import "../globals.css";
import Notify from "@/components/shared/Notify";
import { RootContextProvider } from "@/context/RootContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RootContextProvider>
        <body>
          <TopLoader color={"#000000"} />
          <Notify />
          {children}
        </body>
      </RootContextProvider>
    </html>
  );
}
