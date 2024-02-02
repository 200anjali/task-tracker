import {useState} from 'react'

const AddTask = ({onAdd}) => {


    const [title,setTitle]=useState('')
    const [description,setDescription] = useState('')
    const [dueDate,setDueDate] = useState('')
    const [reminder,setReminder] = useState(false)
    const [isComplete,setIsComplete]=useState((true))

    const onSubmit = (e)=>{
        e.preventDefault();
        if(!description){
            alert('Please add task!')
            return
        }
        onAdd({title,description, dueDate, reminder,isComplete})
        setTitle('')
        setDescription('')
        setDueDate('')
        setReminder(false)
        setIsComplete(true)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <hr/>
            <div className='form-control'>
                <label>Task Title</label>
                <input type="text" placeholder="Add title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Task Description</label>
                <input type="text" placeholder="Add description" value={description} onChange={(e)=>setDescription(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Date & Time</label>
                <input type="date" placeholder="Add due date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)}></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input checked={reminder} type="checkbox" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
            </div>
            <div className='form-control'>
                <label>Completed?</label>
                <input type="bool" placeholder="Is the task completed" value={isComplete} onChange={(e)=>setIsComplete(e.target.value)}></input>
            </div>
            <input type='submit' value="Save task" className="btn btn-block"/>
            
            
        </form>
    )
}

export default AddTask
