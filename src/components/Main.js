import React from 'react'
import data from "./getData";
import Searchbar from "./Searchbar.js"
import VideoList from "./VideoList.js"

class Main extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {// function to get request
        const aleks =   await data.get("/search", {
        params: {
            q: termFromSearchBar,
            part: "snippet",
            maxResults: 5,
            key: "AIzaSyDSB7ezogN67kVxhxhGJPw2Ccn5Cpye1s0"
        }
    })
    
        this.setState({
            videos: aleks.data.items
        })
}

    handleVideoSelect = video => {
        this.setState({selectedVideo: video})
    }


    render(){
        return(
            <div>
            <Searchbar handleFormSubmit={this.handleSubmit}/>
             <div> <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/> </div>
            </div>
        )
    }
}


export default Main