import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { base_url } from '../base_url';
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import RestOp from '../RestOp/RestOp';
import RestReview from '../RestReview/RestReview';
function ViewRest() {
  // const pathParams=useParams()
  // console.log(pathParams.id);
  // Then destructure pathParams

  const {id}=useParams()
  console.log(id);

  //create a state for holding restaurant details
  const [restDetails,setRestDetails]=useState([])

  //make api call to fetch particular resturant details
  const fetchData=async()=>{
    //http://localhost:3001/resturants/id
    const {data}=await axios.get(`${base_url}/restaurants/${id}`)
    console.log(data);
    setRestDetails(data)
   
  }
      console.log(restDetails);


  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
      {
        restDetails? <Row>
      
        <Col>
      {/* Image */}
        <Image style={{height:'550px',width:'400px', padding:'20px', border:'2px solid white', margin:'30px', marginLeft:'60px'}} src={`${restDetails.photograph}`} fluid/>
        </Col>
        <Col style={{padding:'90px', marginRight:'50px'}}>
        <h1 className='text-center'>{restDetails.name}</h1>
        <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem
        tag='button'
        action
        noBorders
        active
        aria-current='true'
        type='button'
        className='px-3'
      >
        Address : {restDetails.address}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
       Cusine Type : {restDetails.cuisine_type}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
       Nighborhood : {restDetails.neighborhood}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
       <RestOp op={restDetails.operating_hours}/>
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
        <RestReview review={restDetails.reviews}/>
      </MDBListGroupItem>
    </MDBListGroup>

        </Col>
        
     </Row>: <p>No data</p>
      }

    </>
  )
}

export default ViewRest