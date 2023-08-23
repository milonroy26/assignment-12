import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import MyProgress from "@/components/myProgress";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navbar></Navbar>
        <div className="mx-auto md:px-20">
          <div className="grid grid-cols-12">
            <div className="sidebar1 h-[100vh] col-span-2 py-8 ms-5">
              <a href="#">
                <img src="http://absolute.cactusthemes.com/wp-content/uploads/2014/12/side-ads-01.png" />
              </a>
            </div>
            <div className="mainContent shadow-md col-span-8 bg-slate-200 dark:bg-zinc-800">
              {children}
              <MyProgress></MyProgress>
              <Footer></Footer>
            </div>
            <div className="sidebar2 h-[100vh] py-8 col-span-2">
              <a href="#">
                <img src="http://absolute.cactusthemes.com/wp-content/uploads/2014/12/side-ads-02.png" />
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}