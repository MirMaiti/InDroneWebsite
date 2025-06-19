import React from 'react';
import './App.css';

// Import your images from the src/assets/images folder
import IndroneImg from './assets/images/Indrone_img.png';
import constrWorker from './assets/images/constr_worker.jpg';
import droneTunnel from './assets/images/drone_tunnel.png';
import dronesFusion from './assets/images/drones_fusion.png';
import map4i from './assets/images/4i_map.png';

const slides = [
  {
    title: "InNdrone",
    content: null,
    image: IndroneImg,
    // Adjust the main banner image size here
    imageStyle: { width: '30%', height: 'auto', maxHeight: '400px' } 
  },
  {
    title: "Why do we need InNdrone?",
    content: [
      { 
        img: constrWorker, 
        text: "Cracks in critical infrastructure often go unnoticed, leading to potential hazards and costly repairs.",
        // Adjust individual image sizes here
        imageStyle: { width: '300px', height: '200px' } 
      },
      { 
        img: droneTunnel, 
        text: "Drones can access and analyze hard-to-reach or dangerous areas with unparalleled ease.",
        imageStyle: { width: '300px', height: '200px' } 
      },
      { 
        img: dronesFusion, 
        text: "Integrating SLAM, AI, and edge computing sets a new standard for precision in infrastructure monitoring.",
        imageStyle: { width: '500px', height: '200px' } 
      },
    ],
    footer: "Revolutionizing Inspection and Mapping with Autonomous Drones"
  },
  {
    title: "Obstacle Avoidance",
    content: [
      { bold: "Real-Time Sensing:", text: "This technology utilizes sensors like LiDAR, ultrasonic, cameras (stereo or depth), and infrared to detect obstacles." },
      { bold: "Path Planning:", text: "Dynamically calculates the safest and most efficient route to avoid collisions." },
      { bold: "Failsafe Mechanisms:", text: "Emergency stop or return-to-home features ensure operational safety." },
    ],
    image: dronesFusion,
    imageStyle: { width: '60%', height: 'auto' } // Example size
  },
  {
    title: "SLAM based navigation",
    content: [
      { bullet: "Simultaneous Localization and Mapping (SLAM): This technology enables the drone to build a map of an unknown environment while tracking its own position within it." },
      { bullet: "Mapping: Creates a 2D/3D representation of the surroundings." },
      { bullet: "Localization: Determines the drone’s position in real time." },
    ],
    image: map4i,
    imageStyle: { width: '70%', height: 'auto' } // Example size
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>InNdrone</h1>
      </header>
      <main>
        {slides.map((slide, index) => (
          <section key={index} className="slide">
            <h2>{slide.title}</h2>
            {slide.content && Array.isArray(slide.content) && (
              <div className="content">
                {slide.content.map((item, idx) => (
                  <div key={idx} className="content-item">
                    {/* Apply the imageStyle object from the data */}
                    {item.img && <img src={item.img} alt={`slide visual ${idx}`} style={item.imageStyle} />}
                    {item.text && <p>{item.text}</p>}
                    {item.bold && <p><strong>{item.bold}</strong> {item.text}</p>}
                    {item.bullet && <li>{item.bullet}</li>}
                  </div>
                ))}
              </div>
            )}
            {/* Apply the imageStyle for main section images */}
            {slide.image && !slide.content && <img src={slide.image} alt={slide.title} style={slide.imageStyle} />}
            {slide.footer && <footer><strong>{slide.footer}</strong></footer>}
          </section>
        ))}
      </main>
      <footer className="App-footer">
        <p>© 2025 InNdrone. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
