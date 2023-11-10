const React = require('react')
const Default = require('../Default')

function Show({ place, index }) {
    const starEmoji = '\u2B50';
    const heartEmoji = '\U2764';
    let comments = (
        <h4 className='inactive'>
            No comments yet !
        </h4>
    )
    let rating = (
        <h4 className='inactive'>
            Not yet rated !
        </h4>
    )

    if (place.comments.length) {
        let sumRatings = place.comments.reduce((total, c) => {
            return total += c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += starEmoji
        }
        rating = (
            <h3>
                {/* {averageRating} stars */}
                {stars}
            </h3>
        )
        comments = place.comments.map(c => {
            return (
                <div key={c.id} className="border col-4">
                    <h2 className="rant">{c.rant ? 'Rant!' : `Rave!`}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <form action={`/places/${index}/comments/${c.id}?_method=DELETE`} method='POST' >
                        <input className='btn btn-danger' type="submit" value='DELETE' />
                    </form>
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
                                <p className="card-text">{rating}</p>
                                <h3 className="card-title">Description</h3>
                                <h4 className="card-text">{place.showEstablished()} </h4>
                                <h5 className="card-text">Serving {place.cuisines}</h5>
                                {/* <p className="card-text"><small className="text-muted">{place.founded}</small></p> */}
                            </div>
                            <div>
                                <a href={`/places/${index}/edit`}><button className='btn btn-warning mb-2'>Edit</button></a>
                                <form action={`/places/${index}?_method=DELETE`} method='POST' >
                                    <input className='btn btn-danger' type="submit" value='DELETE' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='comments-container'>
                    <h3>Comments</h3>
                    <div className="row">
                        {comments}
                    </div>
                </div>
                <h3>Got your own Rant or Rave</h3>

                <form action={`/places/${index}/comments`} method='POST'>
                    <div className="form-group">
                        <label htmlFor="post-content">Comment</label>
                        <textarea
                            type="textarea"
                            className="form-control"
                            name='content'
                            id='post-content'
                            required
                            defaultValue='Well this was okay in a pinch'
                        ></textarea>
                    </div>
                    <div className="row">
                        <div className="form-group col-4">
                            <label htmlFor="post-author">Author</label>
                            <input
                                type="text"
                                className="form-control"
                                name='author'
                                id='post-author'
                                required
                            />
                        </div>
                        <div className="form-group col-4">
                            <label htmlFor="post-stars" className='form-label' >Star Rating</label>
                            <input
                                type="range"
                                className="form-range"
                                name='stars'
                                id='post-stars'
                                min="0" max="5" step="0.5"
                            />
                        </div>
                        <div className="form-group col-4">
                            <label htmlFor="post-rant" className='form-check-label'>Rant?</label>
                            <input
                                type="checkbox"
                                // className="form-check-input"
                                className="form-control"
                                name='rant'
                                id='post-rant'
                            />
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='btn btn-primary mb-2'>Add Comment</button>
                    </div>
                </form>
                <a href="/places"><button className='btn btn-secondary'>Back to places</button></a>
            </main>
        </Default>

    )
}

module.exports = Show

