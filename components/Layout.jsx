import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Crypto Vector | Portfolio</title>
        <meta
          name="description"
          content="I'm a Full-stack web and blockchain engineer with 6+ years of experience."
        />
        <meta
          name="keywords"
          content="react, next, vue, nuxt, html, css, js/ts, modern-uix, svelte, portfolio, framer-motion, 3d-website, particle-effect, graphql, laravel, nodejs, mongo, postgresql"
        />
        <meta name="author" content="Crypto Vector" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
