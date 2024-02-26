import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className='flex justify-center items-center text-center font-bold md:text-3xl text-2xl mb-12'>
        NextJS Releases App
      </h1>
      <Link href='/releases' />
    </main>
  )
}
