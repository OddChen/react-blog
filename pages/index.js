import React from 'react'
import { Col, Row } from 'antd'
import Header from '../components/Header'
import Lists from './list'
import Author from '../components/Author'

const Home = () => {
  return (
    <div>
      <Header />
      <Row className='common-main' justify='center'>
        <Col className='common-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <Lists />
        </Col>
        <Col className='common-box' sx={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
        </Col>
      </Row>
    </div>
  )
}

export default Home
