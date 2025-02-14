export interface IgeneratorService {
  generateRandom: () => number
}

export class GeneratorService implements IgeneratorService {
  generateRandom() {
    return Math.random()
  }
}
