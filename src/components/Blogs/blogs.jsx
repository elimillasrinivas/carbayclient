
import './blogs.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Blogdata from './blogsdata';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import Headersub from '../../pages/Header/header2';

const Blogs = () => {
  const navigate = useNavigate()
  const blogsPerPage = 6; // Number of blogs to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indexes for displaying blogs based on current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = Blogdata.slice(indexOfFirstBlog, indexOfLastBlog);

  // Next page
  const nextPage = () => {
    if (indexOfLastBlog < Blogdata.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  // view page
  const [selectedblog, setSelectedblog] = useState('');
  
  const handleProduct = (item) => {
    setSelectedblog(item);
    navigate('/blogview', { state: { selectedblog: item } });
    console.log(item,'data')
  };

  return (
    <>
      <Headersub/>
      <div className="blogs-con">
       <div className='side-head-blogs'>
       <h1>BLOGS</h1>
       </div>
       
        <p>
          Your ride's care, our expertise, both tailored true, Car services aplenty, all just for you!
        </p>
        <div className="blog-container">
          {currentBlogs.map((blog, index) => (
            <div key={index} className="blog-item" >
              <img src={blog.img} alt={`Blog ${index + 1}`} onClick={() => handleProduct(blog)}/>
              <div className='relative-content'>
                <h2>{blog.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Next and Previous Buttons */}
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
          <ArrowBackIosNewTwoToneIcon />
          </button>
          <button onClick={nextPage} disabled={indexOfLastBlog >= Blogdata.length}>
          <ArrowForwardIosTwoToneIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
