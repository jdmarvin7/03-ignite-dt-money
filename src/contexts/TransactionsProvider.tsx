import { ReactNode, useEffect, useState, useCallback } from 'react'
import { api } from '../lib/axios'
import { Transaction, TransactionsContext } from './TransactionsContext'

interface TransactionsProviderType {
  children: ReactNode
}

export interface CreateTransacitonInputs {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}
export function TransactionsProvider({ children }: TransactionsProviderType) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    // const url = new URL(`transactions`);

    // if(query) {
    //   url.searchParams.append('q', query);
    // }

    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data);
    const response = await api.get('transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc',
      },
    })

    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(
    async (data: CreateTransacitonInputs) => {
      const response = await api.post('transactions', {
        ...data,
        createdAt: new Date().toISOString(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
