export default {
    name: 'login',

    template: `
        <section class="login-wrapper">
            <h2 class="main-heading">Sign In</h2>
            <form class="login-form">
                <p class="form-msg">{{ formmsg }}</p>
                <label for="username" class="hidden">Username</label>
                <input v-model="input.username" id="username" name="username" type="text" value="" placeholder="username" required>
                <label for="password" class="hidden">Password</label>
                <input v-model="input.password" id="password" name="password" type="password" value="" placeholder="password" required>
                <button @click.prevent="login" type="submit" class="button fill button-input">
                    <span>Enter</span>
                    <div class="button-arrow"><i class="fas fa-arrow-right"></i></div>
                </button>
                <!-- <div class="not-member">
                    <p>Not a member?</p>
                    <router-link :to="{ name: 'signup' }" class="link">Sign Up</router-link>
                </div> -->
            </form>
        </section>
     `,

    data() {
        return {
            input: {
                username: "",
                password: ""
            },

            formmsg: ""
        }
    },

    methods: {
        login() {
            if (this.input.username !== "" && this.input.password !== "") {
                let formData = new FormData();

                formData.append('username', this.input.username);
                formData.append('password', this.input.password);

                let url = `./includes/index.php`;

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (typeof data != "object") { // means that we're not getting a user object back
                            //console.warn(data);
                            this.formmsg = "This user doesn't exist!";
                            this.input.username = "";
                            this.input.password = "";
                        } else {
                            console.log('here!');
                            this.$emit('authenticated', true, data);
                            this.$router.push({ name: 'users' });
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            } else {
                //console.log('a username and password must be entered!');
                this.formmsg = "A username and password must be entered!";
            }

        }
    }
    
}