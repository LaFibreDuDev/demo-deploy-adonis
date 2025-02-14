import Post from '#models/post'

export class PostRepository {
  async findAll() {
    return Post.all()
  }
}
