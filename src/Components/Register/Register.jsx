import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(AuthContext)

const [success, setSuccess] = useState('')
  const [registerError, setRegisterError] = useState('')

  const handleRegister = e => {
    e.preventDefault()
    setSuccess("")
    setRegisterError("")
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, phone, email, password);

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        setSuccess('User Created Successfully')
        e.target.reset()
      })
      .catch(error => {
        console.log(error.message);
        setRegisterError(error.message)
      })
  }

  
  return (
    <div className="">
      <Helmet>
        <title>Auth Recap | Register</title>
      </Helmet>
      <div className="hero  min-h-[90vh] max-w-screen-2xl mx-auto">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body text-black">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input type="number" name="phone" placeholder="phone" className="input input-bordered" required />
              </div>

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
              </div>

              <label className="label">
                <Link to={"/login"} className="label-text-alt link link-hover">Already Have an account?</Link>
              </label>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              {registerError && <p className="text-xs text-red-500">{registerError}</p>}
              {success && <p className="text-xs text-emerald-500">{success}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register