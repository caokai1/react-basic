import { useState, useRef } from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import tabData from './data/publicData.js'
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import './css/publicCss.scss'
// import './css/publicCss.scss'
// let count = 100

// const getName = () => {
//   return 'jsName'
// }
// const objList = [
//   { id: 1001, name: 'Vue' },
//   { id: 1002, name: 'React' },
//   { id: 1003, name: 'Angular' }
// ]
// const flag = true
// const loading = false
// const articleType = 1
// const getArticleTem = () => {
//   switch (articleType) {
//     case 1:
//       return <div>无图模式</div>
//     case 2:
//       return <div>有图模式</div>
//     default:
//       return <div>三图模式</div>
//   }
// }
// // const addCount = (e) => {
// //   console.log(e);
// // }
// const Button = () => {
//   const [count1, setCount] = useState(0)
//   const handleClick = () => {
//     setCount(count1 + 1)
//   }
//   return (<div>
//     <button onClick={() => handleClick()}>添加{count1}</button>
//   </div>)
// }
// const Button1 = () => {
//   const [form, setForm] = useState({ name: 'jack' })
//   const handleClick = () => {
//     setForm({ ...form, name: 'jai' })
//   }
//   return (<div>
//     <button onClick={() => handleClick()}>添加{form.name}</button>
//   </div>)
// }
const user = {
  userId: 3009,
}

function App() {
  // const [currentAct, setCurrentAct] = useState(1)
  // const handleClick = (e) => {
  //   setCurrentAct(e)
  // }
  const [isInput, setIsInput] = useState(false)
  const handleInput = (event, e) => {
    event.stopPropagation()
    setIsInput(e)
  }
  const [tableData, setTableData] = useState(tabData)
  const handleDelete = (id) => {
    setTableData(tabData.filter(item => item.replyId !== id))
  }
  const [isHot, setIsHot] = useState(1)
  const handleChangeTab = (e) => {
    setIsHot(e)
    if (e === 1) {
      setTableData(_.orderBy(tabData, 'likeCount', 'desc'))
    } else {
      setTableData(_.orderBy(tabData, 'createTime', 'desc'))
    }
  }
  const inputRef = useRef(null)
  const [content, setContent] = useState('')
  const handlePushList = () => {
    setTableData([
      ...tabData,
      {
        replyId: uuidv4(),
        user: {
          avatar: 'https://img2.imgtp.com/2024/04/12/aRYe05s6.jpg',
          userId: 3094,
          userName: '高手',
        },
        content: content,
        likeCount: 11,
        createTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      }
    ])
    setContent('')
    inputRef.current.focus()
  }

  return (
    <div className="App">
      {/* 111111
      {`jjjjj`}
      {count}
      {getName()}
      {new Date().getTime()}
      <div style={{ color: 'red' }}>this is a div</div>
      <div>
        <ul>
          {
            objList.map(item => <li key={item.id}>{item.name}</li>)
          }
        </ul>
      </div>
      <div>
        {flag && <div style={{ color: 'red' }}>this is a div</div>}
        {loading ? <div style={{ color: 'red' }}>loading...</div> : <div>this is span</div>}
      </div>
      <div>
        {getArticleTem()}
      </div>
      <Button />
      <Button1 /> */}
      {/* <div className="flexWarp line">
        {tabData.map((item, index) => {
          return <div key={item.id} className={currentAct === item.id ? 'active tabContent' : 'tabContent'} onClick={() => handleClick(item.id)}>{item.name}</div>
        })}
      </div>
      <div className="contentBox">
        {tabData.map(item => {
          return (
            <div key={item.id} className={currentAct === item.id ? 'show' : 'hidden'}>
              {item.childrenList.map((child, index) => {
                return (
                  <div key={index + 'i'} className='itemContent'>
                    <div className='flexWarp'>
                      <div>
                        <img src={child.imageUrl} alt="dd" />
                      </div>
                      <div>
                        {child.title}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div> */}
      <div className='containerBox' onClick={(e) => handleInput(e, false)}>
        <div className="rowFlexBox">
          <div className="leftTitle">
            <span className='bigTitle'>评论</span>
            <span>54</span>
          </div>
          <div className="tabItem">
            <span className={classNames('selectTab', { active: isHot === 1 })} onClick={() => handleChangeTab(1)}>最热</span>
            <span></span>
            <span className={classNames('selectTab', { active: isHot === 2 })} onClick={() => handleChangeTab(2)}>最新</span>
          </div>
        </div>
        <div className='rowFlexBox'>
          <div className='userImage'>
            <img src='https://img2.imgtp.com/2024/04/12/aRYe05s6.jpg' alt='用户头像' />
          </div>
          <div className={classNames('userInputBox', { inputBack: isInput })} onClick={(e) => handleInput(e, true)}>
            <input type="text" placeholder='写下你的评论' value={content} onChange={(e) => setContent(e.target.value)} ref={inputRef} />
          </div>
        </div>
        <div>
          <div className='flexEnd'>
            <button onClick={handlePushList}>发布</button>
          </div>
        </div>
        <div className='replyList'>
          {tableData.map(item => (
            <div className='replyItem' key={item.replyId}>
              <div className='replyUser'>
                <div className='replyUserImage'>
                  <img src={item.user.avatar} alt='用户头像' />
                </div>
                <div className='replyUserText'>
                  <div className='replyUserName'>{item.user.userName}</div>
                  <div className='replyContent'>{item.content}</div>
                  <div className='flexB'>
                    <div className='likeCount'>点赞数：{item.likeCount}</div>
                    <div className='replyTime'>{item.createTime}</div>
                    {item.user.userId === user.userId && <div className='del' onClick={() => handleDelete(item.replyId)}>删除</div>}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
