import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RestCard from '../RestCard/RestCard'
import { base_url } from '../base_url'

function AllRest() {

  // const base_url='http://localhost:3001'

  const [allRest,setAllRest]=useState([])

  const fetchData=async()=>{
    const {data} = await axios.get(`${base_url}/restaurants`)
    console.log(data);
    setAllRest(data)
  }
  console.log(allRest);
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      <Row className='m-4'>
        {
          allRest.map((item)=>(
            <Col sm={12} md={6} lg={4} xl={3} className='my-4'>
               {/* {item.name} */}
               <RestCard restaurants={item}/>
            </Col>
          ))
        }

      </Row>

      

    </>
  )
}

export default AllRest