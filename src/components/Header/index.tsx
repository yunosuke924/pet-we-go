'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabase'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session): void => {
      console.log('session', session)
      if (session?.user != null) {
        setIsLoggedIn(true)
      }

      if (session?.user == null) {
        setIsLoggedIn(false)
      }
    })
  }, [])

  return (
    <header className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <Link href='/events' className='text-xl font-bold text-gray-800'>
            Pet We Go
          </Link>
          {isLoggedIn ? (
            <button
              onClick={() => {
                supabase.auth
                  .signOut()
                  .then(() => {
                    router.push('/login')
                  })
                  .catch((e) => {
                    alert(e)
                  })
              }}
              className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
            >
              ログアウト
            </button>
          ) : (
            <button
              onClick={() => {
                router.push('/login')
              }}
              className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
            >
              ログイン
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
