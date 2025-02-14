import { inject } from '@adonisjs/core'
import { GeneratorService } from './generator_service.js'

@inject()
export class CalculatorService {
  constructor(private generatorService: GeneratorService) {}

  // Your code here
  add(number1: number, number2: number) {
    return number1 + number2
  }

  addWithRandom(number1: number) {
    return this.generatorService.generateRandom() + number1
  }
}
