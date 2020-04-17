import GenreComponent from "./GenreComponent.js"

export default {
    name: 'search',

    template: `
    <section>
        <h2 class="sr-only">Search</h2>

        <ul>
            <h3>Movie Genres</h3>
            <genre v-for="(genre, index) in genrelist" 
            :name="genre.genre_name" :table="movies" :genre="video" :key="index"/>
        </ul>

        <ul>
            <h3>Music Genres</h3>
            <genre v-for="(genre, index) in musicgenrelist" 
            :name="genre.genre_name" :genre="audio" :table="music" :key="index"/>
        </ul>
    </section>
    `,

    data() {
        return {
            genrelist: [],
            musicgenrelist: [],
            movies: 'movies',
            music: 'music',
            video: 'video',
            audio: 'audio',
        }
    },

    created() {
        this.fetchMovieGenre();
        this.fetchMusicGenre();
    },

    methods: {
        fetchMovieGenre() {
            const url = './includes/index.php?genre=true';

            fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                this.genrelist = data;
            })
            .catch((err) => console.log(err))
        },

        fetchMusicGenre() {
            const url = './includes/index.php?music_genre=true';

            fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                this.musicgenrelist = data;
            })
            .catch((err) => console.log(err))
        }
    },

    components: {
        genre: GenreComponent
    }
}