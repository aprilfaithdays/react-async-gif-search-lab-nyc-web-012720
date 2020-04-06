import React from 'react'

class GifSearch extends React.Component {

    state ={
        searchQuery: ""
    }

    handleChange = event => {
        // console.log(event.target.value)
        this.setState({searchQuery: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleFetch(this.state.searchQuery)
        // event.target.reset()   // this worked for me....
        this.setState({searchQuery: ""})   //===> this didn't work for me
    }
    
    render() {
        // console.log('GifSearch Props: ', this.props)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchQuery} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }   
}

export default GifSearch;