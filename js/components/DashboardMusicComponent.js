export default {
    props: {
        src: String
    },

    template: `
        <section class="">
            <h1>Music Comp</h1>
            <ul class="bottom-nav">
                <h1 class="hidden">Bottom Navigation</h1>
                <li>
                    <router-link to="/dashboardfilm">
                        <i class="fas fa-film  fa-4x"></i>
                        <p>Film</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboardtv">
                        <i class="fas fa-tv fa-4x"></i>
                        <p>Tv</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboardmusic">
                        <i class="fas fa-music fa-4x"></i>
                        <p>Music</p>
                    </router-link>
                </li>
            </ul>
        </section>
    `,

}