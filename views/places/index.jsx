const React = require('react')
const Def = require('../default')

function index(data) {
let placesFormatted = data.places.map((place) => {
    return (
        <Def>
            <div>
                <h2>
                    {place.name}
                </h2>
                <img src={place.pic} alt= {place.name}></img>
            </div>
        </Def>
    )
})
    return(
        <Def>
            <main>
                <h1>
                    Places Index
                </h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = index
