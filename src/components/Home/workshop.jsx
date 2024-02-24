import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import workshop1 from '../../assets/Images/car-work-1.jpg'
import workshop2 from '../../assets/Images/car-work-2.jpg'
import workshop3 from '../../assets/Images/car-work-3.jpg'
import workshop4 from '../../assets/Images/car-work-4.jpg'
import workshop5 from '../../assets/Images/car-work-5.jpg'
import workshop6 from '../../assets/Images/car-work-6.jpg'
import workshop7 from '../../assets/Images/car-work-7.jpg'

const itemData = [
    {
      img: workshop1,
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: workshop2,
      title: 'workshop2',
    },
    {
      img: workshop3,
      title: 'workshop3',
    },
    {
      img : workshop4,
      title: 'workshop4',
      cols: 2,
    },
    {
      img : workshop5,
      title: 'workshop5',
      cols: 2,
    },
    {
      img : workshop6,
      title: 'workshop6',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img : workshop7,
      title: 'Basketball',
    },
    {
      img : workshop3,
      title: 'Fern',
    },
    {
      img : workshop4,
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img : workshop5,
      title: 'Tomato basil',
    },
    {
      img : workshop6,
      title: 'Sea star',
    },
    {
      img : workshop7,
      title: 'Bike',
      cols: 2,
    },
  ];

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
  }

export default function Workshop() {
  return (
    <ImageList
      sx={{ width: '100%', height: '100%' }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

