import SignUpForm from '@/components/form/SignUpForm'
import React from 'react'

const signUp = () => {
  return (
    <div className='grid h-screen place-items-center px-10 lg:w-[30%] mx-auto overflow-hidden'>
      <SignUpForm/>
    </div>
  )
}

export default signUp