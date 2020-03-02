export default {
    template: `
        <section class="login-wrapper">
            <div></div>
            <h1>Sign In</h1>
            <form action="" method="post" class="login-form">
                <label for="username" class="hidden">Username</label>
                <input id="username" name="username" type="text" value="" placeholder="username" required>
                <label for="password" class="hidden">Password</label>
                <input id="password" name="" type="password" value="" placeholder="password" required>
                <button type="submit" class="button fill button-input">
                    <span>Enter</span>
                    <div class="arrow"><i class="fas fa-arrow-right"></i></div>
                </button>
                <div class="not-member">
                    <p>Not a member?</p>
                    <router-link to="/signUp" class="link">Sign Up</router-link>
                </div>
            </form>
        </section>
     `,

    
}