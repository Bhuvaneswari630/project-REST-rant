const React = require('react')
const Default = require('../Default')

function Show({ place, index }) {
    return (
        <Default>
            <main>
                <div className='Details-container'>
                    <h1>{place.name}, {place.city}</h1>
                    <img src={place.pic} alt={place.name} height='500' />
                    <div>
                        Photo by <a href={place.authorLink}>{place.picAuthor}</a> on <a href="https://unsplash.com">Unsplash</a>
                    </div>
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