'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import Eye from '@/components/icons/eye'
import EyeSlash from '@/components/icons/eyeSlash'

export default function Page() {

    const router = useRouter()

    const [showPassword, setShowPassword] = useState(false)
    const passwordRef  = useRef(null)
    const submitRef = useRef(null)

    const handleSubmit = event => {
        event.preventDefault()
        router.push('/dashboard', { scroll: false })
    }

    return (
        <div className='flex justify-center items-center bg-glitterShower h-screen w-screen p-5'>
            <form  onSubmit={handleSubmit} className='bg-white rounded-md w-96 min-w-80 h-auto py-10 px-3 flex flex-col gap-4'>
                <div className='flex justify-center items-center'>
                    <Image src='/logo.png' width={85} height={95} alt='logo' priority/>
                </div>
                <span className='text-lg font-medium'>Bienvenido a SaludApp</span>
                <div>
                    <label className='block text-base text-gray-900' htmlFor='email'>Correo Electrónico</label>
                    <div className='relative'>
                        <input className='peer block w-full rounded-md border bg-white text-black border-glitterShower h-12 text-base px-3 outline-none'
                            autoComplete='off'
                            id='email'
                            autoFocus
                            type='email'
                            name='email'
                            onKeyDown={event => {
                                if (event.key === 'Enter') {
                                    event.preventDefault()
                                    passwordRef?.current?.focus()
                                }
                            }}
                            required />
                    </div>
                </div>
                <div>
                    <label className='block text-base text-gray-900' htmlFor='email'>Contraseña</label>
                    <div className='relative'>
                        <input className='peer block w-full rounded-md border bg-white text-black border-glitterShower h-12 text-base px-3 outline-none'
                            ref={passwordRef}
                            autoComplete='off'
                            id='password'
                            autoFocus
                            type={showPassword? 'text' : 'password'}
                            name='password'
                            onKeyDown={event => {
                                if (event.key === 'Enter') {
                                    event.preventDefault()
                                    submitRef?.current?.focus()
                                }
                            }}
                            required />
                        <button type='button' 
                            className='absolute right-3 bottom-3 text-gray-95 outline-none border-none bg-white focus:brightness-200' 
                            onClick={() => setShowPassword(!showPassword)}>
                            {showPassword? <EyeSlash /> : <Eye />}
                        </button>
                    </div>
                </div>
                <button type='submit' className='h-12 bg-dynastyGreen rounded-md text-white font-medium text-lg' ref={submitRef}>
                    INICIAR SESION
                </button>
            </form>
        </div>
    )

}