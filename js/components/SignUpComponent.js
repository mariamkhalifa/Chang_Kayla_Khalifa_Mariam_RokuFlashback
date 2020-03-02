export default {
    props: {
        img: String
    },

    template: `
        <section class="users-wrapper">
            <h1>Sign Up</h1>

            <h2>Choose Your Avatar</h2>

            <div class="avatar-wrapper">
                <img v-for="avatar in avatars"
                class="avatar"
                :src="'images/' + avatar.img" 
                :alt="avatar.img">
            </div>

            <form class="signup-form" action="" method="post">
                <h2>Your Acount nfo</h2>
                <label for="username" class="hidden">username</label>
                <input id="username" name="username" type="text" value="" placeholder="Username" required>
                <label for="password" class="hidden">password</label>
                <input id="password" name="password" type="text" value="" placeholder="Password" required>
                <label for="conf-pass" class="hidden">Confirm Password</label>
                <input id="conf-pass" name="conf-pass" type="" value="" placeholder="Confirm Password" required>
                <button type="submit">
                    Enter
                    <i class="fas fa-arrow-right"></i>
                </button>
            </form>

            <div class="not-member">
                <p>Already a member?</p>
                <router-link to="/login">Sign In</router-link>
            </div>
        </section>
    `,

    data: function() {
        return {
            avatars: [ 
                {img: "avatar1.jpg"},
                {img: "avatar2.jpg"},
                {img: "avatar3.jpg"},
                {img: "avatar4.jpg"},
            ],
        }
    }
    
}