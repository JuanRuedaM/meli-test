import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import { Context } from '../context/Context.jsx'
import { useContext } from 'react'

import { useNavigate } from 'react-router-dom';


export default function Navegation () {

  const { setResults, setBreadCrumb } = useContext(Context)

  const [query, setQuery] = useState('')
  const [input, setInput] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
    if (query.length === 0) return
    (async () => {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`)
      const data = await response.json()
      setResults(data.results)

      setBreadCrumb(data.results[0].tags)

      navigate('/results');
    })()
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(input)
  }

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleBreadClear = () => {
    setBreadCrumb([])
  }

  return (
    <nav className="w-full bg-yellow-300 max-h-[10vh] flex justify-center items-center">
      <div className=" flex justify-center items-center lg:gap-x-6 p-2 lg:w-[70vw]">
        <Link to={'/'}><img src="/images/logo.png" alt="" srcSet="" width={'100px'} onClick={handleBreadClear} /></Link>
        <form action="" className="flex flex-1 max-h-11 ml-5" onSubmit={handleSubmit}>
          <input type="text" name="" id="" placeholder="Nunca dejes de buscar" className="w-full p-2 mx-1" onChange={handleInput} />
          <button className="bg-gray-200 w-11 h-11 p-2">
            <img src="/images/search.png" alt="" srcSet="" />
          </button>
        </form>
      </div>
    </nav>
  )
}
