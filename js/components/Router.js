import LoginComponent from "./LoginComponent.js"
import AllUsersComponent from "./AllUsersComponent.js"
import UserHomeComponent from "./UserHomeComponent.js"
import AddUserComponent from "./AddUserComponent.js"
import DashboardFilmComponent from "./DashboardFilmComponent.js"
import DashboardTVComponent from "./DashboardTVComponent.js"
import DashboardMusicComponent from "./DashboardMusicComponent.js"


let router = new VueRouter({
routes: [
    { path: '/', redirect: { name: "login" }},
    { path: '/login', name: "login", component: LoginComponent },
    { path: '/users', name: "users", component: AllUsersComponent },
    { path: '/userhome', name: "userhome", component: UserHomeComponent, props: true },
    { path: '/adduser', name: "adduser", component: AddUserComponent },
    { path: '/dashboardfilm', name: "dashboardfilm", component: DashboardFilmComponent },
    { path: '/dashboardtv', name: "dashboardtv", component: DashboardTVComponent },
    { path: '/dashboardmusic', name: "dashboardmusic", component: DashboardMusicComponent },
]
});

export default router
