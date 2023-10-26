const React = require('react')
const Default = require('../Default')

function Show({ place, index }) {
    return (
        <Default>
            <main>
                <div className='Details-container'>
                    <h2>{place.name}, {place.city}</h2>
                    <img src={place.pic} alt={place.name} />
                    <p>Cuisines: {place.cuisines}</p>
                </div>
                <div className='button-container'>
                    <a href={`/places/${index}`}><button className='btn btn-primary'>Edit</button></a>
                    <button className='btn btn-danger'>Delete</button>
                    <a href='/places'><button className='btn btn-primary'>Go to places</button></a>
                </div>
            </main>
        </Default>
    )
}

module.exports = Show