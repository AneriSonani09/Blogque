import React, { useEffect, useState } from 'react'
import Link from "react-router-dom";
import axios from 'axios';

function UpdateBlog() {
    const tokenstr = localStorage.getItem("usertoken")
    const str = tokenstr.split("/")
    const token = str[0]
    const [blog, setBlog] = useState({
        id: "",
        title: "",
        content: "",
        UserId:""
    })

    //code for geeting blogid
    const path = window.location.pathname
    const array = path.split("/")
    const id = array[2]

    const setValue = ({currentTarget: input}) => {
        setBlog({...blog, [input.name]:input.value})
    }


    const getData = async () => {
    try {
    const res = await axios.get(`https://localhost:7079/api/Blogs/${id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    setBlog(res.data);
  } catch (error) {
    console.error(error);
  }
};

    useEffect(() => {
        getData()
  }, [])

  return (
    <div>
      <h1>Update </h1>
    </div>
  )
}

export default UpdateBlog
