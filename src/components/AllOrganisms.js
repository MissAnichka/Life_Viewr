import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllOrganisms extends Component {
    constructor() {
        super();
        this.state = {
            organisms: []
        };
    }

    componentDidMount() {
        axios.get('./api/organisms')
            .then(res => res.data)
            .then(organisms => this.setState({ organisms }));
    }

    render() {
        const { organisms } = this.state
        return (
            <div>
                <h1>All Organisms</h1>
                <div className="row container">
                    {
                        organisms.map(organism => {
                            return (
                                <div className="eachorganism" key={organism.id}>
                                    <div className="organismname">
                                        <Link to={`/organisms/${organism.id}`}>
                                            <div className="display-4">
                                                Organism Name
                                                {organism.name}
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="organismimage">
                                        <Link to={`/organisms/${organism.id}`}>
                                            Organism Image
                                            {organism.image}
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}