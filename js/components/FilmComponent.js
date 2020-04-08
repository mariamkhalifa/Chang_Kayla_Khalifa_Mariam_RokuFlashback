export default {
    name: 'film',

    props: ['livefilm'],

    template: `
        <img @click="chooseFilm" class="film-poster"
        :src="'images/' + livefilm.poster"
        :alt="livefilm.title + ' poster'">
    `,

    methods: {
        chooseFilm() {
            this.$router.push({ name: 'mediainfo', params: { currentmedia: this.livefilm }});
        }
    }
}