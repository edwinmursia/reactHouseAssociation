import React from 'react'
import Data from '../data/taloyhtio.json'
import Asunto from './Asunto.js'

const Taloyhtio = ({ hintaYhtiossa }) => {
 
console.log('maalinhinta', hintaYhtiossa);
console.log('data jaasoni', Data);

return (
    <div>
        <h2>Taloyhtiö</h2>
        <p>Yhtiön nimi: {Data.nimi}</p>
        <p>Puhelin: {Data.puhnro}</p>
        <p>@-mail: {Data.sahkopostiosoite}</p>
        <p>Taloyhtiön pinta-ala: {Data.taloYhtionPintaAla}</p>
        <p>Tyyppi: {Data.tyyppi}</p>
        <p><b>Taloyhtiön maalaus maksaa yhteensä: {Data.taloYhtionPintaAla * hintaYhtiossa}</b></p>
        <p>Asunnot:</p>
        <br/>

        {Data.asunnot.map((asunto, i) =>
            <Asunto
                key={i}
                asunnonNumero={asunto.asunnonNumero}
                rappu={asunto.rappu}
                pintojenPintaAla={asunto.pintojenPintaAla}
                huoneet={asunto.huoneet}
                maalinHinta={hintaYhtiossa}
            />
        )}
 
    </div>
)
}
  
export default Taloyhtio