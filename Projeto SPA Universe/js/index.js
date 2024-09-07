import { Router } from "./routes.js"

const routes = new Router
const home = new Router

routes.add("/about", "../pages/about.html")
routes.add("/exploracao", "../pages/exploração.html")

home.add2("/home", "../pages/home.html")



window.route = () => routes.route()
window.homeEvent = () => home.homeEvent()
window.onpopstate = () => routes.handle()
