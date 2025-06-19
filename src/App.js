import React from 'react';
import './App.css';

const slides = [
  {
    title: "InNdrone",
    content: null,
    image: "https://i.imgur.com/6X9QZ9M.png", // Replace with your drone image URL
  },
  {
    title: "Why do we need InNdrone?",
    content: [
      { img: "https://i.imgur.com/1.jpg", text: "Cracks in critical infrastructure often go unnoticed, leading to potential hazards and costly repairs." },
      { img: "https://i.imgur.com/2.jpg", text: "Drones can access and analyze hard-to-reach or dangerous areas with unparalleled ease." },
      { img: "https://i.imgur.com/3.jpg", text: "Integrating SLAM, AI, and edge computing sets a new standard for precision in infrastructure monitoring." },
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
    image: "https://i.imgur.com/obstacle_avoidance.png"
  },
  {
    title: "SLAM based navigation",
    content: [
      { bullet: "Simultaneous Localization and Mapping (SLAM): This technology enables the drone to build a map of an unknown environment while tracking its own position within it." },
      { bullet: "Mapping: Creates a 2D/3D representation of the surroundings." },
      { bullet: "Localization: Determines the drone’s position in real time." },
    ],
    image: "https://i.imgur.com/slam_navigation.png"
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
                    {item.img && <img src={item.img} alt="slide visual" />}
                    {item.text && <p>{item.text}</p>}
                    {item.bold && <p><strong>{item.bold}</strong> {item.text}</p>}
                    {item.bullet && <li>{item.bullet}</li>}
                  </div>
                ))}
              </div>
            )}
            {slide.image && !slide.content && <img src={slide.image} alt={slide.title} />}
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
