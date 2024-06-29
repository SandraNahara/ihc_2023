export default function GalleryIcon(props) {

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={25}
      height={25}
      fill='none'
      {...props} >
      <path stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M9.375 22.917h6.25c5.209 0 7.292-2.084 7.292-7.292v-6.25c0-5.208-2.084-7.292-7.292-7.292h-6.25c-5.208 0-7.291 2.084-7.291 7.292v6.25c0 5.208 2.083 7.292 7.291 7.292' />
      <path stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M9.375 10.417a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167M2.781 19.74l5.136-3.448c.823-.552 2.01-.49 2.75.145l.343.303c.813.698 2.125.698 2.938 0l4.333-3.72c.813-.697 2.125-.697 2.938 0l1.698 1.46' />
    </svg>
  )

}