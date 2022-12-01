import React,{useState} from "react";
import './WritePost.css'
import axios from 'axios';

const WritePost = () => {
  // const [inputs, setInputs] = useState({});
  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   const content = event.target.value;
  //   setInputs(values => ({...values, [name]:{value,content}}))
  // }

  // const [textarea, setTextarea] = useState(
  //   "Your Content"
  // );

  const [titl,setTitle] = useState('');
  const [autho,setAuthor] = useState('');
  const [conten,setContent] = useState('');

 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = {title:titl,
                  author:autho,
                  content:conten};

    const t =   JSON.stringify(blog);
    axios.post('http://localhost:3000/clog/createPost',t)
    // fetch('http://localhost:3000/clog/createPost',{
    //   method : 'POST',
    //   headers:{'Content-type' : 'application/json'},
    //   body: JSON.stringify(blog),
    // }).then(console.log("added"))
   
  
  }
  return (
    <>
      <div className="contain">
        <div className="wrapper">




  <form onSubmit={handleSubmit}>
    <label>Enter your name:
    <input 
      type="text" 
      name="username" 
      value={autho} 
      onChange={(e) => {setAuthor(e.target.value)}}
    />
    </label>
    <br/><br/>
    <label>Enter your title:
      <input 
        type="text" 
        name="title" 
        value={titl} 
        onChange={(e) => {setTitle(e.target.value)}}
      />
      </label>
      <br/><br/>
      <textarea rows={20} cols={200} value={conten}  onChange={(e) => {setContent(e.target.value)}} />
      <input type="submit" />
      <br/><br/>
  </form>

        </div>
      </div>
    </>
  );
};

export default WritePost;
