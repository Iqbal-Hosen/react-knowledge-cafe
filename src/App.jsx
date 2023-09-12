
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = blog => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  }


  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-4xl mx-auto '>
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>

    </>
  )
}

export default App
