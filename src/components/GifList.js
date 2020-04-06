import React from 'react'

const GifList = props => {
    // console.log("Props for GifList",props.urls)

    return (
        <ul>
            {props.urls.map( (url, i) => { 
                return <li key={i}> <img src={`${url}`} alt=""/></li> 
                }).slice(0, 3)
                }
        </ul>
    )
}

export default GifList;