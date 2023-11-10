const React = require('react')
const Default = require('../Default')

function Edit({ place, index }) {
    console.log('index', index)
    return (
        <Default>
            <main>
                <h1>Edit Place</h1>
                <form action={`/places/${index}?_method=PUT`} method='POST'>
                    <div className="row m-1">
                        <div className='form-group col-6'>
                            <label htmlFor="name" >Name</label>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                className="form-control"
                                defaultValue={place.name}
                            />
                        </div>
                        <div className='form-group col-6'>
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                id='city'
                                name='city'
                                className="form-control"
                                defaultValue={place.city}
                            />
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className='form-group col-6'>
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                name='state'
                                id='state'
                                className="form-control"
                                defaultValue={place.state}
                            />
                        </div>
                        <div className='form-group col-6'>
                            <label htmlFor="cuisines">Cuisines</label>
                            <input
                                type="text"
                                name='cuisines'
                                id='cuisines'
                                className="form-control"
                                defaultValue={place.cuisines}
                            />
                        </div>
                    </div>
                    {/* <div className="row"> */}
                    <div className='form-group m-1' >
                        <label htmlFor="pic">Image URL</label>
                        <input
                            type="text"
                            name='pic'
                            id='pice'
                            className="form-control"
                            defaultValue={place.pic}
                        />
                    </div>
                    <div className='form-group m-1' >
                        <label htmlFor="founded">Founded</label>
                        <input
                            type="number"
                            name='founded'
                            id='founded'
                            className="form-control"
                            defaultValue={place.founded}
                        />
                    </div>
                    <input className='btn btn-success' type='submit' value='Update' />
                </form>
            </main>
        </Default>
    )
}

module.exports = Edit