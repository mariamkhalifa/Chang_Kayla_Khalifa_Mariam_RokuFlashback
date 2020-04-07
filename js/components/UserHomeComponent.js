export default {
    name: 'userhome',

    props: ['currentuser'],

    template: `
    <section class="userhome-wrapper">
        <h2 class="hidden">User Home</h2>

        <div class="user-home-wrapper">
            <h3>Welcome {{ currentuser.username }}</h3>
            <img class="user-home-avatar avatar" :src="'images/' + currentuser.avatar" alt="user avatar">
        </div>

    </section>
    `
}