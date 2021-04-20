import { Col, Row } from 'antd'
import Head from 'next/head'
import Header from '../components/Header'

const Detailed = () => {
  return (
    <div>
      <Header />
      <Row className='common-main' justify='center'>
        <Col className='common-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          左侧
        </Col>
        <Col className='common-right' sx={0} sm={0} md={7} lg={5} xl={4}>
          右侧
        </Col>
      </Row>
    </div>
  )
}

export default Detailed
