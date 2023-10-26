const React = require('react')
const Default = require('../Default')

function Index({ places }) {
    let placesFormatted = places.map((place, index) => {
        return (
            <div key={index}>
                <a href={`/places/${index}`}><h2>{place.name}</h2></a>
                <img src={place.pic} alt={place.name} />
            </div>
        )
    })
    return (
        <Default>
            <main>
                <h1>Places Index Page</h1>
                {placesFormatted}
            </main>
        </Default>
    )
}

module.exports = Index