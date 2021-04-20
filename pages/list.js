import { List } from 'antd'
import React, { useState } from 'react'
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from '@ant-design/icons'

const Lists = () => {
  const [mylist, setMylist] = useState([
    { title: '文章标题一', context: '第一篇文章内容' },
    { title: '文章标题二', context: '第二篇文章内容' },
    { title: '文章标题三', context: '第三篇文章内容' },
    { title: '文章标题四', context: '第四篇文章内容' },
  ])
  return (
    <div>
      <List
        header={<div className='list-header'>最新日志</div>}
        itemLayout='vertical'
        dataSource={mylist}
        renderItem={(item) => (
          <List.Item>
            <div className='list-title'>{item.title}</div>
            <div className='list-icon'>
              <span>
                <CalendarOutlined />
                2021.04.20
              </span>
              <span>
                <FolderOutlined />
                文章分类
              </span>
              <span>
                <FireOutlined />
                1234人
              </span>
            </div>
            <div className='list-context'>{item.context}</div>
          </List.Item>
        )}
      />
    </div>
  )
}

export default Lists
