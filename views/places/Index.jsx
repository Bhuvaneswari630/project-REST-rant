const React = require('react')
const Default = require('../Default')

function Index({ places }) {
    let placesFormatted = places.map((place, index) => {
        return (
            <div key={index}>
                <div className='col'>
                    <a href={`/places/${index}`}><h2>{place.name}</h2></a>
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
                <h1>Places to Rant or Rave Abou</h1>
                <div className='row'>
                    {placesFormatted}
                </div>

            </main>
        </Default>
    )
}

module.exports = Index