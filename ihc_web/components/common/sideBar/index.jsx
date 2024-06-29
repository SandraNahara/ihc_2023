'use client'

import { useState } from 'react'

import HomeIcon from '@components/icons/home'
import MenuIcon from '@components/icons/menu'
import UserIcon from '@components/icons/user'
import CrevronIcon from '@components/icons/chevron'
import LocationIcon from '@components/icons/location'
import MenuTab from '@components/common/sideBar/menuTab'

export default function SideBar() {

    const [expanded, setExpanded] = useState(true)

    return (
        <div className={`hidden lg:flex flex-col justify-between bg-dynastyGreen text-white z-50 relative min-h-[calc(100vh_-_3.5rem)] transition-[width] duration-[0.3s] ease-[ease-in-out] left-0 top-0 ${expanded? 'w-32' : 'w-14'}`}>
            <button className={`border-none outline-none transform ${expanded ? 'rotate-180' : ''} transition-all duration-300 border-none bg-glitterShower text-dynastyGreen outline-none w-5 h-5 rounded-full absolute top-3 -right-2 flex justify-center items-center`}
                onClick={() => setExpanded(!expanded)}>
                <CrevronIcon size={18} />
            </button>
            <div className='flex flex-col py-5'>
                <MenuTab path='/dashboard' moduleName='/dashboard' label='Inicio' isExpanded={expanded}>
                    <HomeIcon />
                </MenuTab>
                <MenuTab path='/explore/medicines' moduleName='/explore' label='Explorar' isExpanded={expanded}>
                    <MenuIcon />
                </MenuTab>
                <MenuTab path='/map' moduleName='/map' label='Mapa' isExpanded={expanded}>
                    <LocationIcon />
                </MenuTab>                
                <MenuTab path='/user' moduleName='/user' label='Usuario' isExpanded={expanded}>
                    <UserIcon />
                </MenuTab>
            </div>
        </div>
    )

}