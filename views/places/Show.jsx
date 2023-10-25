const React = require('react')
const Default = require('../Default')

function Show({ place }) {
    return (
        <Default>
            <main>
                <div className='Details-container'>
                    <h2>{place.name}, {place.city}</h2>
                    <img src={place.pic} alt={place.name} />
                    <p>Cuisines: {place.cuisines}</p>
                </div>
                <div className='button-container'>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </main>
        </Default>
    )
}

module.exports = Show