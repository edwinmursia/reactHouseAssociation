import React from 'react'
import './muotoilut.css'

const App = () => {

return (
    <div>
        <h1>Otsikko tulee tähän!</h1>

        <p>Sovellus tulostaa maalitarpeen litroina ja tämän litramäärän hinnan euroina koko taloyhtiölle, kullekkin asunnolle ja asuntojen eri tiloille.</p>
        <p> </p>
        <h2>Käytä maalilaskuria:</h2>

        <div id="paintForm">
            <form>
                <label htmlFor="paintName">Maalin nimi:</label> <br/>
                <input type="text" id="paintName" name="paintName"/> <br/> <br/>

                <label htmlFor="paintPrice">Maalin hinta (€/l):</label> <br/>
                <input type="text" id="paintPrice" name="paintPrice"/> <br/> <br/>

                <label htmlFor="paintVolume">Maalin riittoisuus (m<sup>2</sup>/l):</label> <br/>
                <input type="text" id="paintVolume" name="paintVolume"/> <br/> <br/>

                <label htmlFor="paintingTimes">Maalauskertojen määrä:</label> <br/>
                <input type="text" id="paintingTimes" name="paintingTimes"/> <br/> <br/>

                <input type="submit" name="getInfo" value="Lähetä tiedot" />
            </form>
        </div>
    </div>
  )
}
  
export default App
