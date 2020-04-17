export default {
    props: ['name', 'table', 'genre'],

    template: `
        <li>
            <a :href="name" @click.prevent="filter" ref="filter">{{ name }}</a>
        </li>
    `,

    data() {
        return {
            filterresultlist: []
        }
    },

    methods: {
        filter() {
            let filter = this.$refs.filter.getAttribute('href'),
                tbl = this.table,
                genre = this.genre,
                url = `./includes/index.php?media=${tbl}&genre=${genre}&filter=${filter}`;
            
            fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                this.filterresultlist = data;
                this.$router.push({ name: 'filterresult' , params: {currentfilterresult: this.filterresultlist, genre: this.name}});
            })
            .catch((err) => console.log(err))
        }
    }
}