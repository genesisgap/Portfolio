import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import "./globals.css";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";




export const metadata = {
  title: "My Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#171d32] min-h-screen w-full" >

        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Footer />
        

        {children}
      </body>
    </html>
  );
}
