export default {
    name: 'dashboardfilm',
    
    props: {
        poster: String,
        title: String
    },

    template: `
        <section class="film-comp-wrapper">
            <h1 class="hidden">Film Dashboard</h1>

            <section class="keep-watching-wrapper">
                <div class="keep-watching-top">
                    <h2>Keep  Watching</h2>
                    <a href="#">See All</a>
                </div>
                <div class="films-wrapper">
                    <img v-for="movie in movies"
                    class="film-poster"
                    :src="'images/' + movie.poster"
                    :alt="movie.title + ' poster'">
                </div>
            </section>

            <section class="recommended-wrapper">
                <div class="recommended-top">
                    <h2>Recommended</h2>
                    <a href="#">See All</a>
                </div>
                <div class="films-wrapper">
                    <img v-for="movie in movies"
                    class="film-poster"
                    :src="'images/' + movie.poster"
                    :alt="movie.title + ' poster'">
                </div>
            </section>

            <ul class="bottom-nav">
                <h1 class="hidden">Bottom Navigation</h1>
                <li>
                    <router-link :to="{ name: 'dashboardfilm' }">
                        <!-- <i class="fas fa-film  fa-4x"></i> -->
                        <img src="images/film.svg" alt="film icon">
                        <p>Film</p>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'dashboardtv' }">
                        <!-- <i class="fas fa-tv fa-4x"></i> -->
                        <img src="images/tv.svg" alt="tv icon">
                        <p>Tv</p>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'dashboardmusic' }">
                        <!-- <i class="fas fa-music fa-4x"></i> -->
                        <img src="images/music.svg" alt="music icon">
                        <p>Music</p>
                    </router-link>
                </li>
            </ul>
        </section>
    `,

    data: function() {
        return {
            // films: [
            //     {src: "avengers.mp4"},
            //     {src: "forceawakens.mp4"},
            //     {src: "strangerthings.mp4"},
            // ]

            movies: []
        }
    },

    created: function() {
        this.fetchMovies();
    },

    methods: {
        fetchMovies() {
            console.log('fetch movies here');

            const url = './includes/index.php?movies=true';

            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.movies = data;
            })
            .catch((err) => console.log(err))
        }
    }



}


