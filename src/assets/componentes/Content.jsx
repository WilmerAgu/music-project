
const Content = () => {
    return(
        <div className="container__main">
            <aside className="aside__container">
                <h2>Historia</h2>
                <br />
                <p>
                    En 1968, en Birmingham, Inglaterra, aparece en escena 
                    el grupo que dio origen a este género musical. El grupo Black 
                    Sabbath surge con toda su irreverencia y empezó a distorsionar sus 
                    guitarras eléctricas comandado por la voz del inconfundible Ozzy Osbourne. <br /> <br />
                    Así mismo, grupos como Deep Purple y Led Zeppelin empezaron a introducirse 
                    en este género. <br /> <br />
                    Sin embargo, el heavy metal no surgió de la noche a la mañana. Sus orígenes se 
                    le atribuyen a una fusión entre el blues, el rock e incluso la música clásica. <br /><br />
                    El punto de partida fue cuando se empezaron a utilizar las guitarras distorsionadas en el 
                    rock y en el blues. Recurso que grupos bastante conocidos usaron, convirtiéndolos 
                    en precursores del género. Entre ellos podemos citar a The Beatles con Helter 
                    Skelter y a Pink Floyd con The Nile Song. <br /><br />
                    Los conciertos eran un verdadero espectáculo en los que se hacían representaciones, 
                    muchas veces chocantes, para el público de esta década. <br /><br />
                    Guitarras eléctricas, bajos, batería y voces fuertes forman parte de uno de los géneros musicales 
                    más potentes de la historia de la música. <br /><br />
                    Las bandas más representativas del género en la década de los 70's fueron Sir Lord Baltimore, 
                    Blue Öyster Cult, Aerosmith, Scorpions, AC/DC, Judas Priest, Nazareth, Kiss, Diamond 
                    Head y Iron Maiden.
                </p>
            </aside>
            <main>
                <section className="contenedor__bandas">
                    <h2>Grandes bandas del Metal</h2>
                    <br />
                    <ul>
                        <li>Black Sabbath</li>
                        <li>AC/DC</li>
                        <li>Metallica</li>
                        <li>Ozzy Osbourne</li>
                        <li>Disturbed</li>
                        <li>Rammstein</li>
                        <li>Def Leppard</li>
                        <li>Iron Maiden</li>
                        <li>Motorhead</li>
                        <li>Pantera</li>
                        <li>Megadeth</li>
                        <li>Judas Priest</li>
                        
                    </ul>
                </section>
                <section className="contenedor__imagenes">
                
                    <figure>
                            <img src="/public/img/paranoid.jpg" alt="paraniod" />
                            <h5>Black Sabbath, Paranoid (1970)</h5>
                    </figure>
                    <figure>
                        <img src="/public/img/Master_of_Puppets_cover.jpg" alt="master-of-puppets"/>
                        <h5>Metallica, Master of Puppets (1986)</h5>
                    </figure>
                    <figure>
                        <img src="/public/img/Judas_Priest_British_Steel.jpg" alt="british steel" />
                        <h5> Judas Priest, British Steel (1980)</h5>
                    </figure>
                    <figure>
                        <img src="/public/img/iron-maiden.jpeg" alt="the number of the beast" />
                        <h5> Iron Maiden, The Number of the Beast (1982)</h5>

                    </figure>
                    <figure>
                        <img src="/public/img/Black-Sabbath.jpg" alt="black sabbath" />
                        <h5>Black Sabbath, Black Sabbath (1970)</h5>

                    </figure>
                    <figure>
                        <img src="/public/img/slayer.jpg" alt="Reign in Blood" />
                        <h5> Slayer, Reign in Blood (1986)</h5>

                    </figure>
                </section>
            </main>
        </div>


    )
}

export default Content