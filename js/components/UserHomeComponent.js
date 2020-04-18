import MediaNav from './MediaNav.js'

export default {
    name: 'userhome',

    props: ['currentuser'],

    template: `
    <section class="user-home">
        <h2 class="sr-only">User Home</h2>

        <router-link :to="{ name: 'users' }"><i class="fas fa-arrow-left"></i></router-link>

        <div class="user-info-wrapper">
            <h3 class="main-heading">{{ currentuser.username }}</h3>
            <img class="user-home-avatar avatar" :src="'images/' + currentuser.avatar" alt="user avatar">
        </div>

        <medianav :currentuser="currentuser"/>

    </section>
    `,

    components: {
        medianav: MediaNav
    },

}