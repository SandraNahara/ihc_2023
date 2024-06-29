export default function Page() {

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col py-8'>
                <h1 className='text-4xl'>Bienvenido</h1>
                <h3 className='text-2xl'>Juan Pérez</h3>
                <h5 className='text-lg'>Deseas buscar algo en el mapa?</h5>
            </div>
            <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 text-lg'>
                <article className='bg-dynastyGreen text-white h-20 flex justify-center items-center rounded-lg'>
                    <span>Medicamentos</span>
                </article>
                <article className='bg-dynastyGreen text-white h-20 flex justify-center items-center rounded-lg'>
                    <span>Doctores</span>
                </article>
                <article className='bg-dynastyGreen text-white h-20 flex justify-center items-center rounded-lg'>
                    <span>Especialidad Médica</span>
                </article>
                <article className='bg-dynastyGreen text-white h-20 flex justify-center items-center rounded-lg'>
                    <span>Farmacia</span>
                </article>
            </div>
        </div>
    )

}