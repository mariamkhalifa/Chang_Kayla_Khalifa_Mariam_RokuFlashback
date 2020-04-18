import LoginComponent from "./LoginComponent.js"
import AllUsersComponent from "./AllUsersComponent.js"
import UserHomeComponent from "./UserHomeComponent.js"
import SearchComponent from "./SearchComponent.js"
import FilterResultComponent from "./FilterResultComponent.js"
import AddUserComponent from "./AddUserComponent.js"
import DashboardFilmComponent from "./DashboardFilmComponent.js"
import DashboardTVComponent from "./DashboardTVComponent.js"
import DashboardMusicComponent from "./DashboardMusicComponent.js"
import MediaInfoComponent from "./MediaInfoComponent.js"


let router = new VueRouter({
routes: [
    { path: '/', redirect: { name: "login" }},
    { path: '/login', name: "login", component: LoginComponent },
    { path: '/users', name: "users", component: AllUsersComponent },
    { path: '/userhome', name: "userhome", component: UserHomeComponent, props: true },
    { path: '/search', name: "search", component: SearchComponent },
    { path: '/filterresult', name: "filterresult", component: FilterResultComponent, props: true },
    { path: '/adduser', name: "adduser", component: AddUserComponent },
    { path: '/dashboardfilm', name: "dashboardfilm", component: DashboardFilmComponent, props: true },
    { path: '/dashboardtv', name: "dashboardtv", component: DashboardTVComponent, props: true },
    { path: '/dashboardmusic', name: "dashboardmusic", component: DashboardMusicComponent, props: true },
    { path: '/mediainfo', name: "mediainfo", component: MediaInfoComponent, props: true },
]
});

export default router
