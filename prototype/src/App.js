import Homepage from './Homepage'
import Form from './Form'
import './App.css'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/Form">
        <Form />
      </Route>
    </Router>
  )
}

export default App