 import { useState, useEffect } from "react"
 
 export const Get = () => {
    useEffect(fn, [])
    const [todos, setTodos] = useState([])

function fn(){
fetch(`https://jsonplaceholder.typicode.com/todos`)
.then((response) => response.json())
.then((data) => setTodos(data))
.catch((err) => console.log(err))
}

return(
    <div>
        {
            todos.map((todo) => {
                return<h6 key={todo.id}>{todo.title}</h6>

            })
        }

    </div>
)
 }


 