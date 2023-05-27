
// import { v4 as uuid } from 'uuid';
import { useState } from "react";


export const Todos = () => {

const submitHandler = () => {
    event.preventDefault()

    if(item.trim().length === 0) alert('Please enter an todo')

    else{
        // render todo list
        setTodos([...todos, item]);
        setItem('');
        setKey(0);

        // setTodos([]);
        
    }

    console.log(todos)

}

const[item, setItem] = useState('')
const[key, setKey] = useState(0)
const[todos, setTodos] = useState([])


    return(
        <>
        <form onChange={(e) => {
            e.preventDefault
        }} 
        onSubmit={submitHandler}>
            <input type="number" value={key} onChange={() => {
                setKey(event.target.value)
            }} />
           
            <input type="text" placeholder="Todo" value={item} key={key}  onChange={() => {
                setItem(event.target.value)
            }} />

            <button type="submit" >Add</button>

        </form> 

        <TodoList todos={todos} />

        </>
    )
}

export const TodoList = (props) => {
    return(
        <div>
            <ul>
            {
               props.todos.map(todo => {
                return<li key={todo.id}>{todo}</li>
               })
            }
           </ul>

    </div>
       

    )


}