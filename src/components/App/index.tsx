import React from "react"
import "./style.scss"

import { Posts } from "../Posts"
import { VoidCircle } from "../../shared/VoidCircle"

const circle = new VoidCircle()

export const App = () => {
  return (
    <div className="App">
      <div className="background">
        <canvas ref={(canvas) => circle.canvas = canvas} />
      </div>
      <header>
        <img src="./images/logo.svg" alt="Avoid.dev Logo" />
        <h2>Bringing code lines to context</h2>
      </header>
      <Posts />
    </div>
  )
}
