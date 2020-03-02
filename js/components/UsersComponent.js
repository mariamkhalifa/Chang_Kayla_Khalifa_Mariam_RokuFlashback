export default {
    template: `
        <section class="users-wrapper">
            <h1 class="hidden">Users</h1>
            <ul class="users">
                <h2>Who's Watching?</h2>
                <li v-for="user in users">
                    <router-link to="/adminPass">{{user.username}}</router-link>
                    <i class="fas fa-arrow-right"></i>
                </li>
                <li>
                    <p>Kids</p>
                    <i class="fas fa-arrow-right"></i>
                </li>
                <li>
                    <p>Family</p>
                    <i class="fas fa-arrow-right"></i>
                </li>
                <li>
                    <p>Create User</p>
                    <router-link to="/addUser" class="plus">+</router-link>
                </li>
            </ul>
            <div class="logout-link">
                <i class="fas fa-sign-out-alt"></i>
                <router-link to="/">Logout</router-link>
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