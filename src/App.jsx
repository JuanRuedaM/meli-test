import { Routes, Route } from 'react-router-dom'
import { ContextProvider } from './context/Context.jsx'

import ResultsView from './views/ResultsView.jsx'
import DetailView from './views/DetailView.jsx'
import SearchView from './views/SearchView.jsx'

function App () {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/' element={<SearchView />} />
        <Route path='/results' element={<ResultsView />} />
        <Route path='/detail/:id' element={<DetailView />} />
      </Routes>
    </ContextProvider>
  )
}

export default App
