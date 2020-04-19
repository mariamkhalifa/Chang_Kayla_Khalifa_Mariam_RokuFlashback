import MediaComponent from './MediaComponent.js'
import MediaNav from './MediaNav.js'

export default {
    name: 'dashboardfilm',

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
                    :livemedia="movie" :key="index" :currentuser="currentuser"/>
                </div>
            </section>

            <section class="recommended-wrapper">
                <div class="recommended-top">
                    <h3>Recommended</h3>
                    <!-- <a href="#">See All</a> -->
                </div>
                <div class="films-wrapper">
                    <film v-for="(movie, index) in movies" 
                    :livemedia="movie" :key="index" :currentuser="currentuser"/>
                </div>
            </section>

            <medianav/>
        </section>
    `,

    data: function() {
        return {
            movies: [],
            currentuser: []
        }
    },

    created: function() {
        if(localStorage.getItem('cachedUser')) {
            let user = JSON.parse(localStorage.getItem('cachedUser'));
            this.currentuser = user;
        }
        this.fetchMovies();
    },

    methods: {
        fetchMovies() {
            let permissions = this.currentuser.permissions,
                url = `./includes/index.php?permissions=${permissions}&media=film`;

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


