import UserComponent from './UserComponent.js'

export default {
    name: 'users',
    
    template: `
        <section class="users-wrapper">
            <h2 class="sr-only">Users</h2>
            <ul class="users">
                <h3>Who's Watching?</h3>

                <user v-for="(user, index) in users" :liveuser="user" :key="index" />
                
                <li>
                    <router-link :to="{ name: 'dashboardkids' }"><img class="avatar" src="images/avatar3.svg" alt="kids avatar"></router-link>
                    <router-link :to="{ name: 'dashboardkids' }" class="user-name"><h4>Kids</h4></router-link>
                    <router-link :to="{ name: 'dashboardkids' }" class="user-arrow"><i class="fas fa-arrow-right"></i></router-link>
                </li>
                
                <li>
                    <router-link :to="{ name: 'adduser' }"><img class="add-user-icon avatar" src="images/avatar5.svg" alt="add user icon"></router-link>
                    <router-link :to="{ name: 'adduser' }" class="user-name"><h4>New User</h4></router-link>
                    <router-link :to="{ name: 'adduser' }" class="user-plus"><span>+</span></router-link>
                </li>
            </ul>
            
        </section>
    `,

    data: function() {
        return {
            users : []
        }
    },

    created: function() {
        this.fetchUsers();
    },

    methods: {
        fetchUsers() {
            //console.log('fetch users here');

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
        user: UserComponent
    }

    
}