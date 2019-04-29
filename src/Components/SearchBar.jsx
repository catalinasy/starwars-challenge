import React, { Component } from 'react'
import {Button} from "./Button"

export default class SearchBar extends Component {
    constructor() {
        super()
        this.state={
            character:""
        }
    }

    handleCharacterChange(event){
        this.setState({character: event.target.value})
    }

    render() {
        const {character} = this.state
        return (
            <div>
                <input type="text" onChange={event => this.handleCharacterChange(event)}/>
                <Button label="Search" onClick={() => this.props.handleSearch(character)}/>
            </div>
        )
    }
}



