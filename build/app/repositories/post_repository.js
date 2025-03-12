import Post from '#models/post';
export class PostRepository {
    async findAll() {
        return Post.query().orderBy('id', 'asc');
    }
}
//# sourceMappingURL=post_repository.js.map