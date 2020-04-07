export default {
    name: 'user',

    props: ['liveuser'],

    template: `
    <li>
        <div @click="navToUserHome"><img :src="'images/' + liveuser.avatar" alt="user avatar"></div>
        <div @click="navToUserHome" class="user-name"><h4>{{liveuser.username}}</h4></div>
        <div @click="navToUserHome" class="user-arrow"><i class="fas fa-arrow-right"></i></div>
    </li>
    ` ,

    created: function() {
        if (this.liveuser.avatar === null || this.liveuser.avatar === "null") {
            this.liveuser.avatar = "avatar1.svg";
        }
    },

    methods: {
        navToUserHome() {
            localStorage.setItem('cachedUser', JSON.stringify(this.liveuser));
            this.$router.push({ name: 'userhome', params: { currentuser: this.liveuser }});
        }
    }
}