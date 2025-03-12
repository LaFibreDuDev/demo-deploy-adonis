export default class PostPresenter {
    post;
    constructor(post) {
        this.post = post;
    }
    toJSON() {
        return {
            id: this.post.id,
            title: this.post.title,
        };
    }
}
//# sourceMappingURL=post_presenter.js.map