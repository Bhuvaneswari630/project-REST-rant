const React = require('react')
const Default = require('./Default')

function Home (html) {
return (
    <Default>
        <main>
            <h1>Home Page</h1>
            <div>
                <img 
                src='/images/home.jpg' 
                alt="Dine-in resaurant" 
                // width='600'
                height='600'
                />
            </div>
            <div>
                Photo by <a href="https://unsplash.com/@jaywennington">Jay Wennington</a> on <a href="https://unsplash.com">Unsplash</a>
            </div>
            <a href="/places"><button className='btn-primary'>Places page</button></a>
        </main>
    </Default>
)
}

module.exports = Home