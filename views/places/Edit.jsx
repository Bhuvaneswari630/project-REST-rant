const React = require('react')
const Default = require('../Default')

function Edit({ place }) {
    return (
        <Default>
            <main>
                <h1>Edit a Place</h1>
                <form action="#">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder={place.name} />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input type="text" placeholder={place.city} />
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <input type="text" placeholder={place.state} />
                    </div>
                    <div>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input type="text" placeholder={place.cuisines} />
                    </div>
                    <div>
                        <label htmlFor="pic">Image URL</label>
                        <input type="text" placeholder={place.pic} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </main>
        </Default>
    )
}

module.exports = Edit