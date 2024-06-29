'use client'

import { useRef, useState } from 'react'

import Search from '@/components/icons/search'

export default function SearchInput({ className }) {

    const [isSearchFocused, setIsSearchFocused] = useState(false)

    const searchRef = useRef(null)

    return (
        <div className={`flex items-center w-64 ${className}`}>
            <div className={`relative ${isSearchFocused ? 'w-64' : 'w-8 overflow-hidden'} h-11 flex items-center transition-width ease-in-out duration-300`}>
                <input ref={searchRef}
                    type='text'
                    spellCheck={false}
                    autoComplete='off'
                    placeholder='Buscar...'
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className={`w-full h-10 pl-11 rounded-3xl outline-none text-gray-950 ${isSearchFocused ? 'bg-white' : 'bg-dynastyGreen'}`} />
                <button className={`absolute top-0 left-0 flex items-center justify-center rounded-3xl text-black h-11 w-11 border-none outline-none ${isSearchFocused ? 'text-glitterShower' : 'text-white'}`}
                    onClick={() => {
                        setIsSearchFocused(true)
                        searchRef?.current?.focus()
                    }}>
                    <Search />
                </button>
            </div>
        </div>
    )

}