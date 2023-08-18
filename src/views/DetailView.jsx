import Navegation from '../components/Navegation.jsx'
import BreadCrumb from '../components/BreadCrumb.jsx'
import { useParams } from 'react-router-dom';

import { useEffect } from 'react'

import { Context } from '../context/Context.jsx'
import { useContext } from 'react'

export default function DetailView () {

  const { details, setDetails } = useContext(Context)

  const { id } = useParams()

  useEffect(() => {
    if (id.length === 0) return
    (async () => {
      const response = await fetch(`https://api.mercadolibre.com/items/${id}`)
      const data = await response.json()
      setDetails(data)
    })()
  }, [])

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <Navegation />
      <BreadCrumb />
      <div className="w-full flex flex-grow  flex-col items-center bg-[#eeeeee] text-white text-xl box-border">
        <div className="w-[90vw] lg:w-[69vw] text-black bg-white">

          <div className="flex justify-between p-3 flex-col lg:flex-row">
            <div className="flex flex-col gap-3 lg:w-[70%] mb-5 order-2 lg:order-1 my-5">
              <div className="flex justify-center">
                <img src={details.thumbnail} alt="" className="h-[200px] w-[200px] lg:h-[500px] lg:w-[500px]" />
              </div>
              <h1 className=" text-3xl mt-5">Detalles del producto</h1>
              <p className="text-lg overflow-hidden text-ellipsis">{details.title} <br /><br />{details.warranty ?? 'Sin garantía'}</p>
            </div>

            <div className="lg:w-[30%] flex flex-col order-1 lg:order-2">
              <p className="text-sm">
                <span>{details.condition} -</span>
                <span> {details.sold_quantity} vendidos</span>
              </p>
              <p className="font-bold">{details.title}</p>
              <h1 className="my-5  text-3xl mb-10">${details.price}</h1>
              <button className="bg-blue-500 text-white p-1 w-full rounded-md">Comprar</button>
            </div>
          </div>

          <div>
          </div>

          <hr />
        </div>
      </div>
    </div>
  )
}
