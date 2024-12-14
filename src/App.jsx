import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'
const App = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden background py-8 px-16 flex flex-col gap-6 items-center '>
      <h1 className='bg-white font-bold text-3xl text-center rounded-md py-2 w-full'>RANDOM GIFS</h1>
      <Random/>
      <Tag />
    </div>
  )
}

export default App
