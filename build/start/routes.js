import router from '@adonisjs/core/services/router';
const HomeController = () => import('#controllers/home_controller');
const JsonPostsController = () => import('#controllers/json_posts_controller');
router.get('/', [HomeController, 'index']);
router.get('/api/posts', [JsonPostsController, 'index']);
//# sourceMappingURL=routes.js.map