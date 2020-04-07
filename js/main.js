
import LoginComponent from "./components/LoginComponent.js"
import UsersComponent from "./components/UsersComponent.js"
import AddUserComponent from "./components/AddUserComponent.js"
import DashboardFilmComponent from "./components/DashboardFilmComponent.js"
import DashboardTVComponent from "./components/DashboardTVComponent.js"
import DashboardMusicComponent from "./components/DashboardMusicComponent.js"


(() => {
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

  const vm = new Vue({

    data: {
      authenticated: false,

      admin: false,

      kids: false,

      burger: {
        isExpanded: false,
      },

      users: [],

    },

    methods: {
      setAuthenticated(status, data) {
        this.authenticated = status;
        this.user = data;
      },

      logout() {
        this.$router.push({ name: 'login' });
        this.authenticated = false;
        this.burger.isExpanded = false;
      },

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

  router.beforeEach((to, from, next) => {

    if(vm.authenticated == false) {
      next("{ name: 'login' }");
    } else {
      next();
    }
  });

  
})();