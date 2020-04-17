import MediaComponent from "./MediaComponent.js";

export default {
    name: 'filterresult',

    props: ['currentfilterresult', 'genre'],

    template: `
    <section class="filter-results-wrapper">
        <h2 class="sr-only">Filter Results</h2>
        
        <h3 class="filter-heading">
            <div @click="navToSearch" class="circle"><div>x</div></div>
            <span>{{ genre }}</span>
        </h3>

        <h4 class="filter-sub-heading">{{ currentfilterresult.length }}<span>results</span></h4>
        
        <div v-if="results" class="filter-poster-wrapper">

            <!-- <li v-for="(item, index) in currentfilterresult"
            class="filter-poster" @click="chooseMedia"
            :currentmedia="item" :key="index">
                <img :src="'images/' + item.poster" alt="item.title">
            </li> -->

            <media v-for="(item, index) in currentfilterresult"
            :livemedia="item" :key="index"/>

        </div>
        
        <div v-else>
            <p class="filter-no-results">Sorry! No items to display!</p>
        </div>
    </section>
    `,

    data() {
        return {
            results: false,

            currentmedia: []
        }
    },

    created() {
        if(this.currentfilterresult.length > 0) {
            this.results = true;
        }
    },

    methods: {
        navToSearch() {
            this.$router.push({ name: 'search' });
        },

        chooseMedia() {
            //this.$router.push({ name: 'mediainfo', params: { currentmedia: this.item }});
            console.log(this.currentfilterresult.currentmedia);
        }
    },

    components: {
        media: MediaComponent
    }
}