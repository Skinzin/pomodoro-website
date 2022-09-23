import { Avatar } from './components/avatar'
import { Clock } from './components/clock'
import './style/main.css'

function App() {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='bg-opacity-30 bg-slate-400 shadow-lg max-w-lg rounded-xl p-4'>
        <div>
          <div className='flex items-center'>
            <Avatar avatar='https://github.com/Skinzin.png'/>
            <span className='pl-2'>Olá! Seja bem-vindo ao Pomodoro, <span className='text-lime-400 font-semibold'>Skinzin</span>.</span>
          </div>
          <div>
            <span className='block'>
              Vamos começar a tecnica pomodoro. 
              <a href="#" className='hover:underline text-slate-500 pl-1 font-medium'>Saiba mais</a>
            </span>
            <div className='justify-between'>
              <span>Você já usou:</span>
              <span className='pl-1'>9 Vezes</span>
            </div>
          </div>
        </div>


        <Clock />
      </div>
    </div>
  )
}

export default App