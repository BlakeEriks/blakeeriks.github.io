import React from "react"
import About from "../components/about"
import Footer from "../components/Footer"
// Components
import Header from "../components/Header"
import Layout from "../components/layout"
import Promotion from "../components/Promotion"
import SEO from "../components/seo"
import Skills from "../components/skills"
import Work from "../components/Work"


const IndexPage = () => (
  <Layout>
    <SEO />
    <Header></Header>
    <Work></Work>
    <About></About>
    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
