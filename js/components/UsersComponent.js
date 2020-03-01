export default {
    template: `
        <section class="users-wrapper">
            <h1 class="hidden">Users</h1>
            <ul class="users">
                <h2>Who's Watching?</h2>
                <li v-for="user in users">
                    <router-link to="/adminPass">{{user.name}}</router-link>
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
            users: [ 
                {name: "Kayla"},
                {name: "Mariam"}
            ],
        }
    }
}