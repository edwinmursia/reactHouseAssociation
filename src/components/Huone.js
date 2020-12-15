import React from 'react'

const Huone = ({ kuvaus, seinienPintaAla, maalinRiittoisuus, maalinHinta, maalausKerrat }) => {

return (
    <div>
        <br></br><h2>{kuvaus}</h2>
        <p>Seinien pinta-ala: {seinienPintaAla}</p>
        <p><b>Huoneen maalaamiseen menee: {seinienPintaAla / maalinRiittoisuus * maalausKerrat} litraa maalia</b></p>
        <p style={{color: "#104b8f"}}><b>Huoneen maalaaminen maksaa: {seinienPintaAla / maalinRiittoisuus * maalinHinta * maalausKerrat} €</b></p>
    </div>
)
}
  
export default Huone