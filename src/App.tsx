import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsProvider'
import { Transactions } from './pages/Transactions'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <GlobalStyles />
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}

export default App
