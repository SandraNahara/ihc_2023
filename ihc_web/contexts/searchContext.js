'use client'

import { createContext, useContext, useState } from 'react'

const SearchContext = createContext()

export const useSearchContext = () => {
    return useContext(SearchContext)
}

export const SearchProvider = ({ children }) => {

    const [searchText, setSearchText] = useState('')

    const params = { searchText, setSearchText }

    return (
        <SearchContext.Provider value={params}>
            {children}
        </SearchContext.Provider>
    )
}