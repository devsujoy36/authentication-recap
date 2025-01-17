import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom"

const Hero = () => {
  const navigate = useNavigate()
  const getStartedHandler = () => {
    navigate('/login')
  }
  return (
    <div>
      <Helmet>
        <title>Auth Recap | Hero</title>
      </Helmet>
      <div className="hero min-h-[90vh] px-10" >
        <div className="hero-overlay bg-opacity-5"></div>
        <div className="hero-content text-center">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button onClick={getStartedHandler} className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero