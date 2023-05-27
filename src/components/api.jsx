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


 export const Post = () => {

    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const submitHandler = (event) => {
      event.preventDefault()

        fetch('https://jsonplaceholder.typicode.com/posts', {
               method: 'POST',
               body: JSON.stringify({
               title: title,
               body: body,
               userId: userId,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type="number" placeholder="UserId" 
                //     value={userId} 
                    onChange={(e) => {
                    setUserId(e.target.value)
                 }}
                />

                <input type="text" placeholder="Title" value={title} onChange={(e) => {
                    setTitle(e.target.value)
                }} />

                <input type="text" placeholder="Body" value = {body} onChange={(e) => {
                    setBody(e.target.value)
                }}
                />

               <button type="submit">Submit</button>

            </form>
        </div>
    )
 }