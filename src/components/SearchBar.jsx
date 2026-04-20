import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Checkbox from './Checkbox'

function SearchBar({addTask, iconBaseUrl}){
    const [isCompletedTask, setIsCompletedTask] = useState(false)

    const handleKeyDown = (e) => {
        if(e.key === 'Enter' && e.target.value !== ''){
            addTask({id: uuidv4(), name: e.target.value, completed: isCompletedTask})
            document.querySelector('#search-bar input[type="text"]').value= ''
            
            
        }
    }

    return (
        <div id="search-bar" className='row-checkbox'>
           <Checkbox checked={isCompletedTask} updateCompletedTask={setIsCompletedTask} iconBaseUrl={iconBaseUrl}/>
           <input type="text" placeholder="Create a new task..." onKeyDown={handleKeyDown} className={isCompletedTask ? 'completed-task' : ''} />
        </div>
    )
}

export default SearchBar