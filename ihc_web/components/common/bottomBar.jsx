import HomeIcon from '@components/icons/home'
import MenuIcon from '@components/icons/menu'
import UserIcon from '@components/icons/user'
import LocationIcon from '@components/icons/location'

export default function BottomBar() {

    return (
        <section className='flex lg:hidden bg-dynastyGreen text-white justify-between h-12 fixed bottom-0 left-0 w-full z-20'>
            <button className='border-none outline-none bg-none grow h-full text-white flex justify-center items-center'>
                <HomeIcon />
            </button>
            <button className='border-none outline-none bg-none grow h-full text-white flex justify-center items-center'>
                <MenuIcon />
            </button>
            <button className='border-none outline-none bg-none grow h-full text-white flex justify-center items-center'>
                <LocationIcon />
            </button>
            <button className='border-none outline-none bg-none grow h-full text-white flex justify-center items-center'>
                <UserIcon />
            </button>
        </section>
    )

}