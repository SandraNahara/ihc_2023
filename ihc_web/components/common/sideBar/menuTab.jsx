'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuTab = ({ path, label, moduleName, isExpanded, onClick, children }) => {

    const pathname = usePathname()

    return path? (
        <Link href={path} legacyBehavior >
            <section className={`flex items-center gap-2 cursor-pointer overflow-hidden px-4 py-3 whitespace-nowrap font-light hover:text-pastelOrange ${pathname.startsWith(moduleName ?? path)? 'bg-glitterShower text-dynastyGreen' : ''}`}>
                <span>{ children }</span>
                <span className={`text-sm font-medium transition-opacity duration-[0.4s] ease-[ease-in-out] ${isExpanded? 'opacity-100' : 'opacity-0'}`}>{label}</span>
            </section>
        </Link>
    ) : (
        <section onClick={onClick} className={`text-[#666] flex items-center gap-2 cursor-pointer overflow-hidden px-4 py-3 whitespace-nowrap font-light hover:text-glitterShower ${pathname.startsWith(moduleName ?? path)? 'bg-glitterShower text-dynastyGreen hover:text-white' : ''}`}>
            <span>{ children }</span>
            <span className={`text-sm font-medium transition-opacity duration-[0.4s] ease-[ease-in-out] ${isExpanded? 'opacity-100' : 'opacity-0'}`}>{label}</span>
        </section>
    )

}

export default MenuTab