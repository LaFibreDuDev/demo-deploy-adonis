import { CalculatorService } from '#services/calculator_service'
import { test } from '@japa/runner'

test.group('Calculator add', () => {
  test('example test', async ({ assert }) => {
    assert.equal(1, 1)
  }),
    test('calculator should add 4 and 3 to be 7', async ({ assert }) => {
      const calculatorService = new CalculatorService()
      const result = calculatorService.add(4, 3)
      assert.equal(7, result)
    })
})
