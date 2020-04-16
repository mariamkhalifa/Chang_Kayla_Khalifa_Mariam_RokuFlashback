import MediaComponent from './MediaComponent.js'
import MediaNav from './MediaNav.js'

export default {
    name: 'dashboardfilm',
    
    // props: {
    //     poster: String,
    //     title: String
    // },

    template: `
        <section class="film-comp-wrapper">
            <h2 class="sr-only">Film Dashboard</h2>

            <section class="keep-watching-wrapper">
                <div class="keep-watching-top">
                    <h3>Keep  Watching</h3>
                    <!-- <a href="#">See All</a> -->
                </div>
                <div class="films-wrapper">
                    <film v-for="(movie, index) in movies" 
                    :livemedia="movie" :key="index"/>
                </div>
            </section>

            <section class="recommended-wrapper">
                <div class="recommended-top">
                    <h3>Recommended</h3>
                    <!-- <a href="#">See All</a> -->
                </div>
                <div class="films-wrapper">
                    <film v-for="(movie, index) in movies" 
                    :livemedia="movie" :key="index"/>
                </div>
            </section>

            <medianav/>
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
            //console.log('fetch movies here');

            const url = './includes/index.php?movies=true';

            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.movies = data;
            })
            .catch((err) => console.log(err))
        }
    },

    components: {
        film: MediaComponent,
        medianav: MediaNav
    }



}


