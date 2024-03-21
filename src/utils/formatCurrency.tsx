export function FormatCurrency(price: number, digitals = false) {
  const formatValue = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  if (digitals) {
    const valueDigitals = price.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })

    return valueDigitals
  }

  return formatValue
}
