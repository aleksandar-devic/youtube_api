import React from "react";

class Searchbar extends React.Component {
    state = {
        term: ""
    };
    handleChange = (event) => { //
        this.setState({term: event.target.value})//
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }
    render(){
        return(
            <div>
<form onSubmit={this.handleSubmit}>
    <div><label>Video Search</label>
    <input onChange={this.handleChange} value={this.state.term}></input>
    </div>
</form>

            </div>
        )
    }


}
export default Searchbar;