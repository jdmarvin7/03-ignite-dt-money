import { createContext } from 'use-context-selector'
import { CreateTransacitonInputs } from './TransactionsProvider'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransacitonInputs) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionContextType)
