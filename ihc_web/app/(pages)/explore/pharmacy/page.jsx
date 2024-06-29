'use client'

import { useCallback, useEffect, useState } from 'react'

import Card from '@components/card'
import PharmacyService from '@services/pharmacy'

export default function Page() {

    const LIST_SIZE = 12
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const fetchData = useCallback(async () => {
        const values = await PharmacyService.get({ page: currentPage, size: LIST_SIZE })
        setData(values?.result?.map(item => ({
            title: item.name, 
            subtitle: '', 
            address: item.address, 
            price: '',
            distance: item.distance 
        })))
    })

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
            {data?.map((item, index) =>
                <Card key={index} item={item} />
            )}
        </div>
    )

}