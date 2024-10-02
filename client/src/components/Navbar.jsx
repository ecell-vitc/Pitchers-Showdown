import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"


export default function Nav() {
    const [logged, setLogged] = useState(false)
    const loc = useLocation()

    useEffect(() => {
        setLogged(localStorage.getItem('token') ? true : false)
    }, [loc])

    return (
        <nav className='bg-indigo-900 py-4 px-5 md:px-12 lg:px-24 flex justify-between content-center'>
            <Link to=""><span className="mx-2 py-2 text-slate-300 hover:text-white">Home</span></Link>
            <Link to="/business/all"><span className="mx-2 py-2 text-slate-300 hover:text-white">Businesses</span></Link>
            {logged ?
                <Link to="/profile"><span className="mx-2 py-2 text-slate-300 hover:text-white">Profile</span></Link> :
                <Link to="/login"><span className="mx-2 py-2 text-slate-300 hover:text-white">Login</span></Link>
            }
        </nav>
    )
}