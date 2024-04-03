import MainCalendar from '@/components/MainCalendar'
import SideCalendar from '@/components/SideCalendar'




export default function Home() {


  return (
    <>
      <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-bold text-2xl text-gray-700">Calendar</h1>
      </nav>

      <div className='flex p-2 ml-6'>

        <div className='border p-4'>
          <SideCalendar />
        </div>

        <div>
          <MainCalendar />
        </div>

      </div>

    </>
  )
}