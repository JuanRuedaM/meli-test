import { Context } from '../context/Context.jsx'
import { useContext } from 'react'

export default function BreadCrumb () {

  const { breadCrumb } = useContext(Context)

  return (
    <div className=" text-black w-full flex justify-center bg-[#eeeeee] text-sm">
      <div className='lg:w-[69vw] my-1 mx-6'>
        {
          breadCrumb.map((bread, index) => {
            return <span key={index} className="p-0 text-sm">{index === 0 ? '' : '>'} {bread} </span>
          })
        }
      </div>
    </div>
  )
}
