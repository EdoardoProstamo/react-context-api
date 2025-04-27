import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  // useState
  const [postList, setPostList] = useState([]);

  // axios
  const getPost = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => setPostList(res.data))
  };

  // useEffect
  useEffect(() => { getPost() }, []);




  return (
    <>

    </>
  )
}

export default App
