import React,{useEffect,useState} from 'react'
import Clog from './Clog'
import Index from './Index'
import Bdata from './Bdata';
import './Blog.css'
import axios from 'axios'

let data ;
const api = "http://localhost:3000/clog/getAllPost";
const Blog = () => {
  const func = async (url) => {
    try{
    const res = await axios(url);
    data = await res.json();  
    }catch(e){
      console.log(e);
    }
  } 
  const [data,setPost] = useState();
  useEffect(()=>{
    axios.get(api).then((response) => {
      setPost(response.data);
    });
    
  },[])
  return (
    <>
        {/* <Index/> */}
    <div className='blogContainer'>
        {data?.map((val,index) =>{
            return(<Clog title = {val.title}
                        content = {val.content}
                        author = {val.author}
            />)
        })}
    </div>

    </>
  )
}

export default Blog