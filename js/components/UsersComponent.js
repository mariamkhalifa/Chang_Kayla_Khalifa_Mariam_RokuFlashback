export default {
    props: {
        avatar: String
    },
    
    template: `
        <section class="users-wrapper">
            <h1 class="hidden">Users</h1>
            <ul class="users">
                <h2>Who's Watching?</h2>
                <li v-for="user in users">
                    <router-link to="/adminPass"><img :src="'images/' + user.avatar" alt="user avatar"></router-link>
                    <router-link to="/adminPass" class="user-name"><h3 >{{user.username}}</h3></router-link>
                    <router-link to="/adminPass" class="user-arrow"><i class="fas fa-arrow-right"></i></router-link>
                </li>
                <li>
                    <router-link to="/dashboardKids"><img src="images/avatar3.svg" alt="kids avatar"></router-link>
                    <router-link to="/dashboardKids" class="user-name"><h3 >Kids</h3></router-link>
                    <router-link to="/dashboardKids" class="user-arrow"><i class="fas fa-arrow-right"></i></router-link>
                </li>
                <li>
                    <router-link to="/dashboardFamily"><img src="images/avatar4.svg" alt="family avatar"></router-link>
                    <router-link to="/dashboardFamily" class="user-name"><h3 >Family</h3></router-link>
                    <router-link to="/dashboardFamily" class="user-arrow"><i class="fas fa-arrow-right"></i></router-link>
                </li>
                <li>
                    <router-link to="/addUser"><img src="images/add_user.svg" alt="add user icon"></router-link>
                    <router-link to="/addUser" class="user-name"><h3 >Create User</h3></router-link>
                    <router-link to="/addUser" class="user-arrow" class="user-plus"><span>+</span></router-link>
                </li>
            </ul>
            <div class="logout-link">
                <i class="fas fa-sign-out-alt"></i>
                <router-link to="/" class="link">Logout</router-link>
            </div>
        </section>
    `,

    data: function() {
        return {
            // users: [ 
            //     {name: "Kayla"},
            //     {name: "Mariam"}
            // ],

            users : []
        }
    },

    created: function() {
        this.fetchUsers();
    },

    methods: {
        fetchUsers() {
            console.log('fetch users here');

            const url = './includes/index.php?users=true';

            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.users = data;
            })
            .catch((err) => console.log(err))
        }
    }

    
}