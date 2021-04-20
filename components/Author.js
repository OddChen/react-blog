import { Avatar, Image, Divider } from 'antd'

const Author = () => {
  return (
    <div className='author-div comm-box'>
      <div>
        <Avatar
          size={100}
          src={
            <Image src='https://wx2.sinaimg.cn/mw690/006AkgtYgy1gpac6646b9j30x30jugvm.jpg' />
          }
        />
      </div>
      <div className='author-introduction'>
        FE程序员，专注于WEB和移动前端开发。身在微尘，心如琉璃。
        <Divider>社交账号</Divider>
        <Avatar size={28} icon='github' className='account' />
        <Avatar size={28} icon='qq' className='account' />
        <Avatar size={28} icon='wechat' className='account' />
      </div>
    </div>
  )
}

export default Author
