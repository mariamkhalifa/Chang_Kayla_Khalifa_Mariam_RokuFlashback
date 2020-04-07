export default {
    name: 'users',
    
    props: {
        avatar: String
    },
    
    template: `
        <section class="users-wrapper">
            <h1 class="hidden">Users</h1>
            <ul class="users">
                <h2>Who's Watching?</h2>
                <li v-for="user in users">
                    <router-link :to="{ name: 'userhome' }"><img :src="'images/' + user.avatar" alt="user avatar"></router-link>
                    <router-link :to="{ name: 'userhome' }" class="user-name"><h3 >{{user.username}}</h3></router-link>
                    <router-link :to="{ name: 'userhome' }" class="user-arrow"><i class="fas fa-arrow-right"></i></router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'dashboardkids' }"><img src="images/avatar3.svg" alt="kids avatar"></router-link>
                    <router-link :to="{ name: 'dashboardkids' }" class="user-name"><h3 >Kids</h3></router-link>
                    <router-link :to="{ name: 'dashboardkids' }" class="user-arrow"><i class="fas fa-arrow-right"></i></router-link>
                </li>
                <!-- <li>
                    <router-link :to="{ name: 'dashboardfamily' }"><img src="images/avatar4.svg" alt="family avatar"></router-link>
                    <router-link :to="{ name: 'dashboardfamily' }" class="user-name"><h3 >Family</h3></router-link>
                    <router-link :to="{ name: 'dashboardfamily' }" class="user-arrow"><i class="fas fa-arrow-right"></i></router-link>
                </li> -->
                <li>
                    <router-link :to="{ name: 'adduser' }"><img class="add-user-icon" src="images/avatar5.svg" alt="add user icon"></router-link>
                    <router-link :to="{ name: 'adduser' }" class="user-name"><h3 >New User</h3></router-link>
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
    }

    
}