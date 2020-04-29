import React from 'react';

const Home = (props) => {
    return (
        <main>
            <h1>Featured Playdates</h1>
            {
                props.featuredPlaydates.map(({title, location, _id}) => (
                    <section key={_id}>
                        <h1>{title}</h1>
                        <p>{location}</p>

                    </section>
                ))
            }
        </main>
    );
};

export default Home;