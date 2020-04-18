export default {
    name: 'medianav',

    props: ['currentuser'],
    
    template: `
    <ul class="media-nav">
        <h3 class="hidden">Bottom Navigation</h3>
        <li @click="navToFilm">
            <img src="images/film.svg" alt="film icon">
            <p>Film</p>
        </li>
        <li @click="navToTv">
            <img src="images/tv.svg" alt="tv icon">
            <p>Tv</p>
        </li>
        <li @click="navToMusic">
            <img src="images/music.svg" alt="music icon">
            <p>Music</p>
        </li>
    </ul>
    `,

    methods: {
        navToFilm() {
            this.$router.push({ name: 'dashboardfilm', params: { currentuser: this.currentuser }});
        },

        navToTv() {
            this.$router.push({ name: 'dashboardtv', params: { currentuser: this.currentuser }});
        },

        navToMusic() {
            this.$router.push({ name: 'dashboardmusic', params: { currentuser: this.currentuser }});
        },
    }

    
}