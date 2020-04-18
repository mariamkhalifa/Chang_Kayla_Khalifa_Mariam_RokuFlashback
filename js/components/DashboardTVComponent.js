import MediaComponent from './MediaComponent.js'
import MediaNav from './MediaNav.js'

export default {
    name: 'dashboardtv',

    props: ['currentuser'],

    template: `
        <section class="film-comp-wrapper">
            <h2 class="sr-only">TV Dashboard</h2>

            <section class="keep-watching-wrapper">
                <div class="keep-watching-top">
                    <h3>Keep  Watching</h3>
                </div>
                <div class="films-wrapper">
                    <tv v-for="(show, index) in tv" 
                    :livemedia="show" :key="index" :currentuser="currentuser"/>
                </div>
            </section>

            <section class="recommended-wrapper">
                <div class="recommended-top">
                    <h3>Recommended</h3>
                </div>
                <div class="films-wrapper">
                    <tv v-for="(show, index) in tv" 
                    :livemedia="show" :key="index" :currentuser="currentuser"/>
                </div>
            </section>

            <medianav/>
        </section>
    `,

    data: function() {
        return {
            tv: []
        }
    },

    created: function() {
        this.fetchTv();
    },

    methods: {
        fetchTv() {
            let permissions = this.currentuser.permissions,
                url = `./includes/index.php?permissions=${permissions}&media=tv`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                this.tv = data;
            })
            .catch((err) => console.log(err))
        }
    },

    components: {
        tv: MediaComponent,
        medianav: MediaNav
    }

}
