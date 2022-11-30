import React from 'react'
import Clog from './Clog'
import Index from './Index'
import Bdata from './Bdata';
import './Blog.css'

const blog = () => {
  return (
    <>
        {/* <Index/> */}
    <div className='blogContainer'>
        {Bdata.map((val,index) =>{
            return(<Clog title = {val.title}
                        content = {val.content}
                        author = {val.author}
            />)
        })}
    </div>

    </>
  )
}

export default blog