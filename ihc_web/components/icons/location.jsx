export default function LocationIcon(props) {

  return (
    <svg xmlns='http://www.w3.org/2000/svg'
      width={25}
      height={25}
      fill='none'
      {...props} >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M22.917 9.375v6.25c0 2.604-.521 4.427-1.688 5.604l-6.645-6.646 8.052-8.052c.187.823.28 1.76.28 2.844M22.636 6.531 6.53 22.635c-3.135-.718-4.447-2.885-4.447-7.01v-6.25c0-5.208 2.083-7.292 7.291-7.292h6.25c4.125 0 6.292 1.313 7.01 4.448M21.23 21.23c-1.178 1.166-3 1.687-5.605 1.687h-6.25c-1.083 0-2.02-.094-2.844-.282l8.052-8.052z'
      />
      <path
        stroke='currentColor'
        strokeWidth={1.5}
        d='M6.5 8.313c.708-3.053 5.292-3.053 6 0 .406 1.791-.719 3.312-1.708 4.25a1.876 1.876 0 0 1-2.583 0c-.99-.938-2.126-2.459-1.709-4.25Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d='M9.474 9.063h.009'
      />
    </svg>
  )

}