import React from 'react'
import Data from '../data/taloyhtio.json'
import Asunto from './Asunto.js'
 
const Taloyhtio = ({ hintaYhtiossa, maalitiedot }) => {
 
console.log('maalinhinta', hintaYhtiossa);
console.log('data jaasoni', Data);
 
return (
    <div>
        <div id="box">
        <h2>Taloyhtiö</h2>
        <p>Yhtiön nimi: {Data.nimi}</p>
        <p>Puhelin: {Data.puhnro}</p>
        <p>@-mail: {Data.sahkopostiosoite}</p>
        <p>Taloyhtiön pinta-ala: {Data.taloYhtionPintaAla}</p>
        <p>Tyyppi: {Data.tyyppi}</p>
        <p>Maalin tarve yhteensä: {Data.taloYhtionPintaAla / maalitiedot.paintVolume * maalitiedot.paintingTimes} litraa</p>
        <p style={{color: "#104b8f"}}><b>Taloyhtiön maalaus maksaa yhteensä: {Data.taloYhtionPintaAla / maalitiedot.paintVolume * maalitiedot.paintPrice * maalitiedot.paintingTimes} €</b></p>
        <br/></div>
 
        {Data.asunnot.map((asunto, i) =>
            <Asunto
                key={i}
                asunnonNumero={asunto.asunnonNumero}
                rappu={asunto.rappu}
                pintojenPintaAla={asunto.pintojenPintaAla}
                huoneet={asunto.huoneet}
                maalinHinta={hintaYhtiossa}
                maalinRiittoisuus={maalitiedot.paintVolume}
                maalausKerrat={maalitiedot.paintingTimes}
            />
        )}
 
    </div>
)
}
 
export default Taloyhtio