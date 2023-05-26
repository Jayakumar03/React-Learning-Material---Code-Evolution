// import Props from './components/props'
// import { State } from './components/state'
import { Get } from "./components/api";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Props name="Jayakumar" setHeroName="Batman">
          <p>Hello i am children !!</p>
        </Props> */}

        {/* state */}

        {/* <State /> */}
        
         <Get />
        
      </div>
    </>
  )
}

export default App
