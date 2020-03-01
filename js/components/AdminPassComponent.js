export default {
    template: `
        <section class="admin-pass-wrapper">
            <h1 class="hidden">Admin Password</h1>
            <h2>Kayla</h2>
            <img src="images/avatar1.jpg" alt="user avatar">
            <form class="admin-pass-form" action="" methd="post">
                <label for="admin-password" class="hidden">Password</label>
                <input id="admin-password" name="admin-password" type="text" value="" placeholder="Password" required>
                <button type="submit">
                    Enter
                    <i class="fas fa-arrow-right"></i>
                </button>
            </form>

        </section>
    `
}