export default class Math {
  add(a: number, b: number): number {
    return a + b;
  }

  sum(...args: Array<number>): number {
    return args.reduce((val: number, cVal: number) => val + cVal, 0);
  }
}
