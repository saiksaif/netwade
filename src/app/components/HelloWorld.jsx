import React from "react"
import './componentStyles/HelloWorld.css'

function HelloWorld(props) {
  return (
    <div className="greetings">
      <h1 className="green">{props.msg}</h1>
      <h3>
        You’ve successfully created a project with
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      </h3>
    </div>
  )
}