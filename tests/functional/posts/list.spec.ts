import { test } from '@japa/runner'

test.group('Posts list', () => {
  test('get a list of posts', async ({ client }) => {
    const response = await client.get('/users')

    response.assertStatus(200)
    response.assertBody({
      data: [
        {
          id: 1,
          email: 'foo@bar.com',
        },
      ],
    })
  })
})
