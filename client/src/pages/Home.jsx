import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <section className='min-h-screen flex flex-col justify-center content-center py-10 px-5 md:px-12 lg:px-24'>
                <h1 className='text-5xl text-center mb-5'>E-Cell Pitcher&apos;s Showdown</h1>
                <h3 className="text-3xl text-center md:w-1/2 mx-auto mb-5">Unleash your vision and conquer the world of business. Pitch, invest, and thrive at the ultimate</h3>

                <p className="text-xl text-center">Ready to win big? &nbsp;
                    <Link to="/login"><button className="px-3 py-1 text-white rounded-sm bg-blue-700 hover:bg-blue-500">Login</button></Link>
                </p>
            </section>
        </>
    )
}