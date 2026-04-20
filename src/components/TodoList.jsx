import { useState } from 'react'
import SearchBar from './SearchBar'
import TaskRow from './TaskRow'
import FilterBar from './FilterBar'



function TodoList({iconBaseUrl, isMobile}){
    if(!localStorage.getItem('todo-list')) localStorage.setItem('todo-list', JSON.stringify([]))
        
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todo-list')))
    const [filter, setFilter] = useState('all')

    const filteredTodoList = () => {
        let filteredTodoList = null

        switch (filter) {
            case 'all':
                filteredTodoList = todoList
                break
            case 'active':
                filteredTodoList = todoList.filter( task => !task.completed)
                break
            case 'completed':
                filteredTodoList = todoList.filter( task => task.completed)
                break
            default:
                filteredTodoList = todoList
                break
        }

        return filteredTodoList
    }
    

    const reorderList = (draggedIndex, dropIndex) => {
        const updatedTodoList = [...todoList]
        //-- Remove the dragged task --
        updatedTodoList.splice(draggedIndex, 1)
        //-- Add the dragged task to the correct index --
        updatedTodoList.splice(dropIndex, 0, todoList[draggedIndex])
        //-- Update todo list --
        updateTodoList(updatedTodoList)
    }

    const addTask = (newTask) => {
        const updatedTodoList = [...todoList, newTask]
        updateTodoList(updatedTodoList)
    }

    const deleteTask = (currentTaskId) => {
        const updatedTodoList = todoList.filter((task) => task.id !== currentTaskId)
        updateTodoList(updatedTodoList)
    }

    const updateTask = (taskId, isCompleted) => {
        todoList.map(task => {
            if(task.id === taskId) task.completed = isCompleted
        })
        
        updateTodoList(todoList)
    }

    const updateTodoList = (updatedTodoList) => { 
        setTodoList(updatedTodoList)
        localStorage.setItem('todo-list', JSON.stringify(updatedTodoList))
    }

    const remainingTasks = () => todoList.filter( task => !task.completed).length

    const deleteCompletedTasks = () => {
        const updatedTodoList = todoList.filter(task => !task.completed)
        updateTodoList(updatedTodoList)
    }
    


    return (
        <>
            <SearchBar addTask={addTask} iconBaseUrl={iconBaseUrl}/>
            <ul id="todo-list">
                {filteredTodoList().map((task, index) => <TaskRow key={task.id} task={task} index={index} iconBaseUrl={iconBaseUrl} updateTask={updateTask} deleteTask={deleteTask} reorderList={reorderList}/>)}
            </ul>
            <FilterBar filter={filter} updateFilter={setFilter} remainingTasks={remainingTasks()} deleteCompletedTasks={deleteCompletedTasks} isMobile={isMobile}/>
        </>
    )
}

export default TodoList