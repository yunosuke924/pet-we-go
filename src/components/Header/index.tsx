'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()

  return (
    <header className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <Link href='/events' className='text-xl font-bold text-gray-800'>
            PetWeGo
          </Link>

          <div className='flex-grow mx-4'>
            <div className='relative'>
              <input
                type='text'
                placeholder='キーワードやクリエイターで検索'
                className='w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent'
              />
              <button className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className='flex items-center space-x-4'>
            <button
              onClick={() => router.push('/login')}
              className='text-gray-600 hover:text-gray-800 font-medium'
            >
              ログイン
            </button>
            <button
              onClick={() => router.push('/signup')}
              className='bg-[#2cb696] hover:bg-[#2aa78a] text-white font-medium py-2 px-4 rounded'
            >
              会員登録
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
