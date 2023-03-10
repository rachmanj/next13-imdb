import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Providers from "./Providers";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          {/* header */}
          <Header />

          {/* navbar */}
          <Navbar />

          {/* searchbox */}

          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
