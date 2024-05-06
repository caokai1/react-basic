import { useState } from 'react'
let count = 100
const getName = () => {
  return 'jsName'
}
const objList = [
  { id: 1001, name: 'Vue' },
  { id: 1002, name: 'React' },
  { id: 1003, name: 'Angular' }
]
const flag = true
const loading = false
const articleType = 1
const getArticleTem = () => {
  switch (articleType) {
    case 1:
      return <div>无图模式</div>
    case 2:
      return <div>有图模式</div>
    default:
      return <div>三图模式</div>
  }
}
// const addCount = (e) => {
//   console.log(e);
// }
const Button = () => {
  const [count1, setCount] = useState(0)
  const handleClick = () => {
    setCount(count1 + 1)
  }
  return (<div>
    <button onClick={() => handleClick()}>添加{count1}</button>
  </div>)
}
const Button1 = () => {
  const [form, setForm] = useState({ name: 'jack' })
  const handleClick = () => {
    setForm({ ...form, name: 'jai' })
  }
  return (<div>
    <button onClick={() => handleClick()}>添加{form.name}</button>
  </div>)
}
function App() {
  return (
    <div className="App">
      111111
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
      <Button1 />
    </div>
  );
}

export default App;
