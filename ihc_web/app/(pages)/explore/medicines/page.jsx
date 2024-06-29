'use client'

import { useCallback, useEffect, useState } from 'react'

import Card from '@components/card'
import MedicineService from '@services/medicine'
import { addNumberFormat } from '@/utils'

export default function Page() {

    const LIST_SIZE = 12
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const fetchData = useCallback(async () => {
        const values = await MedicineService.get({ page: currentPage, size: LIST_SIZE })
        setData(values?.result?.map(item => ({
            title: item.name, 
            subtitle: item.pharmacy.name, 
            address: item.pharmacy.address, 
            price: `${addNumberFormat(item.price)}  Gs`,
            distance: item.pharmacy.distance 
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