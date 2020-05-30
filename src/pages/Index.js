import React, { useState, useEffect } from 'react'
import Cards from '../components/Cards'

const Index = () => {
    const fetch = require('node-fetch');
    const [pokemon , setPokemon  ] = useState({})
    const [next , setNext  ] = useState(null)
    const [previous , setPrevious ] = useState(null)

    const getAllPokemon  = async (url) => {
      const res = await fetch(url).catch(err => console.error(err))
      const json = await res.json()
      setPokemon(json.results)
      setNext(json.next)
      setPrevious(json.previous)
      console.log(json)
    }
    
    useEffect(() => {
      getAllPokemon('https://pokeapi.co/api/v2/pokemon?limit=8')
      // eslint-disable-next-line
    }, []);

  return (
    <div className="uk-container">
      <h2>PokeApi</h2>
      <div className="uk-grid uk-grid-medium uk-flex uk-flex-center">
         { 
          pokemon && <Cards data={pokemon} />
          //pokemon && Object.keys(pokemon).map(key => <li key={key}>{pokemon[key].name} </li> )
         }
      </div>
      <div className="uk-flex uk-flex-center">
          <button className="uk-button uk-button-default uk-margin-medium-right" disabled={previous ? '' : 'disabled'} onClick={()=> getAllPokemon(previous)} ><span uk-icon="chevron-double-left"></span></button>
          <button className="uk-button uk-button-default uk-margin-medium-left" disabled={next ? '' : 'disabled'} onClick={()=> getAllPokemon(next)}><span uk-icon="chevron-double-right"></span></button>
      </div>
    </div>
  )
}

export default Index
