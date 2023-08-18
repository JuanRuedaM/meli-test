import Card from '../components/Card.jsx'
import Navegation from '../components/Navegation.jsx'
import BreadCrumb from '../components/BreadCrumb.jsx'

import { Context } from '../context/Context.jsx'
import { useContext } from 'react'

export default function HomeView () {

  const { results } = useContext(Context)

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <Navegation />
      <BreadCrumb />
      <div className="w-full flex flex-col flex-grow items-center bg-[#eeeeee] text-white text-xl box-border ">
        {
          results.map((result) => {
            return (
              <Card key={result.id} id={result.id} thumbnail={result.thumbnail} price={result.price} available_quantity={result.available_quantity} title={result.title} condition={result.condition} address={result.address.city_name} />
            )
          })
        }
      </div>
    </div>

  )
}
