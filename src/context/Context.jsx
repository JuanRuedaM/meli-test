import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({ children }) => {

  const [results, setResults] = useState([])
  const [details, setDetails] = useState({})
  const [breadCrumb, setBreadCrumb] = useState([])

  return <Context.Provider
    value={{
      results,
      setResults,
      details,
      setDetails,
      breadCrumb,
      setBreadCrumb
    }}
  >
    {children}
  </Context.Provider>
}

ContextProvider.propTypes = {
  children: PropTypes.any
}