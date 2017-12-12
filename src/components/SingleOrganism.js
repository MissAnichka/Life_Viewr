import React from 'react';

const SingleOrganism = (props) => {
    const { organism } = props
    return (
        <div>
            <div className="singleorganism">
                <div key={organism.id}>
                    <div className="organismname">{organism.name}</div>
                    <img src={organism.image} alt='organism' />
                </div>
            </div>
        </div>
    )
}

export default SingleOrganism