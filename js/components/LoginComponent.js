export default {
    template: `
        <section class="login-wrapper">
            <div></div>
            <h1>Sign In</h1>
            <form action="" method="post">
                <label for="username">Username</label>
                <input id="username" name="username" type="text" value="" placeholder="username" required>
                <label for="password">Password</label>
                <input id="password" name="" type="password" value="" placeholder="password" required>
                <button type="submit">
                    Enter
                    <i class="fas fa-arrow-right"></i>
                </button>
                <div class="not-member">
                    <p>Not a member?</p>
                    <router-link to="/">Sign Up</router-link>
                </div>
            </form>
        </section>
     `,

    
}