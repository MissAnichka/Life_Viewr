import React, { Component } from 'react';
import Sidebar from './Sidebar';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            selectedOption: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onOptionChange = this.onOptionChange.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    onOptionChange(event) {
        this.setState({ selectedOption: event.target.value })
    }

    render() {
        return (
            <div>
                <Sidebar />
                <form onSubmit={this.handleSubmit}>
                    <label> Search: <input type="text" value={this.state.value} onChange={this.handleChange} /></label>
                    <form>
                        <label><input type="radio" value="kingdom" checked={this.state.selectedOption === 'kingdom'} onChange={this.onOptionChange} />kingdom</label>
                        <label><input type="radio" value="phylum" checked={this.state.selectedOption === 'phylum'} onChange={this.onOptionChange} />phylum</label>
                        <label><input type="radio" value="classes" checked={this.state.selectedOption === 'classes'} onChange={this.onOptionChange} />classes</label>
                        <label><input type="radio" value="order" checked={this.state.selectedOption === 'order'} onChange={this.onOptionChange} />order</label>
                        <label><input type="radio" value="family" checked={this.state.selectedOption === 'family'} onChange={this.onOptionChange} />family</label>
                        <label><input type="radio" value="genus" checked={this.state.selectedOption === 'genus'} onChange={this.onOptionChange} />genus</label>
                        <label><input type="radio" value="species" checked={this.state.selectedOption === 'species'} onChange={this.onOptionChange} />species</label>
                    </form>
                    <input type="submit" value="Submit" />
                </form>
                <div style={{ backgroundImage: "url('http://www.happybirthdaycake2015.com/wp-content/uploads/2017/08/http-2F2Fmashable.com2Fwp-content2Fgallery2Fcatmemes2Fserious20cat-min-300x207.jpg'", backgroundRepeat: "no-repeat" }}>
                    <h1 style={{ color: 'black', padding: '19%', textShadow: '2px 2px 0px #8642f4' }}>Cat</h1>
                </div>
                {
                    // would actually add logic here to axios request a random organism from the database and load it into this div
                }
            </div>
        )
    }
}