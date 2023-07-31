export const getFormattedRevenue = (revenue: string) => {
  return `$ ${Intl.NumberFormat('en-US').format(Number(revenue))}`;
}
