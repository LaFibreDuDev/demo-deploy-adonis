import { CalculatorService } from '#services/calculator_service'
import { test } from '@japa/runner'

test.group('Calculator add', () => {
  test('example test', async ({ assert }) => {
    assert.equal(1, 1)
  }),
    test('calculator should add 2 and 3 to be 5', async ({ assert }) => {
      const calculatorService = new CalculatorService()
      const result = calculatorService.add(2, 3)
      assert.equal(5, result)
    })
})
