const React = require('react')
const Default = require('../Default')

function Index({ places }) {
    let placesFormatted = places.map((place, index) => {
        return (
            <div key={place.id}>
                <div className='col'>
                    <a href={`/places/${place.id}`}><h2>{place.name}</h2></a>
                    <p className='text-center'>
                        {place.cuisines}
                    </p>
                    <img src={place.pic} alt={place.name} width='250' height='250' />
                    <p className='text-center'>Located in {place.city}, {place.state}</p>
                </div>
            </div>
        )
    })
    return (
        <Default>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className='row'>
                    {placesFormatted}
                </div>
                <div>
                    <a href="/places/new"><button className='btn btn-primary'>Create a new place</button></a>
                    <a href="/"><button className='btn btn-secondary'>Back to Home page</button></a>
                </div>
            </main>
        </Default>
    )
}

module.exports = Index