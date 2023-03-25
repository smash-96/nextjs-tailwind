"use client";
import React, { useState } from 'react'
import Modalcomponent from './modalcomponent'

export default function Home() {
  const [modal, setModal] = useState<boolean>(false)
  const modalOpen = () => {
    setModal(true)
  }
  const modalHide = () => {
    setModal(false)
  }
  return (
    <main className='app_main'>
      <Modalcomponent
        isModal={modal}
        modalClose={modalHide}
      />
      <div className='flex items-center justify-center pt-[40px]'>
        <button onClick={modalOpen} className="rounded-md bg-primary-default text-lg py-[12px] px-[24px] capitalize text-white">
          open modal
        </button>
      </div>
    </main>
  )
}
