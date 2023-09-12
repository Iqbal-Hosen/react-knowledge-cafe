import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmarks }) => {
    const [blogs, setBloges] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBloges(data));
    }, [])
    return (
        <div className=" md:w-2/3 ">
            <h1 className="text-4xl "> Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleBookmarks={handleBookmarks}
                ></Blog>)
            }

        </div>
    );
};

export default Blogs;