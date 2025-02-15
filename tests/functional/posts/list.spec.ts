import { test } from '@japa/runner'

test.group('Posts list', () => {
  test('get a list of posts', async ({ client }) => {
    const response = await client.get('/api/posts')

    console.log(response.body)

    response.assertStatus(200)
    response.assertBody([
      {
        id: 1,
        title: 'Mon premier article',
      },
      {
        id: 2,
        title: 'Mon deuxième article',
      },
    ])
  })
})
