import { useContext } from "react"
import { AuthContext } from "../../Providers/AuthProvider"
import { Helmet } from "react-helmet-async"

const Profile = () => {
    const { user, emailVerification } = useContext(AuthContext)
    const handleEmailVerifiation = () => {
        emailVerification()
            .then(res => {
                console.log(res.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    console.log(user);
    const { displayName, email, metadata, emailVerified, photoURL } = user;
    const { creationTime, lastSignInTime, } = metadata;
    return (
        <div className="my-10">
            <Helmet>
                <title>Auth Recap | Profile</title>
            </Helmet>
            <div className="max-w-screen-2xl lg:mx-auto mx-10 flex justify-center items-center min-h-[80vh]">
                <div>
                    <div className="flex gap-5 items-center">
                        <img className="w-36 rounded-full" src={`${photoURL}`} alt="" />
                        <h1 className="text-4xl font-semibold">{displayName}</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <div >
                            <div className="flex items-center gap-2 mt-4">
                                <h1>{email}</h1>
                                {emailVerified ? <h1 className="text-emerald-600 font-bold">Verified</h1> : <h1 className="text-red-600 font-bold flex justify-center items-center gap-1">Not Verified <button onClick={handleEmailVerifiation} className="border-2 px-2 py-2 rounded-lg hover:bg-emerald-500 active:scale-95 transition-all text-sm hover:text-white">Verify Now</button></h1>}
                            </div>
                            <h1><span className="font-semibold">Create Time: </span>{creationTime}</h1>
                            <h1><span className="font-semibold">Last SignIn Time: </span>{lastSignInTime}</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile