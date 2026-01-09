import CounterA from '../components/CounterA'
import CounterB from '../components/CounterB'
import CounterC from '../components/CounterC'

export const Home = () => {
  return (
    <div
      className='min-h-screen bg-linear-to-br from-gray-100 to-gray-300 
    flex flex-col md:flex-row items-center justify-center 
    gap-8 p-6'
    >
      <CounterA />
      <CounterB />
      <CounterC />
    </div>
  )
}
