const getPriceWithCurrency = (price: number, currency: string): string => {
  return `${price} ${currency}`
}

export default getPriceWithCurrency
