import React from 'react'
import '../Styles.css'
import {Carousel} from 'react-bootstrap'
const Home = () => {
  return (
    <div className=''>

      <div className='back vh '>    
        <br></br>
        <div className='d-flex justify-content-center '>
          <Carousel className='caros'>
            <Carousel.Item className='car1 text-center'>
              <h3>"I have Got 32LPA thanks to the Java course"</h3>
              <p>--Ramesh B--</p>
              <br></br><br></br>
            </Carousel.Item>
            <Carousel.Item className='car2 text-center'>
              <h3>"I have aced my exams!"</h3>
              <p>--Bill Sharma--</p>
              <br></br><br></br>
            </Carousel.Item>
            <Carousel.Item className='car3 text-center'>
              <h3>"Learning has become addicting!"</h3>
              <p>--Chethan M P--</p>
              <br></br><br></br>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='row container-fluid'>
          <div className='container-fluid col-6'>
            <div className='justify-content-center px-5 pb-5'>
              <form className='justify-content-center form'>
                <h2 className='maintext'> Login </h2><br></br>
                <div>
                  <label htmlFor='email' className='labels'><h5>Email: </h5></label>
                  <input type='email' placeholder='Enter Your Email Address' className='form-control inputmade' name='Email' />
                </div><br></br>
                <div>
                  <label htmlFor='password' className='labels'><h5>Password: </h5></label>
                  <input type='password' placeholder='Enter Password' className='form-control inputmade' name='Password'></input>
                </div><br></br>
                <div>
                  <label htmlFor='checkbox' className='labels'> Remember Me:&ensp;</label>
                  <input type='checkbox' className='custom-control custom-checkbox'></input>
                </div><br></br>
                <div className='d-grid px-3'>
                  <button className='btn btn-success' type='submit'>Login</button>
                </div>
              </form><br></br>
            </div>
          </div>
          <div className='container-fluid col-6 px-5 pt-5'>
            <h2 className='intro1'>Welcome to, Learniverse!</h2><br></br>
            <h3 className='intro2'>Your Education Universe... to greater heights!</h3><br></br>
            <br></br>
            <div className='row'>
              <div className='col-4'>
                <h3 className='ranks'>Play Store</h3>
              </div>
              <div className='col-4'>
                <h3 className='ranks'>App Store</h3>
              </div>
              <div className='col-4'>
                <h3 className='ranks'>Forbes</h3>
              </div>
            </div><br></br>
            <div className='row'>
              <div className='col-4'>
                <h4 className='meter'>4.2 ⭐️</h4>
              </div>
              <div className='col-4'>
                <h4 className='meter'>4.9 ⭐️</h4>
              </div>
              <div className='col-4'>
                <h4 className='meter'>127 ↑ </h4>
              </div>
            </div><br></br>
          </div>
        </div>
        <footer>
        <h3 className='text-center text-secondary bg-dark foot'>https://github.com/CheetahCodes21</h3>
        </footer>
      </div>
    </div>
  );
  
}

export default Home