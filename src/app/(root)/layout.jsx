import Header from "@/components/shared/Header";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import { RootContextProvider } from "@/context/RootContext";
import TopLoader from "@/components/shared/TopLoader";
import Footer from "@/components/shared/Footer";
import Notify from "@/components/shared/Notify";
export const metadata = {
  title: "ExploreLearning AcademyYasin",
  description:
    "Welcome to ExploreLearning AcademyYasin, we have been providing tech and coding education  in  Yasin valley for many years with a dreame to make every citizen digitalize.",
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
