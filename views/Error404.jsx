const React = require('react')
const Default = require('./Default')

function Error404 (e) {
    return (
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <img src="http://placekitten.com/550/550" alt="Kitten image" />
                <p>{e._message}</p>
            </main>
        </Default>
    )
}

module.exports = Error404
