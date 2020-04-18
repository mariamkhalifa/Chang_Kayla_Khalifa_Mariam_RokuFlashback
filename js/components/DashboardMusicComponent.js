import MediaComponent from './MediaComponent.js'
import MediaNav from './MediaNav.js'

export default {
    name: 'dashboardmusic',

    props: ['currentuser'],

    template: `
        <section class="film-comp-wrapper">
            <h2 class="sr-only">Music Dashboard</h2>

            <section class="keep-watching-wrapper">
                <div class="keep-watching-top">
                    <h3>Keep  Listening</h3>
                </div>
                <div class="films-wrapper">
                    <music v-for="(track, index) in music" 
                    :livemedia="track" :key="index" :currentuser="currentuser"/>
                </div>
            </section>

            <section class="recommended-wrapper">
                <div class="recommended-top">
                    <h3>Recommended</h3>
                </div>
                <div class="films-wrapper">
                    <music v-for="(track, index) in music" 
                    :livemedia="track" :key="index" :currentuser="currentuser"/>
                </div>
            </section>

            <medianav/>
        </section>
    `,

    data: function() {
        return {
            music: []
        }
    },

    created: function() {
        this.fetchMusic();
    },

    methods: {
        fetchMusic() {
            //console.log('fetch movies here');

            const url = './includes/index.php?music=true';

            fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                this.music = data;
            })
            .catch((err) => console.log(err))
        }
    },

    components: {
        music: MediaComponent,
        medianav: MediaNav
    }

}
