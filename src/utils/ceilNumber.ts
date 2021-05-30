const ceilNumber = (input: number, precision: number): number => {
  return Math.ceil(input / precision) * precision
}

export default ceilNumber
