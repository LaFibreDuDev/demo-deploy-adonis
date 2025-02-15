import type { HttpContext } from '@adonisjs/core/http'

import { inject } from '@adonisjs/core'
import { PostRepository } from '../repositories/post_repository.js'
import PostPresenter from '../presenters/post_presenter.js'

@inject()
export default class JsonPostsController {
  constructor(private postRepository: PostRepository) {}

  async index() {
    const posts = await this.postRepository.findAll()
    return posts.map((post) => {
      return new PostPresenter(post).toJSON()
    })
  }
}
