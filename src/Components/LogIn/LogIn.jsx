import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const LogIn = () => {

  const { signinUser, signInWithGoogle } = useContext(AuthContext)
  const nagivate = useNavigate()

  const [success, setSuccess] = useState('')
  const [logInError, setLoginError] = useState('')

  const handleLogin = e => {
    e.preventDefault()
    setSuccess("")
    setLoginError("")
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signinUser(email, password)
      .then(result => {
        console.log(result.user);
        setSuccess('User Created Successfully')
        e.target.reset()
        nagivate('/')
      })
      .catch(error => {
        console.log(error.message);
        setLoginError(error.message)
      })
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user)
        setSuccess('User Created Successfully')
        nagivate('/')
      })
      .catch(error => {
        console.log(error.message);
        setLoginError(error.message)
      })
  }
  return (
    <div className="">
      <Helmet>
        <title>Auth Recap | Login</title>
      </Helmet>
      <div className="hero  min-h-[90vh] max-w-screen-2xl mx-auto">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body text-black">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <Link to={"/"} className="label-text-alt link link-hover">Forgot password?</Link>
                  <Link to={"/register"} className="label-text-alt link link-hover">Create a new account?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              {logInError && <p className="text-xs text-red-500">{logInError}</p>}
              {success && <p className="text-xs text-emerald-500">{success}</p>}
            </form>
            <div className="form-control mx-8 mb-5 -mt-5">
              <button onClick={handleGoogleSignIn} className="btn btn-outline">Continue With Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn