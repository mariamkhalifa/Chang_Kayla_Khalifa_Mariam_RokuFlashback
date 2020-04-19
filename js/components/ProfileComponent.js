import EditUserComponent from './EditUserComponent.js'

export default {
    name: 'userprofile',

    template: `
    <section class="user-profile-wrapper">
        <h2 class="sr-only">User Profile</h2>

        <div class="profile-header">
            <img class="profile-avatar" :src="'images/' + currentuser.avatar" alt="user avatar">
            <div class="profile-right">
                <h3 class="profile-username">{{ currentuser.username }}</h3>
                <div class="profile-line"></div>
                <p @click="showUsers" class="profile-sub-text">Manage Users</p>    
            </div>
        </div>

        <ul v-if="manageusers" class="profile-manager">
            <user v-for="(user, index) in users" :avatar="user.avatar" :username="user.username" :key="index"/>
        </ul>

    </section>
    `,

    data() {
        return {
            currentuser: [],
            manageusers: false,
            users: []
        }
    },

    created() {
        if(localStorage.getItem('cachedUser')) {
            let user = JSON.parse(localStorage.getItem('cachedUser'));
            this.currentuser = user;
        }
    },

    methods: {
        showUsers() {
            this.manageusers = true;
            this.fetchUsers();
        },

        fetchUsers() {
            const url = './includes/index.php?users=true';

            fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                this.users = data;
            })
            .catch((err) => console.log(err))
        }
    },

    components: {
        user: EditUserComponent
    }
}