export default {
    name: 'adduser',
    
    props: {
        img: String
    },

    template: `
        <section class="add-user-wrapper">
            <h2 class="main-heading">New User</h2>

            <form class="add-user-form" action="" method="POST">
                <div class="avatar-wrapper">
                    <h3>Choose Your Avatar</h3>
                    <ul class="avatars">
                        <!-- <div v-for="(avatar, index) in avatars" :key="index">
                            <label :for="avatar.index" class="sr-only">{{ avatar.name }}</label>
                            <input v-model="input.avatar" :id="avatar.index" type="image" :src="'images/' + avatar.img" 
                            :alt="avatar.name" name="avatar" value="" class="add-user-avatar avatar">
                        </div> -->

                        <li>
                            <label for="avatar1" class="sr-only">Avatar 1</label>
                            <input v-model="input.avatar" id="avatar1" type="radio" name="avatar" value="avatar1.svg"> 
                            <img class="add-user-avatar avatar" src="images/avatar1.svg" alt="avatar 1">
                        </li>
                        <li>
                            <label for="avatar2" class="sr-only">Avatar 2</label>
                            <input v-model="input.avatar" id="avatar2" type="radio" name="avatar" value="avatar2.svg">
                            <img class="add-user-avatar avatar" src="images/avatar2.svg" alt="avatar 1">
                        </li>
                        <li>
                            <label for="avatar3" class="sr-only">Avatar 3</label>
                            <input v-model="input.avatar" id="avatar3" type="radio" name="avatar" value="avatar3.svg">
                            <img class="add-user-avatar avatar" src="images/avatar3.svg" alt="avatar 1"> 
                        </li>
                        <li>
                            <label for="avatar4" class="sr-only">Avatar 4</label>
                            <input v-model="input.avatar" id="avatar4" type="radio" name="avatar" value="avatar4.svg">
                            <img class="add-user-avatar avatar" src="images/avatar4.svg" alt="avatar 1">
                        </li>
                    </ul>
                </div>

                <h3>Your Account Info</h3>

                <p class="form-msg">{{ formmsg }}</p>
                
                <label for="add-username" class="sr-only">username</label>
                <input v-model="input.username" id="add-username" name="username" type="text" value="" placeholder="Username" required>
                
                <label for="add-password" class="sr-only">password</label>
                <input v-model="input.password" id="add-password" name="password" type="text" value="" placeholder="Password" required>
                
                <label for="add-role" class="sr-only">Role</label>
                <input v-model="input.role" id="add-role" list="roleslist" value="" name="role" placeholder="Role" required>
                    <datalist id="roleslist">
                        <option value="1">Admin</option>
                        <option value="0">Not Admin</option>
                    </datalist>
                
                <button @click.prevent="addUser" type="submit" class="button fill button-input">
                    <span>Add</span>
                    <div class="button-arrow"><i class="fas fa-arrow-right"></i></div>
                </button>
            </form>

        </section>
    `,

    data: function() {
        return {
            // avatars: [ 
            //     {name: "Avatar 1", img: "avatar1.svg"},
            //     {name: "Avatar 2", img: "avatar2.svg"},
            //     {name: "Avatar 3", img: "avatar3.svg"},
            //     {name: "Avatar 4", img: "avatar4.svg"},
            // ],

            input: {
                username: "",
                password: "",
                avatar: "",
                role: ""
            },

            formmsg: ""
        }
    },

    methods: {
        addUser() {
            console.log('add user');

            if (this.input.username !== "" && this.input.password !== "" && this.input.role !== "") {
                let formData = new FormData();

                formData.append('avatar', this.input.avatar);
                formData.append('username', this.input.username);
                formData.append('password', this.input.password);
                formData.append('role', this.input.role);

                let url = `./includes/index.php?add_user=true`;

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data == true) { 
                            console.log('here!');
                            this.$router.push({ name: 'users' });
                        } else {
                            this.formmsg = data;
                            // this.input.username = "";
                            // this.input.password = "";
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            } else {
                this.formmsg = "Please fill out the required fields!";
            }
        }
    }
    
}