import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { makeRequest } from "../utils";

export default function Business() {
	const amt = localStorage.getItem('balance') ?? 0
	const [info, setInfo] = useState({ team_name: '', team_content: '', link: '', img: '', invested: false })

	const params = useParams()
	useEffect(() => {
		makeRequest('GET', 'business/' + params.id, {},
			(data) => setInfo(data),
			(status) => alert('Could not get business info!')
		)
	}, [])

	const nav = useNavigate()
	const makeInvestment = (ev) => {
		ev.preventDefault()
		const inv_amt = ev.currentTarget.querySelector('input').value
		makeRequest('POST', 'business/' + params.id, { amt: inv_amt },
			(res) => { localStorage.setItem('balance', amt - inv_amt); alert('Investment made successfully!'); nav('/business/all') },
			(err) => { alert('Could not make investment!') }
		)
	}

	return (
		<>
			<div className="max-w-lg mx-auto my-5 bg-white shadow-lg rounded-lg p-6">
				{/* Business Name */}
				<div className="text-2xl font-semibold text-gray-800 mb-4">
					{info.team_name}
				</div>

				{/* Business Info Section */}
				<div className="flex items-center mb-6">
					<div>
						<div className="text-base font-medium text-gray-700">
							<p>{info.team_content}</p>
							<p className="mt-1 underline"><a href={info.link} target="_blank" rel="noopener noreferrer">Presentation</a></p>

							<img src={info.img} alt="" className="my-3 w-full object-cover" />
						</div>

						<div className="text-sm text-green-500">
							Remaining Amount: {amt} <span>Lakhs</span>
						</div>
					</div>
				</div>

				{/* Investment Form Section */}
				<div className="bg-gray-100 p-4 rounded-lg">
					<div className="text-lg font-medium text-gray-700 mb-2">
						Investment Form
					</div>
					<form onSubmit={makeInvestment} method="post">
						<div className="flex items-center space-x-2">
							<input
								type="number" min="0" max={amt}
								placeholder="Enter Amount"
								className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
							/>
							<button type="submit"
								className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
								Invest
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
