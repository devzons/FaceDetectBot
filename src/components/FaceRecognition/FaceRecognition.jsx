import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center'>
      <div className='absolute mt2'>
        <img
          id='inputimage'
          src={imageUrl}
          alt='face'
          width='500px'
          height='auto'
        />
        {box.map(boxitem => {
          return (
            <div
              className='bounding-box'
              style={{
                top: boxitem.topRow,
                right: boxitem.rightCol,
                bottom: boxitem.bottomRow,
                left: boxitem.leftCol
              }}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default FaceRecognition
