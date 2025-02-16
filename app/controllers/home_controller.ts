import Post from '#models/post'
import type { HttpContext } from '@adonisjs/core/http'
import { PostRepository } from '../repositories/post_repository.js'
import { inject } from '@adonisjs/core'

@inject()
export default class HomeController {
  constructor(private postRepository: PostRepository) {}

  async index({ view, request }: HttpContext) {
    const posts = await this.postRepository.findAll()
    const queryParams = request.qs()

    return view.render('pages/home', { posts, queryParams })
  }
}
