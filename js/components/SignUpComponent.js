export default {
    props: {
        img: String
    },

    template: `
        <section class="signup-wrapper">
            <h1>Sign Up</h1>

            <div class="avatar-wrapper">
                <h2>Choose Your Avatar</h2>
                <div class="avatars">
                    <img v-for="avatar in avatars"
                    class="avatar"
                    :src="'images/' + avatar.img" 
                    :alt="avatar.img">
                </div>
            </div>

            <form class="signup-form" action="" method="post">
                <h2>Your Acount nfo</h2>
                <label for="username" class="hidden">username</label>
                <input id="username" name="username" type="text" value="" placeholder="Username" required>
                <label for="password" class="hidden">password</label>
                <input id="password" name="password" type="text" value="" placeholder="Password" required>
                <label for="conf-pass" class="hidden">Confirm Password</label>
                <input id="conf-pass" name="conf-pass" type="" value="" placeholder="Confirm Password" required>
                <button type="submit" class="button fill button-input">
                    <span>Enter</span>
                    <div class="arrow"><i class="fas fa-arrow-right"></i></div>
                </button>
            </form>

            <div class="already-member">
                <p>Already a member?</p>
                <router-link to="/login" class="link">Sign In</router-link>
            </div>
        </section>
    `,

    data: function() {
        return {
            avatars: [ 
                {img: "avatar1.svg"},
                {img: "avatar2.svg"},
                {img: "avatar3.svg"},
                {img: "avatar4.svg"},
            ],
        }
    }
    
}