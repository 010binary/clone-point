import React, { ReactNode } from 'react'

const Container = ({ children }:{ children: ReactNode } ) => {
  return (
    <section className=' max-w-screen-2xl mx-auto'>
      {children}
    </section>
  )
}

export default Container