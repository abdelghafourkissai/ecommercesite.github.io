import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>Multimart</h1>
              </div>
              <p>Multimart est votre destination de confiance pour des produits de qualité, soigneusement sélectionnés pour répondre à vos besoins. Notre mission est de rendre vos achats en ligne simples, abordables et sans stress. Nous croyons en des produits qui allient qualité et accessibilité, avec un service client attentif à vos attentes.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
            <h2>Copyrights</h2>
            <p>© 2024 Multimart. All rights reserved.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>201 Avenue des FAR, Quartier Centre Ville, Casablanca, Maroc</li>
                <li>Email: business@gmail.com</li>
                <li>Phone: 0787678909</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
