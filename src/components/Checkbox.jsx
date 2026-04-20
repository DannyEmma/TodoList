import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'


function Checkbox({checked, updateCompletedTask, needUpdateTask, iconBaseUrl}){
    const uuid = uuidv4()

    const handleChange = (e) => {
        updateCompletedTask(!checked)

        if(needUpdateTask !== undefined) needUpdateTask()
    }

    return <>
        <input id={uuid} onChange={handleChange} type="checkbox" />
        <label className={"checkbox "+(checked ? 'checked-task' : '')} htmlFor={uuid}>
            {checked && <img src={iconBaseUrl+"icon-check.svg"} alt="Check Icon" />}
        </label>
    </>
}

export default Checkbox