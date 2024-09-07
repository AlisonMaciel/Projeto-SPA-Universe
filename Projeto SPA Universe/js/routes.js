export class Router  {

  constructor() {
    this.routes = {}
    this.homePage = {}
  }

  add(routeName, page) {
    this.routes[routeName] = page
  }

  add2(routeName, page) {
    this.homePage[routeName] = page
  }


  route(event) {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    this.handle()
  }
  
  homeEvent(event) {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    this.home()
  }
  
  handle() {
    const {pathname} = window.location
    const route = this.routes[pathname] || "../pages/404.html"
  
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.getElementById("screen").innerHTML = html
      document.getElementById("screen").style.display = "block"
      document.getElementById("main").style.display = "none"
    })
  }
  
  home() {
    const {pathname} = window.location
    const homes = this.homePage[pathname] || "../pages/404.html"
    
    fetch(homes)
    .then(date => date.text())
    .then(main => {
      document.getElementById("main").innerHTML = main
      document.getElementById("screen").style.display = "none"
      document.getElementById("main").style.display = "grid"
    })
  }
}