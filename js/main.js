// import the login component first (actually all components here, but we're starting with login)
import LandingComponent from "./components/LandingComponent.js"
import SignUpComponent from "./components/SignUpComponent.js"
import LoginComponent from "./components/LoginComponent.js"
import UsersComponent from "./components/UsersComponent.js"
import AdminPassComponent from "./components/AdminPassComponent.js"
import DashboardFilmComponent from "./components/DashboardFilmComponent.js"
import DashboardTVComponent from "./components/DashboardTVComponent.js"
import DashboardMusicComponent from "./components/DashboardMusicComponent.js"


(() => {
  let router = new VueRouter({
    routes: [
      { path: '/', name: "landing", component: LandingComponent },
      { path: '/signUp', name: "signUp", component: SignUpComponent },
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/users', name: "users", component: UsersComponent },
      { path: '/adminPass', name: "adminPass", component: AdminPassComponent },
      { path: '/dashboardFilm', name: "dashboardFilm", component: DashboardFilmComponent },
      { path: '/dashboardTV', name: "dashboardTV", component: DashboardTVComponent },
      { path: '/dashboardMusic', name: "dashboardMusic", component: DashboardMusicComponent },
    ]
  });

  const vm = new Vue({

    data: {
      admin: false,

      kids: false,

      burger: {
        isExpanded: false,
      }


    },

    methods: {
        expandBurger() {
          console.log('expanded');
          this.burger.isExpanded = (this.burger.isExpanded) ? false : true ;
        },

        closeBurger() {
          console.log('closed');
          this.burger.isExpanded = (this.burger.isExpanded) ? false : true;
      },

        
    },

    router
  }).$mount("#app");

  
})();