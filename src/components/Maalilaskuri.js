import React, { useState } from 'react'
import Taloyhtio from './Taloyhtio.js'
import './Maalilaskuri.css'
 
const Maalilaskuri = () => {
    const [submitting, setSubmitting] = useState(false);
    const [maalitiedot, setMaalitiedot] = useState({});
    const [maalinHinta, setMaalinHinta] = useState(null);
 
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        setMaalinHinta(null);
 
        setTimeout(() => {
            setSubmitting(false);
            setMaalinHinta(laskeMaalinHinta(maalitiedot));
        }, 2000)
        console.log('maalitiedot handleSubmit', maalitiedot);
        console.log('maalinHinta', laskeMaalinHinta(maalitiedot));
    }
 
    const handleMaalitiedotChange = (event) => {
        const fieldValue = event.target.value;
        const fieldName = event.target.name;
        setMaalitiedot({ ...maalitiedot, [fieldName]: fieldValue });
    }
 
    const laskeMaalinHinta = (syötetytTiedot) => {
        const litraHinta = syötetytTiedot.paintPrice || 0;
        const maalausKerrat = syötetytTiedot.paintTimes || 1;
        const maalinRiittoisuus = syötetytTiedot.paintVolume || 0;
 
        return (litraHinta + maalinRiittoisuus) * maalausKerrat;
    }
 
    return (
        <div>
            <h1>Maalilaskuri</h1>
 
            <p>Sovellus tulostaa maalitarpeen litroina ja tämän litramäärän hinnan euroina koko taloyhtiölle, kullekkin asunnolle ja asuntojen eri tiloille.</p>
            <p> </p>
            <h2>Käytä maalilaskuria:</h2>
 
            <div id="paintForm">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="paintName">Maalin nimi:</label> <br />
                    <input type="text" id="paintName" name="paintName" onChange={handleMaalitiedotChange} /> <br /> <br />
 
                    <label htmlFor="paintPrice">Maalin hinta (€/l):</label> <br />
                    <input type="text" id="paintPrice" name="paintPrice" onChange={handleMaalitiedotChange} /> <br /> <br />
 
                    <label htmlFor="paintVolume">Maalin riittoisuus (m<sup>2</sup>/l):</label> <br />
                    <input type="text" id="paintVolume" name="paintVolume" onChange={handleMaalitiedotChange} /> <br /> <br />
 
                    <label htmlFor="paintingTimes">Maalauskertojen määrä:</label> <br />
                    <input type="text" id="paintingTimes" name="paintingTimes" onChange={handleMaalitiedotChange} /> <br /> <br />
 
                    <button type="submit">Lähetä tiedot</button>
                </form>
            </div>
            {submitting &&
                <div><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
            }
            {maalinHinta && 
                <h2>Taloyhtiö: <Taloyhtio
                 hintaYhtiossa={maalinHinta}
                 maalitiedot={maalitiedot}
                 /> </h2>
            }
        </div>
    )
}
 
export default Maalilaskuri