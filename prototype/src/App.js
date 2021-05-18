import Homepage from './components/Homepage'
import Form from './components/Form'
import './App.css'
import {
  BrowserRouter as Router,
  Switch, Route, Link, Redirect
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/Form">
        {/* <Form /> */}     {/* un-commment '<Form />' once we have code in 'Form.js' to display */}
      </Route>
    </Router>
  )
}

export default App