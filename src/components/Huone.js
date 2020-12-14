import React from 'react'

const Huone = ({ kuvaus, seinienPintaAla, maalinRiittoisuus, maalinHinta }) => {

return (
    <div>
        <br></br><h2>{kuvaus}</h2>
        <p>Seinien pinta-ala: {seinienPintaAla}</p>
        <p><b>Huoneen maalaamiseen menee: {maalinRiittoisuus * seinienPintaAla} litraa maalia</b></p>
        <p style={{color: "#104b8f"}}><b>Huoneen maalaaminen maksaa: {maalinHinta * seinienPintaAla} €</b></p>
    </div>
)
}
  
export default Huone