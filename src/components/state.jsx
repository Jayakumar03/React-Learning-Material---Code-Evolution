import{useState} from 'react'

export const State = () => {

    function increment() {
        setState(state + 1)
        
    }

    function decrement() {
        state <= 0  ? setState(0) : setState(state - 1);
        
        
    }


const [state,setState] = useState(0)
return(
<div>
<h1>{state}</h1>
<button onClick={increment}>click me increment</button>
<button onClick={decrement}>click me decrement</button>


</div>

)


}