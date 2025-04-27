import { useState, useEffect } from 'react'
import axios from 'axios';
import Context from './context/Context';
import PostPage from './components/PostsPage';

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


  const ProviderValue = { postList };

  return (
    <>
      <Context.Provider value={ProviderValue}>
        <PostPage />
      </Context.Provider>
    </>
  )
}

export default App
