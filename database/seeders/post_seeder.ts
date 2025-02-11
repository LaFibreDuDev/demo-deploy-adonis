import Post from '#models/post'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Post.create({
      title: 'Mon premier article',
      content: 'un contenu',
    })
    await Post.create({
      title: 'Mon deuxième article',
      content: 'un contenu',
    })
  }
}
