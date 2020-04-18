export default {
    props: ['currentuser'],

    template: `
        <form class="comment-card">
        <img class="comment-avatar avatar" :src="'images/' + currentuser.avatar">
            <div class="comment-middle">
                <p class="comment-name">{{ currentuser.username }}</p>

                <p class="comment-form-msg">{{ formmsg }}</p>

                <label for="comment" class="add-comment-label">Add a comment...</label>
                <div class="comment-input-submit">
                    <input v-model="input.comment" id="comment" name="comment" value="">
                    <input @click.prevent="postComment" class="add-comment-submit" type="submit" value=">">
                </div>
            </div>
        </form>
    `,

    data() {
        return {
            input: {
                comment: ''
            },
            formmsg: ''
        }
    },

    methods: {
        postComment() {
            if(this.input.comment !== '') {
                let formData = new FormData();

                formData.append('comment', this.input.comment);

                let id = this.currentuser.id,
                    url = `./includes/index.php?add_comment=true&user_id=${id}`;

            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data == false) {
                    this.formmsg = 'Something went wrong!'
                } else {
                    this.input.comment = '';
                }
            })
            .catch((err) => console.log(err))
            } else {
                this.formmsg = 'Comment cannot be empty!'
            }
        } 
    }
}