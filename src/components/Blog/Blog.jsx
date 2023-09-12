import PropTypes from 'prop-types';
import { BsBookmarkPlusFill } from 'react-icons/bs';



const Blog = ({ blog, handleBookmarks }) => {
    const { title, cover, author, author_img, posted, reading_time } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl '>{author}</h3>
                        <p>{posted}</p>

                    </div>


                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleBookmarks(blog)} className='ml-2 text-2xl text-yellow-400'><BsBookmarkPlusFill></BsBookmarkPlusFill></button>

                </div>
            </div>
            <h2 className="text-4xl ">{title}</h2>
            {/* <p>
                {
                    hashtags.map(hash => <span><a href="">#{hash}</a>
                    </span>)

                }
            </p> */}

        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func


}

export default Blog;