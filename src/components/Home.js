import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


export const Home = () => {

  const {text} = useTypewriter({
    words: ['< Software Web Developer />'],
    loop: 0,
  })

  return (
    <div className='Home'>
         <div className="page">
            <div className="container-Home">
              <h1 className="">Hi, I am Santiago Lavigna Jara</h1>
              <p className="">
                <span>
                  {text}
                </span>
                <Cursor />
              </p>
            </div>
          </div>
    </div>
  )
}