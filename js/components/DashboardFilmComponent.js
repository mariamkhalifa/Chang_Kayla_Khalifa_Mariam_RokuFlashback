export default {
    props: {
        src: String
    },

    template: `
        <section>
            <h1 class="hidden">Film Dashboard</h1>

            <section class="keep-watching-wrapper">
                <h2>Keep  Watching</h2>
                <a href="#">See All</a>
                <div class="films-wrapper">
                    <video v-for="film in films" 
                    class="film">
                        <source :src="'video/' + film.src">
                    </video>
                </div>
            </section>

            <section class="recommended-wrapper">
                <h2>Recommended</h2>
                <a href="#">See All</a>
                <div class="films-wrapper">
                    <video v-for="film in films" 
                    class="film">
                        <source :src="'video/' + film.src">
                    </video>
                </div>
            </section>

            <ul class="bottom-nav">
                <h1 class="hidden">Bottom Navigation</h1>
                <li>
                    <router-link to="/dashboardfilm"><i class="fas fa-film"></i></router-link>
                </li>
                <li>
                    <router-link to="/dashboardtv"><i class="fas fa-tv"></i></router-link>
                </li>
                <li>
                    <router-link to="/dashboardmusic"><i class="fas fa-music"></i></router-link>
                </li>
            </ul>
        </section>
    `,

    data: function() {
        return {
            films: [
                {src: "avengers.mp4"},
                {src: "forceawakens.mp4"},
                {src: "strangerthings.mp4"},
            ]
        }
    }



}


