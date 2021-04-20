import { Col, Menu, Row } from 'antd'
import {
  HomeOutlined,
  CodeOutlined,
  CoffeeOutlined,
  IdcardOutlined,
} from '@ant-design/icons'

const Header = () => {
  return (
    <div className='header'>
      <Row justify='center'>
        <Col xs={24} sm={24} md={10} lg={12} xl={12}>
          <span className='header-logo'>OddChen</span>
          <span className='header-text'>descript</span>
        </Col>
        <Col className='header-menu' xs={0} sm={0} md={11} lg={9} xl={7}>
          <Menu mode='horizontal'>
            <Menu.Item key='home' icon={<HomeOutlined />}>
              首页
            </Menu.Item>
            <Menu.Item key='tech' icon={<CodeOutlined />}>
              技术
            </Menu.Item>
            <Menu.Item key='life' icon={<CoffeeOutlined />}>
              生活
            </Menu.Item>
            <Menu.Item key='aboutme' icon={<IdcardOutlined />}>
              关于我
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header
