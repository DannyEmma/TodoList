import { useState } from 'react'
import Banner from './components/Banner'
import Title from './components/Title'
import TodoList from './components/TodoList'
import Theme from './Theme'


function App() {
  const [theme, setTheme] = useState('light')
  const [imgBaseUrl, iconBaseUrl] = ['src/assets/img/', 'src/assets/icon/']
  const isMobile = window.matchMedia("(max-width: 767px)").matches
    
  return (
    <>
      <Banner imgBaseUrl={imgBaseUrl} currentTheme={theme}/>
      <div id="todo-list-container">
        <Title iconBaseUrl={iconBaseUrl} currentTheme={theme} changeTheme={setTheme}/>
        <TodoList iconBaseUrl={iconBaseUrl} isMobile={isMobile}/>
        {!isMobile &&
          <p id="drag-instruction">Drag and drop to reorder list</p>
        }
      </div>
      <Theme theme={theme}/>
    </>
  )
}
export default App
