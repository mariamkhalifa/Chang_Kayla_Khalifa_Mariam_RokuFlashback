import MediaNav from './MediaNav.js'

export default {
    name: 'dashboardmusic',
    
    props: {
        src: String
    },

    template: `
        <section class="">
            <h1>Music Comp</h1>
            
            
            <medianav/>
        </section>
    `,

    components: {
        medianav: MediaNav
    }

}