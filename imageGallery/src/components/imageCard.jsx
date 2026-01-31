import React from 'react'

const ImageCard = ({image}) => {
  const tags = image.tags.split(',');
  const newTags = tags.splice(0, 5);

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg my-4 bg-gray-100'>
        <img src={image.webformatURL} className='w-full' />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">photo by {image.user}</div>
          <ul>
            <li>
              <strong>Likes:</strong> {image.likes}</li>
            <li><strong>Views:</strong> {image.views}</li>
            <li><strong>Comments:</strong> {image.comments}</li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {newTags.map((tag, index) => (
            <span key={index} className="inline-block bg-purple-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-purple-700 mr-2">
              #{tag}
            </span>
          ))}
        </div>
    </div>
  )
}

export default ImageCard;