import React, { useState } from 'react';

import PlaydateForm from '../../components/PlaydateForm/PlaydateForm';



const Playdates = (props) => {
    const [ formVisible, setVisibility ] = useState(false);
    return (
        <main>
            <h1>Playdates</h1>
            <button onClick={() => setVisibility(!formVisible)}>
                {formVisible ? 'Hide Form' : 'Show Form'}
            </button>
            {
                formVisible  &&
            <PlaydateForm {...props} />
            }
            {
                props.playdates.map(({title, _id, location, addedBy}) => (
                    <section key={_id}>
                        <h1>{title}</h1>
                        <p>Location: {location}</p>
                        <small>Added By: {addedBy.name}</small>
                    </section>
                ))
            }
        </main>
    );
};

export default Playdates;