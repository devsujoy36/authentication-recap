import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom"


const ErrorPage = () => {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <Helmet>
        <title>Auth Recap | Error</title>
      </Helmet>
      <button onClick={handleGoBack} className="bg-emerald-500 hover:bg-emerald-400 active:scale-95 transition-all px-4 py-2 rounded-lg text-xl font-medium">Go Back</button>
    </div>
  )
}

export default ErrorPage