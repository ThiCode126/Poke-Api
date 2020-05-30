import React from 'react'
import Card from '../components/Card'

const Cards = ({data}) => {

    return (
        <>
            { 
                Object.keys(data).map(key => <Card key={key} url={data[key].url} />) 
                //Object.keys(data).map(key => <li key={key}>{data[key].name}</li>) 
            }
        </>
    )
}

export default Cards