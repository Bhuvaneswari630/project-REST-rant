const React = require('react')
const Default = require('../Default')

function New() {
    return (
        <Default>
            <main>
                <h1>Create a New Place</h1>
                <form action="/places" method='POST'>
                    <div className="form-group">
                        <label htmlFor="post-name">Name</label>
                        <input 
                        type="text"
                        className="form-control" 
                        name='name'
                        id='post-name'
                        required
                         />
                    </div>
                    <div className="form-group">
                        <label htmlFor="post-city">City</label>
                        <input 
                        type="text"
                        className="form-control" 
                        name='city'
                        id='post-city'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="post-state">State</label>
                        <input 
                        type="text" 
                        className="form-control"
                        name='state'
                        id='post-state' 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="post-cuisines">Cuisines</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        name='cuisines'
                        id='post-cuisines'
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="post-pic">Image URL</label>
                        <input 
                        type="url" 
                        className="form-control"
                        name='pic'
                        id='post-pic' 
                        />
                    </div>
                    <div>
                        <a href="/places"><button className='btn btn-secondary'>Back to places</button></a>
                        <button type='submit' className='btn btn-success'>Add Place</button>
                    </div>
                </form>
            </main>
        </Default>
    )
}

module.exports = New