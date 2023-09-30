import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './cards'
function App() {
  return (
    <div>
      <header>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/galaxy.jpg)`, height: 300 , backgroundSize: 'cover',backgroundPosition: 'center'}}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Planetary Tourism</h1>
              <h4 className='mb-3'>To Infinity and Beyond!</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <div className="container">
    <h1 className='pt-3 pb-3'>Browse the planet you wish to visit</h1>
      <div className='pt-3 pb-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Cards 
          image = "./images/Moon.jpg"
          title="Moon"
          description="Go to Moon"
        />
        <Cards 
          image = "./images/venus.jpg"
          title="Venus"
          description="Go to Venus"
        />
        <Cards 
          image = "./images/jupiter.jpg"
          title="Jupiter"
          description="Go to Jupiter  "
        />
        <Cards 
          image = "./images/mars.jpg"
          title="Mars"
          description="Go to Mars"
        />
      </div>
      <div className='pt-3 pb-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Cards 
          image = "./images/neputune.jpg"
          title="Neputune"
          description="Go to Neputune"
        />
        <Cards 
          image = "./images/uranus.jpg"
          title="Uranus"
          description="Go to Uranus"
        />
        <Cards 
          image = "./images/saturn.jpg"
          title="Saturn"
          description="Go to Saturn"
        />
        <Cards 
          image = "./images/mars.jpg"
          title="Mars"
          description="Go to Mars"
        />
      </div>
    </div>
    
    </div>
  );
}

export default App;
