import React from 'react'
import Huone from './Huone.js'
const Asunto = ({ asunnonNumero, rappu, pintojenPintaAla, huoneet, maalinHinta, maalinRiittoisuus }) => {

return (
    <div id="box">
        <h2>Asunto {asunnonNumero}</h2>
        <p>Rappu:  {rappu}</p>
        <p>Pintojen pinta-ala: {pintojenPintaAla}</p>
        <p><b>Asunnon maalaamiseen menee: {maalinRiittoisuus * pintojenPintaAla} litraa maalia</b></p>
        <p style={{color: "#104b8f"}}><b>Asunnon maalaaminen maksaa yhteensä: {maalinHinta * pintojenPintaAla} € </b></p>
        <br></br>
        {huoneet.map((huone, i) =>
            <Huone
                key={i}
                kuvaus={huone.kuvaus}
                seinienPintaAla={huone.seinienPintaAla}
                maalinHinta={maalinHinta}
                maalinRiittoisuus={maalinRiittoisuus}
            />
        )}<br></br>
    </div>
)
}
  
export default Asunto