export default {
    name: 'mediainfo',

    props: ['currentmedia'],

    template: `
    <section class="media-details-wrapper">
        <h3 class="sr-only">Media Details</h3>

        <video class="video" controls>
            <source :src="'video/' + currentmedia.trailer">
        </video>

        <div class="media-details">

            <p class="media-year">{{ currentmedia.year }}</p>
            
            <h4 class="media-title">{{ currentmedia.title }}</h4>
            
            <p class="media-storyline">{{ currentmedia.storyline }}</p>
            
            <div class="genre-rating-wrapper">
                <div class="genre-card"><p>Genre</p></div>
                <div class="rating-card"><p>Rating</p></div>
            </diV>
            
            <form class="rate-form">
                <label for="rating">Rate</label>
                <div>
                    <select id="rating">
                        <option value="">--Select a rating--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input class="rate-submit" type="submit" value="Submit">
                </div>
            </form>

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
                
            </ul>

        </div>

    </section>
    `
}