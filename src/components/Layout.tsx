import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
