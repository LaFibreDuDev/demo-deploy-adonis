import type { HttpContext } from '@adonisjs/core/http'

import { inject } from '@adonisjs/core'
import { PostRepository } from '../repositories/post_repository.js'

@inject()
export default class JsonPostsController {
  constructor(private postRepository: PostRepository) {}

  async index({ response }: HttpContext) {
    const posts = await this.postRepository.findAll()
    return response.json(posts)
  }
}
