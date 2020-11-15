import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Features from '../components/Features/Features'
import About from '../components/About/About'
import References from '../components/References/References'
import Contact from '../components/Contact/Contact'
import Team from '../components/Team/Team'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Features />
    <About />
    <Team />
    <References />
    <Contact />
  </Layout>
)

export default IndexPage
