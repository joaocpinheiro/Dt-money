import React from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export const useSummary = () => {
  const { transactions } = React.useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, currentValue) => {
      if (currentValue.type === 'income') {
        acc.income += currentValue.price
        acc.total += currentValue.price
      } else {
        acc.outcome += currentValue.price
        acc.total -= currentValue.price
      }
      return acc
    },
    { income: 0, outcome: 0, total: 0 },
  )

  return summary
}
