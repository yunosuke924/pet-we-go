'use client'

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import { QRCode } from 'react-qrcode-logo'

// イベントの型定義
interface Event {
  id: string
  title: string
  date: string
  description: string
}

// ページコンポーネントのprops型定義
interface EventPageProps {
  params: { id: string }
}

const getEvent = async (id: string): Promise<Event | undefined> => {
  // このサンプルコードでは、イベントデータをハードコードしています。
  // 実際のアプリケーションでは、ここでデータベースやAPIからデータを取得します。
  const events: Event[] = [
    {
      id: '1',
      title: 'ペット博 2024',
      date: '2024-09-15',
      description:
        'Annual tech conference featuring the latest in AI and machine learning.'
    },
    {
      id: '2',
      title: '黒柴オフ会',
      date: '2024-07-20',
      description:
        'Three-day music festival with top artists from around the world.'
    },
    {
      id: '3',
      title: 'ビジョンフリーザオフ会',
      date: '2024-08-10',
      description:
        'Explore culinary delights and fine wines from around the globe.'
    },
    {
      id: '4',
      title: 'ペット博 2024',
      date: '2024-09-15',
      description:
        'Annual tech conference featuring the latest in AI and machine learning.'
    },
    {
      id: '5',
      title: '黒柴オフ会',
      date: '2024-07-20',
      description:
        'Three-day music festival with top artists from around the world.'
    },
    {
      id: '6',
      title: 'ビジョンフリーザオフ会',
      date: '2024-08-10',
      description:
        'Explore culinary delights and fine wines from around the globe.'
    },
    {
      id: '7',
      title: 'ペット博 2024',
      date: '2024-09-15',
      description:
        'Annual tech conference featuring the latest in AI and machine learning.'
    },
    {
      id: '8',
      title: '黒柴オフ会',
      date: '2024-07-20',
      description:
        'Three-day music festival with top artists from around the world.'
    },
    {
      id: '9',
      title: 'ビジョンフリーザオフ会',
      date: '2024-08-10',
      description:
        'Explore culinary delights and fine wines from around the globe.'
    },
    {
      id: '10',
      title: 'ペット博 2024',
      date: '2024-09-15',
      description:
        'Annual tech conference featuring the latest in AI and machine learning.'
    },
    {
      id: '11',
      title: '黒柴オフ会',
      date: '2024-07-20',
      description:
        'Three-day music festival with top artists from around the world.'
    },
    {
      id: '12',
      title: 'ビジョンフリーザオフ会',
      date: '2024-08-10',
      description:
        'Explore culinary delights and fine wines from around the globe.'
    }
  ]

  return events.find((event) => event.id === id)
}

export const EventPage = ({ params }: EventPageProps) => {
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvent = async () => {
      const fetchedEvent = await getEvent(params.id)
      if (fetchedEvent) {
        setEvent(fetchedEvent)
      } else {
        notFound()
      }
      setLoading(false)
    }

    fetchEvent()
  }, [params.id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!event) {
    return null // notFound() will be called in useEffect
  }

  return (
    <>
      <div className='max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
        <h1 className='text-3xl font-bold mb-4'>{event.title}</h1>
        <p className='text-gray-600 mb-4'>Date: {event.date}</p>
        <p className='text-gray-800'>{event.description}</p>
        <QRCode
          value='https://pet-we-go.vercel.app/'
          logoImage={'/title.png'}
          logoHeight={30}
          logoWidth={50}
          logoOpacity={0.8}
          removeQrCodeBehindLogo
          qrStyle='dots'
          bgColor='#f9f9f9'
          fgColor='#E17835'
        />
      </div>
    </>
  )
}

export default EventPage
