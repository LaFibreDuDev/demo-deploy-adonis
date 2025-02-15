import Post from '#models/post'

export interface IpostRepository {
  findAll: () => Promise<Post[]>
}

export class PostRepository implements IpostRepository {
  async findAll() {
    return Post.query().orderBy('id', 'asc')
  }
}
