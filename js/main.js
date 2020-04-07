
import router from './components/Router.js'

(() => {
  
  const vm = new Vue({

    data: {
      authenticated: false,

      admin: false,

      kids: false,

      burger: {
        isExpanded: false,
      },

      user: [],

    },

    methods: {
      navigateToHome() {
        this.$router.push({ name: 'userhome', params: { users: this.user } })
      },

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