const React = require('react')
const Default = require('../Default')

function Show({ place, index }) {
    let comments = (
        <h4 className='inactive'>
            No comments yet !
        </h4>
    )
    if (place.comments.length) {
        comments = place.comments.map(c => {
            return (
                <div key={c.id} className="border">
                    <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Default>
            <main>
                <div className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={place.pic} className="card-img" alt={place.name} height='500' />
                            {/* <div>
                                Photo by <a href={place.authorLink}>{place.picAuthor}</a> on <a href="https://unsplash.com">Unsplash</a>
                            </div> */}
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{place.name}</h1>
                                <h3 className="card-title">Rating</h3>
                                <p className="card-text">Not Rated</p>
                                <h3 className="card-title">Description</h3>
                                {/* <p className="card-text">Located in {place.city}, {place.state} serving {place.cuisines}.</p> */}
                                <h4 className="card-text">{place.showEstablished()} </h4>
                                <h5 className="card-text">Serving {place.cuisines}</h5>
                                {/* <p className="card-text"><small className="text-muted">{place.founded}</small></p> */}
                            </div>
                            <div>
                                <a href={`/places/${index}/edit`}><button className='btn btn-warning'>Edit</button></a>
                                <form action={`/places/${index}?_method=DELETE`} method='POST' >
                                    {/* <button type='submit' className='btn btn-danger'>Delete</button> */}
                                    <input className='btn btn-danger' type="submit" value='DELETE' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='comments-container'>
                    <h3>Comments</h3>
                    {comments}
                </div>
                <div className='button-container'>

                    {/* <a  href</div>={`/places/0/delete`}><button >Delete</button></a> */}
                    <a href='/places'><button className='btn btn-secondary'>Go to places</button></a>
                </div>
            </main>
        </Default>
    )
}

module.exports = Show
