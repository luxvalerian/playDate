import React from 'react';

import PlaydateForm from '../../components/PlaydateForm/PlaydateForm';



const Playdates = (props) => {
    return (
        <main>
            <h1>Playdates</h1>
            <PlaydateForm {...props} />
        </main>
    );
};

export default Playdates;