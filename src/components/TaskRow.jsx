import { useState } from 'react'
import Checkbox from './Checkbox'

function TaskRow({task, index, iconBaseUrl, updateTask, deleteTask, reorderList}){
    const [isCompletedTask, setIsCompletedTask] = useState(task.completed)

    const needUpdateTask = () => {                
        updateTask(task.id, !isCompletedTask)
    }

    const handleOnDragStart = (e) => {       
        console.log("handleOnDragStart");
 
        e.dataTransfer.setData('draggedIndex', index)
        
    }
    const handleOnDrop = (e) => {
        console.log("handleOnDrop");

        const draggedIndex = e.dataTransfer.getData('draggedIndex')
        reorderList(draggedIndex, index)
    }

    return  (
        <li className='row-checkbox' draggable="true" onDragStart={handleOnDragStart} onDragOver={ e => e.preventDefault()} onDrop={handleOnDrop}>
            <label>
                <Checkbox checked={isCompletedTask} updateCompletedTask={setIsCompletedTask} needUpdateTask={needUpdateTask} iconBaseUrl={iconBaseUrl} taskId={task.id}/>
                <p className={isCompletedTask ? 'completed-task' : ''}>{task.name}</p>
            </label>
            <img onClick={() => deleteTask(task.id)} src={iconBaseUrl+"icon-cross.svg"} alt="Cross Icon" />
        </li>
    )
    
}

export default TaskRow