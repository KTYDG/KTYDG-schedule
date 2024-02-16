import { useState } from 'react'
import { Checkbox } from './Checkbox/Checkbox';
import Arrow from '../assets/arrow.svg?react';

const Goal = () => {
  const [opened, setOpened] = useState(false)
  const descStyle = 'text-white text-3xl pl-14 pt-3 pr-3 overflow-hidden desc';
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-row justify-between px-2.5'>
        <div className='flex flex-row gap-5 items-center'>
          <Checkbox />
          <h1 className='text-white text-4xl'>Заголовок</h1>
        </div>
        <button onClick={() => setOpened(!opened)}>
          <Arrow />
        </button>
      </div>
      <p className={opened ? descStyle+" opened-desc" : descStyle}>
        Очень очень очень очень очень очень очень очень очень очень очень очень очень очень очень очень очень длинное описание
      </p>
      <div className='h-1.5 w-full bg-button rounded-2xl mt-3 mb-7'></div>
    </div>
  )
}

export default Goal