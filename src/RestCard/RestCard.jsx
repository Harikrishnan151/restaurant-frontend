import React from 'react'
import './RestCard.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
 

function RestCard({restaurants}) {
    console.log(restaurants);
  return (
    <div>
        <Link to={`view/${restaurants.id}`} style={{textDecoration:'none'}}>
           <MDBCard className='card'>
      <MDBCardImage src={restaurants.photograph} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle className='text-white'>{restaurants.name}</MDBCardTitle>
        <MDBCardText >
        Address : {restaurants.address} <br />
        Cuisine Type : {restaurants.cuisine_type}
        </MDBCardText>
        {/* <MDBCardText>Cuisine Type : {restaurants.cuisine_type}</MDBCardText> */}
        {/* <MDBBtn href='#'>Button</MDBBtn> */}
      </MDBCardBody>
    </MDBCard>
    </Link>
    </div>
  )
}

export default RestCard