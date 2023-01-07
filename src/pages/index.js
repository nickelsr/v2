import React from "react"
import { About, Hero, Nav, Projects, Contact, Layout, Seo } from "@components";

const IndexPage = () => {
  return (
    <Layout>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
    </Layout>
  );
}

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
