import { Helmet } from "react-helmet-async"


const Home = () => {
  return (
    <div className="flex justify-center items-center max-w-screen-2xl md:mx-auto mx-10 min-h-[80vh]">
      <Helmet>
        <title>Auth Recap | Home</title>
      </Helmet>
      <h1 className="text-7xl font-bold">Welcome To Our Website</h1>
    </div>
  )
}

export default Home