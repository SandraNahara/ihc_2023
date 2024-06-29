'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Tabs({ className, version = '1' }) {

    const PATHS = [
        { 
            name: 'Medicamentos',
            path: '/explore/medicines',
        },
        { 
            name: 'Doctores',
            path: '/explore/doctors'
        },
        { 
            name: 'Esp. Médica',
            path: '/explore/medical_specialties'
        },
        { 
            name: 'Farmacias',
            path: '/explore/pharmacy'
        }
    ]

    const pathname = usePathname()

    const [lineWidth, setLineWidth] = useState(0)
    const [linePosition, setLinePosition] = useState(0)

    const handleTabClick = index => {
        const tabElement = document.getElementById(`tab_${version}-${index}`)
        if (tabElement) {
            setLinePosition(tabElement.offsetLeft)
            setLineWidth(tabElement.offsetWidth)
        }
    }

    useEffect(() => {
        let index = PATHS?.findIndex(tab => pathname === tab.path)
        handleTabClick(index)
    }, [])

    return (
        <div className={`items-center gap-2 h-full ${className}`}>
            <ul className='flex relative items-center h-full'>
                {PATHS?.map((tab, index) => (
                    <Link href={tab.path} legacyBehavior key={index}>
                        <li id={`tab_${version}-${index}`} className={`px-2 py-2 text-tertiary text-[13.5px] cursor-pointer hover:scale-105 whitespace-nowrap`} 
                            onClick={() => handleTabClick(index)} >
                            {tab.name}
                        </li>
                    </Link>
                ))}
                <div className={`${PATHS?.find(tab => pathname.startsWith(tab.path))? 'block' : 'hidden'} z-50 h-full border-b-4 border-white absolute bottom-0 left-0 transition-transform duration-300 ease-in-out`}
                    style={{ width: `${lineWidth}px`, transform: `translateX(${linePosition}px)` }} />
            </ul>
        </div>
    )

}