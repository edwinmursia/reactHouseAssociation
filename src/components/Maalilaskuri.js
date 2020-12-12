import React, { useState } from 'react'
import './Maalilaskuri.css'

const Maalilaskuri = () => {
    const [submitting, setSubmitting] = useState(false);
    const [maalitiedot, setMaalitiedot] = useState({});

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
        console.log('maalitiedot handleSubmit', maalitiedot);
    }

    const handleMaalitiedotChange = (event) => {
        const fieldValue = event.target.value;
        const fieldName = event.target.name;
        console.log('fieldValue', fieldValue);
        console.log('fieldName', fieldName);
        setMaalitiedot({...maalitiedot, [fieldName]: fieldValue});
    }


return (
    <div>
        <h1>Otsikko tulee tähän!</h1>

        <p>Sovellus tulostaa maalitarpeen litroina ja tämän litramäärän hinnan euroina koko taloyhtiölle, kullekkin asunnolle ja asuntojen eri tiloille.</p>
        <p> </p>
        <h2>Käytä maalilaskuria:</h2>

        <div id="paintForm">
            {submitting &&
            <div>Lähetetään tietoja...</div>
            }
            <form onSubmit={handleSubmit}>
                <label htmlFor="paintName">Maalin nimi:</label> <br/>
                <input type="text" id="paintName" name="paintName" onChange={handleMaalitiedotChange}/> <br/> <br/>

                <label htmlFor="paintPrice">Maalin hinta (€/l):</label> <br/>
                <input type="text" id="paintPrice" name="paintPrice" onChange={handleMaalitiedotChange}/> <br/> <br/>

                <label htmlFor="paintVolume">Maalin riittoisuus (m<sup>2</sup>/l):</label> <br/>
                <input type="text" id="paintVolume" name="paintVolume" onChange={handleMaalitiedotChange}/> <br/> <br/>

                <label htmlFor="paintingTimes">Maalauskertojen määrä:</label> <br/>
                <input type="text" id="paintingTimes" name="paintingTimes" onChange={handleMaalitiedotChange}/> <br/> <br/>

                <button type="submit">Lähetä tiedot</button>
            </form>
        </div>
    </div>
  )
}
  
export default Maalilaskuri