import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../utils";

const Login = () => {
    const nav = useNavigate()
    const handleSubmit = (ev) => {
        ev.preventDefault()
        makeRequest('POST', 'auth/login', { 
            username: ev.currentTarget.querySelector('input#username').value,
            password: ev.currentTarget.querySelector('input#password').value
        },
        (data) => {
            document.querySelector('p#error').classList.add('hidden')
            localStorage.setItem('token', data.jwtToken)
            localStorage.setItem('balance', data.balance)
            nav('/business/all')
        },
        (statusCode) => {
            document.querySelector('p#error').classList.remove('hidden')
        })
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-500">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Ecell Login</h2>

                <form method="post" onSubmit={handleSubmit} className="space-y-4">
                    <p id="error" className="hidden text-base text-center text-red font-bold">Incorrect Username or Password!</p>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Team Username
                        </label>
                        <input id="username" placeholder="Team username"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input type="password" id="password" placeholder="Enter your password"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
