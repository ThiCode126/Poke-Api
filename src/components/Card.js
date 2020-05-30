import React, { useState, useEffect } from 'react'

const Card = ({ url }) => {
    //console.log(url)
    const defaultPokemon = {
        name:"",
        "height": 0,
        "sprites": {
            "front_default": "https://picsum.photos/200"
          },
          "weight": 0
    }

    const fetch = require('node-fetch');
    const [pokemonInfo , setPokemonInfo  ] = useState(defaultPokemon)


    useEffect(() => {
      // Fonction d'appel à l'API 
      const getPokemon  = async () => {
        setPokemonInfo(defaultPokemon)
        const res = await fetch(`${url}`).catch(err => console.error(err))
        const json = await res.json()
        setPokemonInfo(json)
      }
      getPokemon()
      // eslint-disable-next-line
    }, [url]);

   return (
        <div className="uk-width-medium  uk-text-center card">
            <div className="uk-card uk-card-default uk-card-hover uk-card-small">
                <div className="uk-card-header">
                    <h4 className="uk-card-title">{ pokemonInfo.name }</h4>
                </div>
                <div className="uk-card-body">
                    <img src={ pokemonInfo.sprites.front_default } alt="Pokemon" />
                </div>
                <div className="uk-card-footer">
                <span className="uk-text-italic uk-text-meta">
                    Height : { pokemonInfo.height } || Weight : { pokemonInfo.weight }
                </span>
                </div>
            </div>
        </div>
    )
}

export default Card