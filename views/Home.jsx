const React = require('react')
const Default = require('./Default')

function Home(html) {
    return (
        <Default>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    {/* <img
                        src='/images/home.jpg'
                        alt="Dine-in resaurant"
                        // width='600'
                        height='600'
                    /> */}
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="/images/Cafe.jpg" alt="First slide" height='800' />
                                <div class="carousel-caption d-none d-md-block">
                                    Photo by <a href="https://unsplash.com/@subagjav">Rizky Subagja</a> on <a href="https://unsplash.com">Unsplash</a>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="/images/home.jpg" alt="Second slide" height='800' />
                                <div class="carousel-caption d-none d-md-block">
                                    Photo by <a href="https://unsplash.com/@jaywennington">Jay Wennington</a> on <a href="https://unsplash.com">Unsplash</a>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="/images/Vegan salad bowl.jpg" alt="Third slide" height='800' />
                                <div class="carousel-caption d-none d-md-block">
                                    Photo by <a href="https://unsplash.com/@annapelzer">Anna Pelzer</a> on <a href="https://unsplash.com">Unsplash</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/places"><button className='btn-primary'>Places page</button></a>
            </main>
        </Default>
    )
}

module.exports = Home