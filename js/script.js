import React, { useState } from 'react';

function Page1() {
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleClick = () => {
    setIsFadingOut(true); // Start the fade-out animation

    setTimeout(() => {
      window.location.href = 'page2.html'; // Navigate to page 2 after the animation is complete
    }, 1000); // Adjust the delay to match the transition duration
  };

  return (
    <div className={`page ${isFadingOut ? 'fade-out' : ''}`}>
      <button onClick={handleClick}>Go to Page 2</button>
    </div>
  );
}

export default Page1;
