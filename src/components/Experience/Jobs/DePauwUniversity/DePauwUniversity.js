import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import dpuLogo from '../../../../images/dpuLogo.png'
import './DePauwUniversity.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'




const DePauwUniversity = ({props}) =>
(

    <Row>
        <Card className="cardBackground">
            <Card.Body>
                
                <Card.Title className="cardTitle">Tenzer Technology Center <Card.Img className="logoDPU" src={dpuLogo}></Card.Img><span className="time">May 2018 - August 2018</span></Card.Title>
                <Card.Subtitle className="cardSubtitle mb-2">Software Engineer Intern<span className="location">Greencastle, IN</span></Card.Subtitle>
                <ul className="ul">
                    <Card.Text className="cardText">
                            <li className="li"> Collaborated with Biochemistry professors to incorporate VR into coursework for 50+ Biochemistry students</li>
                            <li className="li"> Analyzed the documentation and source code of ChimeraX’s application to design basic UML diagrams</li>
                            <li className="li"> Augmented existing Python APIs to install new gui tools, allowing students to interact with lab work in VR</li>
                    </Card.Text>
                </ul>
            </Card.Body>
        </Card>
    </Row>
)

export default DePauwUniversity

