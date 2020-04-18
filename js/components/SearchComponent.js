import GenreComponent from "./GenreComponent.js"

export default {
    name: 'search',

    template: `
    <section class="genres-wrapper">
        <h2 class="sr-only">Search</h2>
        <h3 class="genre-title">Movie Genres</h3>
        <ul class="genre-grid">
            <genre v-for="(genre, index) in genrelist" :icon="genre.genre_icon"
            :name="genre.genre_name" :table="media" :genre="video" :key="index"/>
        </ul>
        <h3 class="genre-title">Music Genres</h3>
        <ul class="genre-grid">
            <genre v-for="(genre, index) in musicgenrelist" :icon="genre.genre_icon"
            :name="genre.genre_name" :genre="audio" :table="music" :key="index"/>
        </ul>
    </section>
    `,

    data() {
        return {
            genrelist: [],
            musicgenrelist: [],
            media: 'media',
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