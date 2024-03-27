import React from 'react'



const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Images = ({ images } : {images: string[]}) => {

  const randomImages = [
    "/randomImages/random1.jpg",
    "/randomImages/random2.jpg",
    "/randomImages/random3.jpg",
    "/randomImages/random4.jpg",
    "/randomImages/random5.jpg",
  ];

  shuffleArray(randomImages);
  const getRandomImage = (index: number) => {

  }
  return (
    <div className="p-5">
      {
        images && <>
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-12 "></div>
          </div>
        </>
      }
    </div>
  )
}

export default Images
