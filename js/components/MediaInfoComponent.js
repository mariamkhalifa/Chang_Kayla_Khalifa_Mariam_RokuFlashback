import CommnetComponent from "./CommentComponent.js";
import AddCommentComponent from "./AddCommentComponent.js";

export default {
    name: 'mediainfo',

    props: ['currentmedia', 'currentuser'],

    template: `
    <section class="media-details-wrapper">
        <h3 class="sr-only">Media Details</h3>

        <video v-if="currentmedia.video" class="video" controls>
            <source :src="'video/' + currentmedia.trailer">
        </video>

        <img v-if="currentmedia.audio" class="audio-info-poster" :src="'images/' + currentmedia.poster" :alt="currentmedia.title">

        <audio v-if="currentmedia.audio" class="audio" controls>
            <source :src="'audio/' + currentmedia.audiosrc">
        </audio>

        <div class="media-details">

            <p class="media-year">{{ currentmedia.year }}</p>
            
            <h4 class="media-title">{{ currentmedia.title }}<span v-if="currentmedia.audio"> - {{ currentmedia.artist }}</span></h4>
            
            <p v-if="currentmedia.video" class="media-storyline">{{ currentmedia.storyline }}</p>
            
            <div v-if="currentmedia.video" class="genre-rating-wrapper">
                <div v-for="(genre, index) in mediagenre" class="genre-card"><p>{{ genre.genre_name }}</p></div>
                <div class="rating-card"><p>{{ mediaarating.name }}</p></div>
            </diV>

            <div v-if="currentmedia.audio" class="music-genre-card genre-card"><p>{{ musicgenre.genre_name }}</p></div>
            
            <div class="media-rating">
                <h4>Rating</h4>
                <p>{{ currentmedia.rating }}</p>
                <img class="star-icon" src="images/icon_star.svg" alt="star">
            </div>

            <div class="share-btns">
                <h4>Share</h4>
                <div class="btn-row">
                    <a href="http://www.facebook.com/sharer.php?u=https://simplesharebuttons.com" target="_blank">
                        <img class="facebook-share" src="images/facebook.svg" alt="facebook icon">
                    </a>
                    <a href="https://twitter.com/share?url=https://simplesharebuttons.com&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons" target="_blank">
                        <img class="twitter-share" src="images/twitter.svg" alt="twitter icon">
                    </a>
                </div>
            </div>

            <ul class="comments">
                <h4>Comments</h4>

                <addcomment :currentuser="currentuser"/>

                <comment v-for="(comment, index) in comments"
                :comment="comment" :key="index"/>
                
            </ul>

        </div>

    </section>
    `,

    components: {
        comment: CommnetComponent,
        addcomment: AddCommentComponent
    },

    data() {
        return {
            mediagenre: [],
            musicgenre: '',
            mediaarating: '',
            comments: []
        }
    },

    created() {
        this.fetchComments();
        this.fetchGenre();
        this.fetchAgeRating();
    },

    methods: {
        fetchGenre() {
            if(this.currentmedia.video) {
                let id = this.currentmedia.media_id,
                    url = `./includes/index.php?current_genre=${id}&tbl=media&genre=video`;

                fetch(url)
                .then(res => res.json())
                .then(data => {
                    //console.log(data);
                    this.mediagenre = data;
                })
                .catch((err) => console.log(err))
            } else {
                let id = this.currentmedia.music_id,
                    url = `./includes/index.php?current_genre=${id}&tbl=music&genre=audio`;

                fetch(url)
                .then(res => res.json())
                .then(data => {
                    //console.log(data);
                    this.musicgenre = data[0];
                })
                .catch((err) => console.log(err))
            }    
        },

        fetchAgeRating() {
            let id = this.currentmedia.media_id,
                url = `./includes/index.php?current_arating=${id}`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                this.mediaarating = data[0];
            })
            .catch((err) => console.log(err)) 
        },

        fetchComments() {
            let url = './includes/index.php?comments=true';

            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.comments = data;
            })
            .catch((err) => console.log(err))
        }
    }
}