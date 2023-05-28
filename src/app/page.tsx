import Header from '@/components/Header'
import Image from 'next/image'

import tshirt1 from '../assets/t-shirts/1.png'
import tshirt2 from '../assets/t-shirts/2.png'
import tshirt3 from '../assets/t-shirts/3.png'

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen">
      <Header />
      <main className='flex gap-12 w-full max-w-[calc(100vw-((100vw-1180px)/2))] ml-auto min-h-[656px]'>
        <a href="" className='bg-gradient-to-b from-teal-400 via-teal-500 to-indigo-500 rounded-lg p-1 cursor-pointer relative flex items-center justify-center object-cover'>
          <Image src={tshirt1} width={520} height={480} alt='' />
          <footer className='absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-black bg-opacity-60 opacity-0 transition-all duration-200 hover:opacity-100'>
            <strong className='text-lg'>T-shirt 1</strong>
            <span className='text-xl font-bold text-green300'>R$ 79,90</span>
          </footer>
        </a>

        <a
          href=""
          className='bg-gradient-to-b from-teal-400 via-teal-500 to-indigo-500 rounded-lg p-1 cursor-pointer relative flex items-center justify-center object-cover'

        >
          <Image src={tshirt2} width={520} height={480} alt='' />
          <footer className='absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-black bg-opacity-60 opacity-0 transition-all duration-200 hover:opacity-100'>
            <strong className='text-lg'>T-shirt 2</strong>
            <span className='text-xl font-bold text-green300'>R$ 79,90</span>
          </footer>
        </a>

        <a href="" className='bg-gradient-to-b from-teal-400 via-teal-500 to-indigo-500 rounded-lg p-1 cursor-pointer relative flex items-center justify-center object-cover'>
          <Image src={tshirt3} width={520} height={480} alt='' />
          <footer className='absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-black bg-opacity-60 opacity-0 transition-all duration-200 hover:opacity-100'>
            <strong className='text-lg'>T-shirt 3</strong>
            <span className='text-xl font-bold text-green300'>R$ 79,90</span>
          </footer>
        </a>

      </main>
    </div>
  )
}
