'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/utils/supabase'

type PrefectureCode = {
  [key: number]: { name: string }
}

const PREFECTURE_CODE: PrefectureCode = {
  1: { name: '北海道' },
  2: { name: '青森県' },
  3: { name: '岩手県' },
  4: { name: '宮城県' },
  5: { name: '秋田県' },
  6: { name: '山形県' },
  7: { name: '福島県' },
  8: { name: '茨城県' },
  9: { name: '栃木県' },
  10: { name: '群馬県' },
  11: { name: '埼玉県' },
  12: { name: '千葉県' },
  13: { name: '東京都' },
  14: { name: '神奈川県' },
  15: { name: '新潟県' },
  16: { name: '富山県' },
  17: { name: '石川県' },
  18: { name: '福井県' },
  19: { name: '山梨県' },
  20: { name: '長野県' },
  21: { name: '岐阜県' },
  22: { name: '静岡県' },
  23: { name: '愛知県' },
  24: { name: '三重県' },
  25: { name: '滋賀県' },
  26: { name: '京都府' },
  27: { name: '大阪府' },
  28: { name: '兵庫県' },
  29: { name: '奈良県' },
  30: { name: '和歌山県' },
  31: { name: '鳥取県' },
  32: { name: '島根県' },
  33: { name: '岡山県' },
  34: { name: '広島県' },
  35: { name: '山口県' },
  36: { name: '徳島県' },
  37: { name: '香川県' },
  38: { name: '愛媛県' },
  39: { name: '高知県' },
  40: { name: '福岡県' },
  41: { name: '佐賀県' },
  42: { name: '長崎県' },
  43: { name: '熊本県' },
  44: { name: '大分県' },
  45: { name: '宮崎県' },
  46: { name: '鹿児島県' },
  47: { name: '沖縄県' }
}

interface Event {
  id: string
  title: string
  description: string
  prefecture_code: number
}

const getEvents = (): Event[] => {
  const mockEvents: Event[] = [
    {
      id: '1',
      title:
        'ジブリの世界観のシーフードレストラン♡心を癒された西森さんのお声がけ',
      description: 'ジブリファン必見のレストランイベント',
      prefecture_code: 13
    },
    {
      id: '2',
      title: '東京から福岡に移住して2年。福岡の魅力と生活、仕事環境的に最高',
      description: '東京から福岡への移住体験記',
      prefecture_code: 40
    },
    {
      id: '3',
      title: '自分用にこれまでの焚き火動画の変遷をまとめてみた',
      description: '焚き火動画の進化を振り返る',
      prefecture_code: 1
    }
  ]

  return mockEvents
}

const EventListPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase.from('events').select('*')
        if (error) throw error
        setEvents(data && data.length > 0 ? data : getEvents())
      } catch (err) {
        console.error('Error fetching events:', err)
        setError('イベントの取得中にエラーが発生しました。')
        setEvents(getEvents())
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  if (loading) return <div className='text-center py-10'>Loading...</div>
  if (error)
    return <div className='text-center py-10 text-red-500'>{error}</div>

  return (
    <div className='max-w-7xl mx-auto mt-10 p-6'>
      <h1 className='text-3xl font-bold mb-6'>今日のイベント</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {events.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id} className='block'>
            <div className='border rounded-lg overflow-hidden hover:shadow-md transition-shadow'>
              <div className='relative w-full h-48'>
                <Image
                  src={'/free_shiba.jpg'}
                  alt={event.title}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='p-4'>
                <h2 className='text-lg font-semibold mb-2 line-clamp-2'>
                  {event.title}
                </h2>
                <div className='flex items-center mb-2'>
                  <div className='relative w-5 h-5 mr-2'>
                    <Image
                      src={'/yuno.jpg'}
                      alt={'test'}
                      layout='fill'
                      objectFit='cover'
                      className='rounded-full'
                    />
                  </div>
                  <span className='text-sm text-gray-600'>ういろうママ</span>
                </div>
                <p className='text-sm text-gray-600 mb-2'>
                  {PREFECTURE_CODE[event.prefecture_code].name}
                </p>
                <p className='text-xs text-gray-500'>2024/7/20</p>
                <div className='flex items-center mt-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 text-gray-400 mr-1'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                    />
                  </svg>
                  <span className='text-xs text-gray-500'>
                    http://example.com
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default EventListPage
