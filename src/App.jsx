import { useState } from 'react'


function App() {
  const [title] = useState('Hello React! (From Vue:>)')

  return (
    <div className="flex justify-center mt-60">
      <h5 className='text-5xl'>{title}</h5>
    </div>
  )
}

export default App
