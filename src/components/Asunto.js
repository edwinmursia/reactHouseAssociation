import React from 'react'

const Asunto = ({ asunnonNumero, rappu, pintojenPintaAla, huoneet, maalinHinta }) => {

return (
    <div>
        <h2>Asunto {asunnonNumero}</h2>
        <p>Rappu: {rappu}</p>
        <p>Pintojen pinta-ala: {pintojenPintaAla}</p>
        <p><b>Asunnon maalaaminen maksaa: {maalinHinta * pintojenPintaAla} € </b></p>
        <p>Huoneet:
            <ul className="huoneet">
                {huoneet.map((huoneet, i) =>
                    <ol key={i}>{huoneet.kuvaus}, {huoneet.seinienPintaAla * maalinHinta} €</ol>
                    
                )}
                </ul></p> 
    </div>
)
}
  
export default Asunto