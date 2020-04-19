export default {
    props: ['avatar', 'username'],

    template: `
        <li>
            <img class="edit-user-avatar avatar" :src="'images/' + avatar" alt="user avatar">
            <p class="edit-username">{{ username }}</p>
            <div class="operations">
                <p class="edit-btn">Edit</p>
                <p class="delete-btn">Delete</p>
            </div>
        </li>
    `,
}