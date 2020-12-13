import React from 'react'
import Huone from './Huone.js'
const Asunto = ({ asunnonNumero, rappu, pintojenPintaAla, huoneet, maalinHinta, maalinRiittoisuus }) => {

return (
    <div>
        <h2>Asunto {asunnonNumero}</h2>
        <p>Rappu: {rappu}</p>
        <p>Pintojen pinta-ala: {pintojenPintaAla}</p>
        <p><b>Asunnon maalaamiseen menee: {maalinRiittoisuus * pintojenPintaAla} litraa maalia</b></p>
        <p><b>Asunnon maalaaminen maksaa: {maalinHinta * pintojenPintaAla} € </b></p>
        <p>Huoneet: </p><br></br>
        {huoneet.map((huone, i) =>
            <Huone
                key={i}
                kuvaus={huone.kuvaus}
                seinienPintaAla={huone.seinienPintaAla}
                maalinHinta={maalinHinta}
                maalinRiittoisuus={maalinRiittoisuus}
            />
        )}
    </div>
)
}
  
export default Asunto