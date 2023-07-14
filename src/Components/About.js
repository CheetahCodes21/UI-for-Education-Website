import React from 'react'
import {Accordion} from 'react-bootstrap'
const About = () => {
  return (
    <div className='abtbg-total'>
        <div className='abtbg vh'>
            {/* <h1 className='org text-center'>Unleash Your Potential! </h1> */}
            <h1 className='org text-center text-white'>Unleash Your Potential!</h1>
            {/* <h4 className='org text-center text-white'>Industry Ready Programs Available</h4> */}
        </div><br></br><br></br><br></br>
        <h6 className='text-center vision'>Contact and About Us</h6>
        <div className='d-flex justify-content-center'>
        <Accordion defaultActiveKey="0" flush className='acc'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h2 className='acchead'>Organisation Name</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          CHETHAN PAI MAROOR (https://github.com/CheetahCodes21)
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h2 className='acchead'>Location & Address</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          Mangalore, Karnataka - India
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header ><h2 className='acchead'>Phone Number</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          +91-**********
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><h2 className='acchead'>Email Address</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          chethan.cs@sahyadri.edu.in
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div><br></br><br></br>

        <div>
            <h2 className='text-center vision'>Our Vision</h2>
            <h4 className='text-center vision1 px-5'>To produce the passionate coders for this Country</h4>
        </div><br></br><br></br><br></br>
        <div>
            <h2 className='text-center vision'>Our Mission</h2>
            <h4 className='text-center vision1 px-5'>Quality and Affordable Courses To Every Part of the Country</h4>
        </div><br></br><br></br>

        
        <footer>
        <h3 className='text-center text-secondary bg-dark foot'> https://github.com/CheetahCodes21</h3>
        </footer>
    </div>
  )
}

export default About