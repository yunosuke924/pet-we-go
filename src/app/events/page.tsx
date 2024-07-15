import Link from 'next/link'

// イベントの型定義
interface Event {
  id: string
  title: string
  date: string
  description: string
  location: string
}

// イベントデータを取得する関数
const getEvents = async (): Promise<Event[]> => {
  const events: Event[] = [
    {
      id: '1',
      title: 'ペット博 2024',
      date: '2024-09-15',
      description:
        'Annual tech conference featuring the latest in AI and machine learning.',
      location: '東京'
    },
    {
      id: '2',
      title: '黒柴オフ会',
      date: '2024-07-20',
      description:
        'Three-day music festival with top artists from around the world.',
      location: '千葉'
    },
    {
      id: '3',
      title: 'ビジョンフリーザオフ会',
      date: '2024-08-10',
      description:
        'Explore culinary delights and fine wines from around the globe.',
      location: '大阪'
    },
    {
      id: '4',
      title: 'ペット博 2024',
      date: '2024-09-15',
      description:
        'Annual tech conference featuring the latest in AI and machine learning.',
      location: '東京'
    },
    {
      id: '5',
      title: '黒柴オフ会',
      date: '2024-07-20',
      description:
        'Three-day music festival with top artists from around the world.',
      location: '千葉'
    },
    {
      id: '6',
      title: 'ビジョンフリーザオフ会',
      date: '2024-08-10',
      description:
        'Explore culinary delights and fine wines from around the globe.',
      location: '大阪'
    },
    {
      id: '7',
      title: 'ペット博 2024',
      date: '2024-09-15',
      description:
        'Annual tech conference featuring the latest in AI and machine learning.',
      location: '東京'
    },
    {
      id: '8',
      title: '黒柴オフ会',
      date: '2024-07-20',
      description:
        'Three-day music festival with top artists from around the world.',
      location: '千葉'
    },
    {
      id: '9',
      title: 'ビジョンフリーザオフ会',
      date: '2024-08-10',
      description:
        'Explore culinary delights and fine wines from around the globe.',
      location: '大阪'
    },
    {
      id: '10',
      title: 'ペット博 2024',
      date: '2024-09-15',
      description:
        'Annual tech conference featuring the latest in AI and machine learning.',
      location: '東京'
    },
    {
      id: '11',
      title: '黒柴オフ会',
      date: '2024-07-20',
      description:
        'Three-day music festival with top artists from around the world.',
      location: '千葉'
    },
    {
      id: '12',
      title: 'ビジョンフリーザオフ会',
      date: '2024-08-10',
      description:
        'Explore culinary delights and fine wines from around the globe.',
      location: '大阪'
    }
  ]

  return events
}

// イベント一覧ページコンポーネント
const EventListPage = async () => {
  const events = await getEvents()

  return (
    <>
      <div className='max-w-4xl mx-auto mt-10 p-6'>
        <h1 className='text-3xl font-bold mb-6'>イベント一覧</h1>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {events.map((event) => (
            <Link href={`/events/${event.id}`} key={event.id} className='block'>
              <div className='border rounded-lg p-4 hover:shadow-md transition-shadow'>
                <h2 className='text-xl font-semibold mb-2'>{event.title}</h2>
                <div className='flex justify-between items-center text-gray-600 mb-2'>
                  <p>{event.date}</p>
                  <p>{event.location}</p>
                </div>
                <p className='text-gray-800 text-sm'>
                  {event.description.substring(0, 100)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default EventListPage
