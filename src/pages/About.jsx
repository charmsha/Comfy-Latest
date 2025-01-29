import React from 'react'

const About = () => {
  return (
    <>
    <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
      <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
        We Love
      </h1>
      <div className="stats bg-primary shadow">
        <div className="stat">
          <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
            Comfy
          </div>
        </div>
      </div>
    </div>
    <p className='mt-6 leading-8 text-lg max-w-2xl mx-auto'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam alias laboriosam libero earum ex aliquam sed laborum molestias ipsum, facere, ipsa velit animi voluptas iusto repellendus, recusandae similique odio.
    </p>
    </>
  )
}

export default About

