const React = require('react');
const Def = require('../default');

function show (data) {
    return (
        <Def>
            <main>
                <div>
                    <h1>
                        { data.place.name }
                    </h1>
                    <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                        Edit
                    </a>     
                    <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>     
                    <img src={data.place.food}/>
                </div>
                <div className='row'>

                    <h2>
                        Ratings
                    </h2>
                    <p>
                        No ratings yet
                    </p>
                     <h2>
                        Description
                    </h2>
                    <p>
                        Located in {data.place.city}, {data.place.state}. Serving {data.place.cuisines}.                    
                    </p>
                    <h2>
                        Comments
                    </h2>
                    <p>
                        No comments yet
                    </p>
                </div>

            </main>
        </Def>
    );
};

module.exports = show;
