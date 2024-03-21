export function FormatCurrency(price: number) {
  const formatValue = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  return formatValue
}
