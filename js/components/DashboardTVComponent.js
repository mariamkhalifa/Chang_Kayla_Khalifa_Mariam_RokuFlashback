export default {
    props: {
        src: String
    },

    template: `
        <section class="">
            <h1>TV Comp</h1>
            <ul class="bottom-nav">
                <h1 class="hidden">Bottom Navigation</h1>
                <li>
                    <router-link to="/dashboardfilm">
                        <!-- <i class="fas fa-film  fa-4x"></i> -->
                        <img src="images/film.svg" alt="film icon">
                        <p>Film</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboardtv">
                        <!-- <i class="fas fa-tv fa-4x"></i> -->
                        <img src="images/tv.svg" alt="tv icon">
                        <p>Tv</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboardmusic">
                        <!-- <i class="fas fa-music fa-4x"></i> -->
                        <img src="images/music.svg" alt="music icon">
                        <p>Music</p>
                    </router-link>
                </li>
            </ul>
        </section>
    `,

}