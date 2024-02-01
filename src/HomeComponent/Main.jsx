import React, { useState, useEffect } from 'react';
import imgg1 from './images/imgg1.jpg';
import imgg2 from './images/imgg2.jpg';
import imgg3 from './images/imgg3.jpg';
import imgg4 from './images/imgg4.png';

const Main = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const imageUrls = [
    { localImage: imgg1 },
    { localImage: imgg2 },
    { localImage: imgg3 },
    { localImage: imgg4 },
    
  ];

  useEffect(() => {
    // Change the image every 5 seconds (5000 milliseconds)
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [imageUrls.length]);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '20px', }}>
        {/* Text on the Left */}
        

        <div style={{ flex: '1', marginRight: '190px' ,marginLeft: '50px'}}>
        <h1 style={{marginBottom: '30px'}}>Welcome to the Algorithm Visualizer App</h1>
        <p>
          Explore the world of algorithms and visualize their behavior. 
          Gain insights into the fascinating world of problem-solving with 
          this interactive algorithm visualizer.
        </p>
        <p>
          Get started by selecting an algorithm and tweaking its parameters to see 
          how it performs in real-time. Whether you are a beginner or an experienced 
          developer, this tool is perfect for learning and experimenting with algorithms.
        </p>
      </div>

        {/* Image on the Right */}
        <div style={{ flex: '1' }}>
          {typeof imageUrls[imageIndex] === 'string' ? (
            <img
            
              src={imageUrls[imageIndex]}
              alt={`Algorithm Visualizer Image ${imageIndex + 1}`}
              style={{ width: '70%', height: '400px', borderRadius: '8px'}}
            />
          ) : (
            <img
              src={imageUrls[imageIndex].localImage}
              alt={`Algorithm Visualizer Image ${imageIndex + 1}`}
              style={{ width: '70%', height: '400px', borderRadius: '8px' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
