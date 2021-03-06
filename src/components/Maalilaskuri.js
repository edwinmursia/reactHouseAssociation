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
        const maalausKerrat = syötetytTiedot.paintingTimes;  // tästä otettu "tai 1" pois  Anna
        // const maalinRiittoisuus = syötetytTiedot.paintVolume || 0;
 
        return litraHinta * maalausKerrat;
    }
 
    return (
        <div style={{textAlign: "center"}}>
            <h1>Maalilaskuri</h1>
 
            <h3 style={{padding: "0 0 20px 0"}}>Sovellus tulostaa maalitarpeen litroina ja tämän litramäärän hinnan euroina koko taloyhtiölle, kullekkin asunnolle ja asuntojen eri tiloille.</h3>
            
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
                <div className="loading"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
            }
            {maalinHinta && 
                <h3><Taloyhtio
                 hintaYhtiossa={maalinHinta}
                 maalitiedot={maalitiedot}
                 /> </h3>
            }
        </div>
    )
}
 
export default Maalilaskuri