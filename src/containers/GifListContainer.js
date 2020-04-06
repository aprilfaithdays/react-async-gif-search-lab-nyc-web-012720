import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    componentDidMount() {
        this.handleFetch()
    }


    handleFetch = (searchQuery = "hmm")=> {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=GAOH41R1PImCCVQ6dCiGCO6iW8T3KjC0`)
        .then(res => res.json())
        .then(gifsData => this.gifUrlLinks(gifsData))
    }

    gifUrlLinks = gifsData => {
    //   console.log( gifsData)
        let gifsUrls = gifsData.data.map( gif => {
            return gif.images.original.url
        })
        this.setState({ gifs: gifsUrls})
    }

    render () {
        // console.log( this.state)
        return (
            <div>
                <GifSearch handleFetch={this.handleFetch}/>
                <GifList urls={this.state.gifs}/>
            </div>
        )
    }
}