export default {
    props: {
        poster: String,
        title: String
    },

    template: `
        <section class="landing-wrapper">
            <h1 class="hidden">Landing Page</h1>
            <div class="films-wrapper">
                <img v-for="movie in movies"
                class="film-poster"
                :src="'images/' + movie.poster"
                :alt="movie.title + ' poster'">
            </div>
            <div class="buttons-wrapper">
                <router-link to="/signup" class="link button fill">Sign Up</router-link>
                <p>or</p>
                <router-link to="/login" class="link button border">Sign In</router-link>
            </div>    
        </section>
    `,

    data: function() {
        return {
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