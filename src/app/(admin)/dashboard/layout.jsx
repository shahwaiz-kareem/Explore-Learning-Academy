import { RootContextProvider } from "@/context/RootContext";
import "./globals.css";
import TopLoader from "@/components/shared/TopLoader";
import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import Container from "@/components/dashboard/Container";
import Notify from "@/components/shared/Notify";

export const metadata = {
  title: "Dashboard || MountainCoders",
  description: "This is MountainCoders dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RootContextProvider>
        <body>
          <TopLoader color={"#000000"} />
          <Sidebar />
          <Container>
            <Navbar />
            <Notify />
            {children}
          </Container>
        </body>
      </RootContextProvider>
    </html>
  );
}
