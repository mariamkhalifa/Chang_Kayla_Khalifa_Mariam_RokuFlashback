import UserComponent from './UserComponent.js'

export default {
    name: 'users',
    
    template: `
        <section class="users-wrapper">
            <h2 class="sr-only">Users</h2>
            <ul class="users">
                <h3>Who's Watching?</h3>

                <user @roleset="setRole" v-for="(user, index) in users" :liveuser="user" :key="index" />
                
                <li>
                    <router-link :to="{ name: 'adduser' }"><img class="create-user-avatar" src="images/avatar5.svg" alt="add user icon"></router-link>
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
        },

        setRole(role) {
            this.$emit('roleset', role);
        }
    },

    components: {
        user: UserComponent
    }

    
}