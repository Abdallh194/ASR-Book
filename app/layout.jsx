import "./globals.css";
import NavScroll from "./_Components/NavScroll";
import Footer from "./_Components/Footer";
import StoreProvider from "./_Redux/StoreProvider";

export const metadata = {
  title: "ASR Booky",
  description: "اي كتاب بتدور عليه هتلاقيه في  asr booky",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>
          <NavScroll />
          {children}
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
