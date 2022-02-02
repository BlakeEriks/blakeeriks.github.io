import React from "react"
import About from "../components/about"
import Footer from "../components/Footer"
// Components
import Header from "../components/Header"
import Layout from "../components/layout"
import Promotion from "../components/Promotion"
import SEO from "../components/seo"
import Skills from "../components/skills"
import Projects from "../components/Projects"


const IndexPage = () => (
  <Layout>
    <SEO />
    <Header></Header>
    <Projects></Projects>
    <About></About>
    <Skills></Skills>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
