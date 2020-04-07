import LoginComponent from "./components/LoginComponent.js"
import UsersComponent from "./components/UsersComponent.js"
import AddUserComponent from "./components/AddUserComponent.js"
import DashboardFilmComponent from "./components/DashboardFilmComponent.js"
import DashboardTVComponent from "./components/DashboardTVComponent.js"
import DashboardMusicComponent from "./components/DashboardMusicComponent.js"


let router = new VueRouter({
routes: [
    { path: '/', redirect: { name: "login" }},
    { path: '/login', name: "login", component: LoginComponent },
    { path: '/users', name: "users", component: UsersComponent },
    { path: '/adduser', name: "adduser", component: AddUserComponent },
    { path: '/dashboardfilm', name: "dashboardfilm", component: DashboardFilmComponent },
    { path: '/dashboardtv', name: "dashboardtv", component: DashboardTVComponent },
    { path: '/dashboardmusic', name: "dashboardmusic", component: DashboardMusicComponent },
]
});

export default router
