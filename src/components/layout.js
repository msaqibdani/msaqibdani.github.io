/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import './layout.css'

import { Container, Row, Col } from "react-bootstrap"

import Header from "./Header/header"
import Landingpage from "./LandingPage/landingPage.js"
import LeftBar from "./LeftBar/leftBar"
import Rightbar from "./RightBar/rightBar"
import Experience from "./Experience/experience"
import Projects from "./Projects/projects"



const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      
    <Container fluid>

      <Row>
        <Col md={2} xs={2} sm={2}>
          <LeftBar />
        </Col>

         <Col md={8} xs={9} sm={9}> 
          <Landingpage />
          <Experience />
          <Projects />
         </Col>

         <Col md={2} xs={1} sm={1}>
          <Rightbar />
        </Col>
      </Row>
    </Container>  



    )}
  />
)

export default Layout
