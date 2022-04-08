import { useState } from 'react';
import Button from '@material-ui/core/Button';

const ItemCount = ()=> {
    const [counter, setCounter] = useState(1);
    const Contadorarriba = () => {
        if (counter <= 4) {
          setCounter(counter+1);
        }    
    };
    const Contadorabajo = () => {
        if (counter >= 2) {
          setCounter(counter-1);
        }     
    };
  
    return(
      <div className='izquierda'>
                  <button className="btn btn-secondary btn-lg"><h3>Items: {counter}</h3></button>
                  <br />
                  <br />
                  <br />
                  <div>
                      <Button onClick={Contadorarriba} color="primary" variant="contained">+</Button>
                      <Button onClick={Contadorabajo} color="secondary" variant="outlined">-</Button>
                  </div>
              </div>
    );
  };
  
  export default ItemCount;
