import React, { Component } from 'react'

export default class Subscribe extends Component {
    render() {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-200">
                <div className="bg-white rounded shadow-2xl p-8 m-4 max-w-md w-full mx-auto">
                    <h1 className="text-gray-800 text-3xl font-semibold">Subscribe</h1>
                    <form className="mt-6">
                        <div className="flex justify-between gap-3">
                            <span className="w-1/2">
                                <label htmlFor="firstName" className="block text-s font-semibold text-gray-700 ">Ak chcete byť informovaní o aktuálnych akciach a rôznych novinkách, nižšie zadajme email a prihláste sa do nášho Newsletteru !</label>
                            </span>
                    
                        </div>
                        <span>
                              <label htmlFor="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Zadajte svôj email"></input>
                        </span>

                        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}