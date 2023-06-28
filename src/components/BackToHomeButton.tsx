import { Link } from "react-router-dom"

const BackToHomeButton = () => {
  return (
    <>
        <Link to={"/dashboard"}
            className='flex items-center justify-center w-36 p-2 border rounded-full border-slate-400 hover:bg-slate-100 duration-300'
          >
            {`< Volver a inicio`}
        </Link>
    </>
  )
}

export default BackToHomeButton