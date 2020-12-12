import React from 'react'

const Asunto = ({ asunnonNumero, rappu, pintojenPintaAla, huoneet, maalinHinta }) => {

return (
    <div>
        <h2>Asunto {asunnonNumero}</h2>
        <p>Rappu: {rappu}</p>
        <p>Pintojen pinta-ala: {pintojenPintaAla}</p>
        <p><b>Asunnon maalaaminen maksaa: {maalinHinta * pintojenPintaAla} € </b></p>
        <p>Huoneet: TO DO </p> 
    </div>
)
}
  
export default Asunto