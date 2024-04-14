import React from 'react'
import { Link } from 'react-router-dom'
export default function card() {
    return (
        <div className='mt-10 mr-2 ml-2'>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href="#">
                    <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                </Link>
                <div className="p-5">
                    <Link href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">card tittle</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This is some important text</p>
                    <div className='container max-w-32 flex items-center '>
                        <select className='m-1 h-6 bg-emerald-500 rounded'  >
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1} >{i + 1}</option>
                                )

                            })}  </select>
                        <div>
                            <select className='m-1 h-6 bg-emerald-500 rounded'  >
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>
                        </div>
                        <div className="text-white ml-1">
                            TotalPrice
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
