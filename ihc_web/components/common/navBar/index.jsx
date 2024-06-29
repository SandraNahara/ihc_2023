'use client'

import Link from 'next/link'
import Image from 'next/image'

import { usePathname } from 'next/navigation'
import Tabs from '@components/common/navBar/tabs'
import SearchInput from '@components/common/navBar/searchInput'

export default function NavBar() {

    const pathname = usePathname()

    return (
        <nav className='bg-dynastyGreen text-white flex flex-col overflow-hidden'>
            <div className='flex justify-between px-3 h-14'>
                <SearchInput className='flex lg:hidden justify-start' />
                <div className='flex gap-2'>
                    <Link href='/dashboard' className='flex items-center'>
                        <span className='text-sm text-glitterShower'>SaludApp</span>
                        <Image src='/logo.png' width={35} height={35} className='py-1' alt='logo' priority/>
                    </Link>
                    <div className={`hidden lg:flex ${pathname.startsWith('/explore')? '' : 'lg:hidden'}`}>
                        <Tabs />
                    </div>
                </div>
                <SearchInput className='hidden lg:flex justify-end' />
            </div>
            <div className={`flex lg:hidden h-10 justify-center relative ${pathname.startsWith('/explore')? '' : 'hidden'}`}>
                <Tabs version='2' />
            </div>
        </nav>
    )

}