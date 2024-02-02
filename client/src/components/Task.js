import {FaTimes} from 'react-icons/fa' 

const Task = ({task, onDelete, onToggle}) => {
    console.log(task);
    return (
        <div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.description}<FaTimes onClick={() => onDelete(task.id)} style={{color:'red', cursor:'pointer'}}/></h3>
            <p>{task.dueDate}</p>
        </div>
    )
}

export default Task
