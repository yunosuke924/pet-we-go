'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const router = useRouter()

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl w-full flex'>
        <div className='w-1/2 pr-8'>
          <h2 className='text-4xl font-bold mb-6'>PetWeGoにようこそ！</h2>
          <p className='text-gray-600 mb-4'>
            PetWeGoは、創作をする人、それを応援する人、ものづくりが好き
            なみんなのための街のような場所。
          </p>
          <p className='text-gray-600 mb-4'>
            好みのクリエイターやコンテンツを見つけたり、自分のつくり
            たいものをつくったりして楽しめます。
          </p>
          <p className='text-gray-600'>
            いっしょに、創作の輪を広げていきましょう。
          </p>
        </div>

        <div className='w-1/2 pl-8'>
          <div className='bg-white p-8 border border-gray-200 rounded-lg shadow-sm'>
            <h2 className='text-2xl font-bold text-center mb-6'>
              PetWeGoに会員登録
            </h2>
            <div className='space-y-4'>
              <button
                className='w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-[#2cb696] hover:bg-[#2aa78a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2cb696]'
                onClick={() => router.push('/signup/email')}
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                </svg>
                メールで登録
              </button>
              <button className='w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <svg
                  className='w-5 h-5 mr-2'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                    fill='#4285F4'
                  />
                  <path
                    d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                    fill='#34A853'
                  />
                  <path
                    d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                    fill='#FBBC05'
                  />
                  <path
                    d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                    fill='#EA4335'
                  />
                </svg>
                Googleで登録
              </button>
              <button className='w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <svg
                  className='w-5 h-5 mr-2'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'
                    fill='#1DA1F2'
                  />
                </svg>
                X (Twitter) で登録
              </button>
              <button className='w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <svg
                  className='w-5 h-5 mr-2'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.991 22 12c0-5.523-4.477-10-10-10z'
                    fill='#000000'
                  />
                </svg>
                Appleで登録
              </button>
            </div>
          </div>
          <div className='mt-4 text-right'>
            <Link
              href='#'
              className='text-sm text-gray-600 hover:text-gray-900'
            >
              法人の方
            </Link>
          </div>
        </div>
      </div>

      <footer className='mt-8 text-center'>
        <Link
          href='/login'
          className='text-sm text-gray-600 hover:text-gray-900'
        >
          ログインはこちら
        </Link>
      </footer>
    </div>
  )
}
