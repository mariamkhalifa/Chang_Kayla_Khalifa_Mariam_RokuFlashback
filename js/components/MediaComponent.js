export default {
    props: ['livemedia'],

    template: `
        <img @click="chooseMedia" class="film-poster"
        :src="'images/' + livemedia.poster"
        :alt="livemedia.title + ' poster'">
    `,

    methods: {
        chooseMedia() {
            this.$router.push({ name: 'mediainfo', params: { currentmedia: this.livemedia }});
        }
    }
}