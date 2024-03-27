import React from 'react'



const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Image = ({ images } ) => {

  const randomImages = [
    "/randomImages/random1.jpg",
    "/randomImages/random2.jpg",
    "/randomImages/random3.jpg",
    "/randomImages/random4.jpg",
    "/randomImages/random5.jpg",
  ];
  return (
    <div>
      Images
    </div>
  )
}

export default Image
