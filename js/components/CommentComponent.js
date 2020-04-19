export default {
    props: ['comment'],

    template: `
        <li class="comment-card">
            <img class="comment-avatar avatar" :src="'images/' + comment.avatar">
            <div class="comment-middle">
                <p class="comment-name">{{ comment.username }}</p>
                <p class="comment-text">{{ comment.comment }}</p>
                <div class="like-icons">
                    <div @click="incrementLikes"><i class="fas fa-thumbs-up"></i></div>
                    <p class="likes-count">{{ count.likes }}</p>
                    <div @click="incrementDislikes"><i class="fas fa-thumbs-down"></i></div>
                    <p class="likes-count">{{ count.dislikes }}</p>
                </div>
            </div>
            <div class="comment-time">
                <p>{{ comment.time }}</p>
            </div>
        </li>
    `,

    data() {
        return {
            count: {
                likes: 0,
                dislikes: 0
            }
        }
    },

    methods: {
        incrementLikes() {
            this.count.likes++;
        },

        incrementDislikes() {
            this.count.dislikes++;
        }
    }
}