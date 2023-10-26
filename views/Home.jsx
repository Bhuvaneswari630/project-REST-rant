const React = require('react')
const Default = require('./Default')

function Home (html) {
return (
    <Default>
        <main>
            <h1>Home Page</h1>
            <a href="/places"><button className='btn-primary'>Places page</button></a>
        </main>
    </Default>
)
}

module.exports = Home