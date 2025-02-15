import Post from '#models/post'

export default class PostPresenter {
  constructor(private post: Post) {}

  public toJSON() {
    return {
      id: this.post.id,
      title: this.post.title,
    }
  }
}
