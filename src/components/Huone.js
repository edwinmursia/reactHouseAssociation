import React from 'react'

const Huone = ({ kuvaus, seinienPintaAla, maalinRiittoisuus, maalinHinta }) => {

return (
    <div>
        <h2>Huone: {kuvaus}</h2>
        <p>Seinien pinta-ala: {seinienPintaAla}</p>
        <p><b>Huoneen maalaamiseen menee: {maalinRiittoisuus * seinienPintaAla} litraa maalia</b></p>
        <p style={{color: "blue"}}><b>Huoneen maalaaminen maksaa: {maalinHinta * seinienPintaAla} €</b></p>
    </div>
)
}
  
export default Huone