import { Poppins } from "next/font/google";
import "./globals.css";
import AppContextProvider from "./Context/AppContext";
import { CartProvider } from "./Context/CartContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "SwiftCart - Your Online Electronics Store",
  description: "High-quality electronics for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CartProvider>
          <AppContextProvider>{children}</AppContextProvider>
        </CartProvider>
      </body>
    </html>
  );
}
