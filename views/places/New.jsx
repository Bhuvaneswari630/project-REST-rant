const React = require('react')
const Default = require('../Default')

function New(html) {
    return (
        <Default>
            <main>
                <h1>Create a New Place</h1>
                <form action="#">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="pic">Image URL</label>
                        <input type="text" />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </main>
        </Default>
    )
}

module.exports = New