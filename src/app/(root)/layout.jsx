import Header from "@/components/shared/Header";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import { RootContextProvider } from "@/context/RootContext";
import TopLoader from "@/components/shared/TopLoader";
import Footer from "@/components/shared/Footer";
import Notify from "@/components/shared/Notify";
export const metadata = {
  title: "Explore Learning Academy Yasin",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Welcome to Explore Learning Academy Yasin, We are on a mission to educate and empower every individual with the latest and most in-demand skills bridging the gap between traditional knowledge and modern advancements. We have been providing tech and coding education in Yasin valley for  years with a dream to make every citizen digitalize.  Enroll to web development course now.",
};

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RootContextProvider>
        <body className={ubuntu.className + "  "}>
          <Header />
          <Notify />
          <TopLoader color={"#fff"} />
          <main>{children}</main>
          <Footer />
        </body>
      </RootContextProvider>
    </html>
  );
}
