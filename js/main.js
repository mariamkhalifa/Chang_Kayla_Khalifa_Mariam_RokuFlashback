
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

    created: function() { 
      if(localStorage.getItem('cachedUser')) {
        let user = JSON.parse(localStorage.getItem('cachedUser'));
        this.authenticated = true;
        this.$router.push({ name: 'userhome', params: { currentuser : user } });
      } else {
        this.$router.push({ name: 'login' });
      }
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

        if(localStorage.getItem('cachedUser')) {
          localStorage.removeItem('cachedUser');
        }
      },

      expandBurger() {
        console.log('expanded');
        this.burger.isExpanded = (this.burger.isExpanded) ? false : true ;
      },

      closeBurger() {
        console.log('closed');
        this.burger.isExpanded = (this.burger.isExpanded) ? false : true;
      },

      navigateTo() {
        this.burger.isExpanded = false;
      }
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