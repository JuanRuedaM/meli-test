import { Link } from 'react-router-dom'

export default function Card ({ id, thumbnail, price, available_quantity = 0, title, condition, address }) {
  return (
    <Link to={`/detail/${id}`} className=" mb-2 w-[90vw] lg:w-[69vw] text-black bg-white">
      <div className="flex justify-between lg:h-60 p-3 flex-col lg:flex-row mx-3">
        <div className="flex gap-3 w-[90%] flex-col lg:flex-row">
          <img src={thumbnail} alt="" />
          <div className="mt-2">
            <div className="flex gap-2 my-2">
              <h1>${price}</h1>
              <p>{available_quantity !== 0 ? '✔' : '❌'} </p>
            </div>
            <h2 className='text-2xl'>{title}</h2>
            <p className='text-sm'>{condition === 'new' ? 'Nuevo' : 'Usado'}</p>
          </div>
        </div>

        <p className="text-end lg:pr-5 lg:ml-5 lg:w-[10%] text-sm my-2">{address} </p>
      </div>
      <hr />
    </Link>
  )
}
