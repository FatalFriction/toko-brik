import SignInForm from '@/components/form/SignInForm'
import React from 'react'

const signIn = () => {
  return (
    <div className='grid h-screen place-items-center px-10 lg:w-[30%] mx-auto overflow-hidden'>
      <SignInForm/>
    </div>
  )
}

export default signIn