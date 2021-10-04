import React from 'react'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <a>
          home 입니다.
        </a>
      </Route>
      <Route exact path="/info">
        <a>
          INFO 입니다.
        </a>
      </Route>
    </Switch>
  )
}

export default App;