// import React, { useState } from 'react';

// function ImagePopups() {
//   const [activeArea, setActiveArea] = useState(null); // Track active area

//   const areas = [
//     { // Define areas with coordinates and popup content
//       x: 100, // X coordinate of top left corner
//       y: 50,  // Y coordinate of top left corner
//       width: 200, // Width of the area
//       height: 100, // Height of the area
//       content: 'This is area 1 content',
//     },
//     {
//       x: 350,
//       y: 150,
//       width: 150,
//       height: 120,
//       content: 'This is area 2 content',
//     },
//   ];

//   const handleMouseEnter = (area) => {
//     setActiveArea(area);
//   };

//   const handleMouseLeave = () => {
//     setActiveArea(null);
//   };

//   return (
//     <div className="image-container">
//       <img
//         src="https://mtc.jharkhand.gov.in/Images/b3.jpg" // Replace with your image source
//         alt="Interactive Image"
//         useMap="#image-map" // Reference the image map
//         style={{height:"200px", width: "200px"}}
//       />
//       <map name="image-map">
//         {areas.map((area) => (
//           <rect // Define clickable areas
//             key={area.content}
//             x={area.x}
//             y={area.y}
//             width={area.width}
//             height={area.height}
//             onMouseEnter={() => handleMouseEnter(area)} // Call on hover
//             onMouseLeave={handleMouseLeave}
//           />
//         ))}
//       </map>
//       {activeArea && ( // Display popup if active area exists
//         <div className="popup">
//           <p>{activeArea.content}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ImagePopups;
