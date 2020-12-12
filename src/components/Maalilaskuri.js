import React, { useState } from 'react'
import './Maalilaskuri.css'

const Maalilaskuri = () => {
    const handleSubmit = event => {
        event.preventDefault();
        alert('Tiedot lähetetty')
    }

return (
    <div>
        <h1>Otsikko tulee tähän!</h1>

        <p>Sovellus tulostaa maalitarpeen litroina ja tämän litramäärän hinnan euroina koko taloyhtiölle, kullekkin asunnolle ja asuntojen eri tiloille.</p>
        <p> </p>
        <h2>Käytä maalilaskuria:</h2>

        <div id="paintForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="paintName">Maalin nimi:</label> <br/>
                <input type="text" id="paintName" name="paintName"/> <br/> <br/>

                <label htmlFor="paintPrice">Maalin hinta (€/l):</label> <br/>
                <input type="text" id="paintPrice" name="paintPrice"/> <br/> <br/>

                <label htmlFor="paintVolume">Maalin riittoisuus (m<sup>2</sup>/l):</label> <br/>
                <input type="text" id="paintVolume" name="paintVolume"/> <br/> <br/>

                <label htmlFor="paintingTimes">Maalauskertojen määrä:</label> <br/>
                <input type="text" id="paintingTimes" name="paintingTimes"/> <br/> <br/>

                <button type="submit">Lähetä tiedot</button>
            </form>
        </div>
    </div>
  )
}
  
export default Maalilaskuri


