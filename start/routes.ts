/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const HomeController = () => import('#controllers/home_controller')
const JsonPostsController = () => import('#controllers/json_posts_controller')

router.get('/', [HomeController, 'index'])
router.get('/api/posts', [JsonPostsController, 'index'])
