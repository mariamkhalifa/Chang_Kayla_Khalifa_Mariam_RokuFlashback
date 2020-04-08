import MediaNav from './MediaNav.js'

export default {
    name: 'dahsboardmusic',
    
    props: {
        src: String
    },

    template: `
        <section class="">
            <h1>TV Comp</h1>
            

            <medianav/>
        </section>
    `,

    components: {
        medianav: MediaNav
    }

}