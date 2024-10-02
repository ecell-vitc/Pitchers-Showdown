import { useState, useEffect } from "react"

import { Link } from "react-router-dom"
import { makeRequest } from "../utils"

export default function BusinessList() {
    const [business, setBusiness] = useState([])

    useEffect(() => {
        makeRequest(
            'GET', 'business/', {},
            (data) => { setBusiness(data.teams) },
            (resCode) => alert('An unexpected error occurred')
        ).catch(() => {})
    }, [])

    return (
        <>
            <section className="py-5 px-3 md:px-12 lg:px-24">
                {business.map((business, idx) => 
                    <Link key={idx} to={'/business/' + business.id}>
                        <div className="md:w-2/3 lg:w-1/2 mx-auto border-2 border-slate-700 rounded-md shadow-md cursor-pointer p-3 my-5 transition hover:scale-110">
                            <p className="text-xl text-center">{business.team_name}</p>
                        </div>    
                    </Link>
                )}
            </section>
        </>
    )
}