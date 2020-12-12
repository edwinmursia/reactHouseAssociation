import React from 'react'
import Data from '../data/taloyhtio.json'
 
const Taloyhtio = ({ hintaYhtiossa }) => {
 
console.log('maalinhinta', hintaYhtiossa);
console.log('data jaasoni', Data);

return (
    <div> 
        hej
        <h3> 
            maalinhinta{hintaYhtiossa} €
        </h3>
    </div>
)
}
  
export default Taloyhtio