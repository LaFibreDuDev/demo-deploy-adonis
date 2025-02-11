import Post from '#models/post'
import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async index({ view }: HttpContext) {
    const posts = await Post.all()

    return view.render('pages/home', { posts })
  }
}
