import { CalculatorService } from '#services/calculator_service'
import { GeneratorService, IgeneratorService } from '#services/generator_service'
import { test } from '@japa/runner'

class MockGeneratorService implements IgeneratorService {
  generateRandom() {
    return 0.5
  }
}

test.group('Calculator add', () => {
  test('example test', async ({ assert }) => {
    assert.equal(1, 1)
  }),
    test('add method should add 4 and 3 to be 7', async ({ assert }) => {
      const calculatorService = new CalculatorService(new GeneratorService())
      const result = calculatorService.add(4, 3)
      assert.equal(7, result)
    }),
    test('addWithRandom method should add 4 and random number to be ...?', async ({ assert }) => {
      const calculatorService = new CalculatorService(new MockGeneratorService())
      const result = calculatorService.addWithRandom(4)
      assert.equal(4.5, result)
    })
})
