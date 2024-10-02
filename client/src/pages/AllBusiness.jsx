import { useState, useEffect } from "react"

import { Link } from "react-router-dom"
import { makeRequest } from "../utils"

export default function BusinessList() {
    const [business, setBusiness] = useState([])

    useEffect(() => {
        makeRequest('GET', 'business/', {}).then(res => { setBusiness(res) })
            .catch((err) => console.log('Came here'))
    }, [])

    return (
        <>
            <section className="py-5 px-3 md:px-12 lg:px-24">
                {business.map((business, idx) => {
                    <Link key={idx} to={'/business/' + business.id}>
                        <div className="shadow-md cursor-pointer p-3 my-5">
                            <p className="text-xl text-center">{business.team_name}</p>
                        </div>
                    </Link>       
                })}
            </section>
        </>
    )
}