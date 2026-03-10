import "./app.css"
import "./normalize.css"
import { mount } from "svelte"
import App from "./App.svelte"

const app = mount(App, {
  target: document.getElementById("app"),
})

export default app
