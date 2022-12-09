import React, { useEffect, useState } from "react";
import Clog from "./Clog";
import "./Blog.css";
import axios from "axios";
import "./Registeration.css";

// import Registeration,{reg} from './Registeration';

let data;
const api = "http://localhost:3000/clog/getAllPost";
const Blog = () => {
  const [reg, treg] = useState(true);
  const [log, tlog] = useState(false);

  // for blogs data
  const func = async (url) => {
    try {
      const res = await axios(url);
      data = await res.json();
    } catch (e) {
      console.log(e);
    }
  };

  const [data, setPost] = useState();
  useEffect(() => {
    axios.get(api).then((response) => {
      setPost(response.data);
    });
  }, []);

  const [udetails, setudetails] = useState({
    username: "",
    age: 0,
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setudetails((udetails) => ({ ...udetails, [name]: value }));
  };

  // for registeration

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(udetails);

    axios({
      method: "post",
      url: "http://localhost:3000/auth/registerUser",
      data: udetails,
    })
      .then(function (response) {
        if (response.status === 200) {
          treg(!reg);
          tlog(!log);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // for login

  const [ulogin, setulogin] = useState({
    email: "",
    password: "",
  });

  const handleCl = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setulogin((ulogin) => ({ ...ulogin, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(ulogin);
    axios({
      method: "post",
      url: "http://localhost:3000/auth/login",
      data: ulogin,
    }).then(function (response) {
        if (response.status === 200) {
          tlog(!log);
        }
      }).catch(function (error) {
        console.log(error);
      });
  };




  if (reg) {
    return (
      <div className="pop_box">
        <div className="box">
          <h1>Please Register First</h1>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">Your Name</label>
            <input
              name="username"
              type={"text"}
              id="username"
              value={udetails.username}
              onChange={handleChange}
            />

            <label htmlFor="email">Your mail</label>
            <input
              name="email"
              type={"text"}
              id="email"
              value={udetails.email}
              onChange={handleChange}
            />

            <label htmlFor="age">Your age</label>
            <input
              name="age"
              type={"number"}
              id="age"
              value={udetails.age}
              onChange={handleChange}
            />

            <label htmlFor="password">Your password</label>
            <input
              name="password"
              type={"password"}
              id="password"
              value={udetails.password}
              onChange={handleChange}
            />
            <div>
              <button
                type="button"
                onClick={() => {
                  tlog(!log);
                  treg(!reg);
                }}
              >
                All Ready registerd ?
              </button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  } else if (log) {
    return (
      <div className="pop_box">
        <div className="box">
          <h1>Please login</h1>
          <form action="" onSubmit={handleLogin}>
            <label htmlFor="email">Your mail</label>
            <input
              name="email"
              type={"text"}
              id="email"
              value={ulogin.email}
              onChange={handleCl}
            />

            <label htmlFor="password">Your password</label>
            <input
              name="password"
              type={"password"}
              id="password"
              value={ulogin.password}
              onChange={handleCl}
            />
            <button type="button" onClick={()=>{treg(!reg);tlog(!log)}}>back</button>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="blogContainer">
          {data?.map((val, index) => {
            return (
              <Clog
                index
                title={val.title}
                content={val.content}
                author={val.author}
              />
            );
          })}
        </div>
      </>
    );
  }
};

export default Blog;
