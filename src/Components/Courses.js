import React from 'react'
import '../Styles.css'

const Courses = () => {
  return (
    <div className='bg-dark vh'>
      <br></br>
      <h2 className='px-4 jamaica'>Courses we offer...for "Skill Development"</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
        <div className="col">
          <div className="card">
            <img src="https://contentstatic.techgig.com/photo/90325682.cms" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">C</h5>
              <p className="card-text">
              C is a general-purpose programming language that is well-known for its efficiency and low-level hardware control. Dennis Ritchie created it in the early 1970s, and it is widely used for system programming and application development in a variety of specialties.</p>
            </div>
          </div>
        </div>
  
        <div className="col">
          <div className="card">
            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230703144619/CPP-Language.png" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">C++</h5>
              <p className="card-text">C++ is a sophisticated and adaptable programming language that combines high-level and low-level capabilities. It is commonly used to create efficient software applications such as system software, games, and embedded devices.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://contentstatic.techgig.com/photo/93000110/What-makes-Java-still-popular-among-developers.jpg" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Java</h5>
              <p className="card-text">Java is a popular programming language recognised for its object-oriented approach and platform independence. Java is popular for constructing scalable and secure applications across a wide range of fields due to its robust libraries and significant community support.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://ciracollege.com/wp-content/uploads/2020/11/How-to-Learn-Python.jpg" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Python</h5>
              <p className="card-text">Python is a robust and adaptable programming language that is well-known for its ease of use and readability, making it a good choice for both novice and expert developers. Python's numerous libraries and frameworks enable developers to create a wide range of applications.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://global-uploads.webflow.com/618fa90c201104b94458e1fb/62f25059bc47b274d9fe73c3_Top-10-best-VSCode-extensions-for-React-js_MAin-Image.jpg" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">React JS</h5>
              <p className="card-text">React JS is a popular JavaScript library for building user interfaces. It uses a component-based approach, allowing developers to create reusable UI elements that efficiently update and render only the necessary parts of the application, resulting in fast and responsive web experiences.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://i.ytimg.com/vi/1Oh7PTpEkGg/maxresdefault.jpg" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Java Script</h5>
              <p className="card-text"></p>
              <p className="card-text">JavaScript is a powerful programming language that may be used to create interactive and dynamic online content. JavaScript, with its many libraries and frameworks, enables developers to create sophisticated apps that run flawlessly across several platforms.</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <h3 className='text-center text-secondary bg-dark foot'>https://github.com/CheetahCodes21</h3>
        </footer>
    </div>
  );  
}

export default Courses