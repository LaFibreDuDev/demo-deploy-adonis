import { test } from '@japa/runner';
import Post from '#models/post';
import { DateTime } from 'luxon';
import JsonPostsController from '#controllers/json_posts_controller';
class MockPostRepository {
    async findAll() {
        const post = new Post();
        post.id = 1;
        post.title = 'mon premier post';
        post.content = 'le contenu';
        post.createdAt = DateTime.fromISO('2025-02-15T10:00:00.000Z');
        post.updatedAt = DateTime.fromISO('2025-02-15T10:00:00.000Z');
        const post2 = new Post();
        post2.id = 2;
        post2.title = 'mon premier post';
        post2.content = 'le contenu';
        post2.createdAt = DateTime.fromISO('2025-02-15T10:00:00.000Z');
        post2.updatedAt = DateTime.fromISO('2025-02-15T10:00:00.000Z');
        return [post, post2];
    }
}
test.group('test posts controller', () => {
    test('list method should return a list of posts', async ({ assert }) => {
        const mockPostRepository = new MockPostRepository();
        const jsonPostController = new JsonPostsController(mockPostRepository);
        const data = await jsonPostController.index();
        assert.equal(data.length, 2);
    });
    test('first post should have an id property', async ({ assert }) => {
        const mockPostRepository = new MockPostRepository();
        const jsonPostController = new JsonPostsController(mockPostRepository);
        const data = await jsonPostController.index();
        assert.property(data[0], 'id');
    });
    test('first post should have a title property', async ({ assert }) => {
        const mockPostRepository = new MockPostRepository();
        const jsonPostController = new JsonPostsController(mockPostRepository);
        const data = await jsonPostController.index();
        assert.property(data[0], 'title');
    });
    test('first post should not have a body property', async ({ assert }) => {
        const mockPostRepository = new MockPostRepository();
        const jsonPostController = new JsonPostsController(mockPostRepository);
        const data = await jsonPostController.index();
        assert.notProperty(data[0], 'body');
    });
});
//# sourceMappingURL=list.spec.js.map