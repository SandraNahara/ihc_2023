import GalleryIcon from '@components/icons/gallery'

export default function Card({ item }) {

    return (
        <article className='flex gap-1 bg-glitterShower text-black rounded-lg p-2'>
            <div className='bg-white flex justify-center items-center h-[70px] w-[64px] rounded-md'>
                <GalleryIcon />
            </div>
            <div className='flex-grow text-[12px]'>
                <div className='flex flex-col h-full'>
                    <div className='flex justify-between w-full'>
                        <span className='font-semibold'>{item.title}</span>
                        <span className='whitespace-nowrap font-normal'>a {item?.distance}</span>
                    </div>
                    <span className='font-normal'>{item?.subtitle}</span>
                    <div className='mt-auto flex justify-between gap-1'>
                        <span className='font-light'>{item?.address}</span>
                        <span className='text-[14px] font-semibold whitespace-nowrap'>{item?.price}</span>
                    </div>
                </div>
            </div>
        </article>
    )

}