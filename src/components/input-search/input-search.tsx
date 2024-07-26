"use client"
import { useState } from "react"
import { InputSearchProps } from "./types"


const categoryName:any = {
  all: 'Todas categórias',
  history: 'História',
  literature: 'Literatura',
  science: 'Ciência',
  sports: 'Esportes',
}

export const InputSearch = ({ options }: InputSearchProps) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [option, setOption] = useState('all')
 
  return ( 
    <div className="flex w-[500px] relative">
      <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only">Your Email</label>
      <button 
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
        id="dropdown-button" 
        data-dropdown-toggle="dropdown" 
        type="button"
        onClick={()=> setShowDropdown(!showDropdown)}
      >
        {categoryName[option]}
        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div 
        id="dropdown" 
        className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-12 left-0 ${!showDropdown && 'hidden'}`}
      >
        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
          {options.map(category => (
            <li 
              className="inline-flex w-full px-4 py-2 hover:bg-gray-100 cursor-pointer"
              key={category}
              onClick={() => {
                setOption(category)
                setShowDropdown(false)
              }} 
            >
              { categoryName[category] }
            </li>
          ))}
        </ul>
      </div>
      <div className="relative w-full">
        <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-primary-500 focus:border-primary-300 outline-primary-300" placeholder="O que estás a procura ?" required />
        <button type="submit" className="absolute top-0 end-0 px-4 text-sm font-medium h-full text-white bg-primary-500 rounded-e-lg border border-primary-500 hover:bg-primary-700 focus:ring-4">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}