const React = require('react');
const Def = require('../default');

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
     let rating = (
        <h3 className="inactive">
            No ratings yet!
        </h3>
     )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
              <div className="border">
                <h2 className="rant">{c.rant ? 'Rant! >:(' : 'Rave! :)'}</h2>
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
        <Def>
            <main>
                <div>
                    <h1>
                        { data.place.name }
                    </h1>
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                    
                </div>
                <div className='row'>
                    <div className="col">
                        <img src={data.place.food}/>
                    </div>
                    <div className="col">
                        <h2>
                            Ratings
                        </h2>
                        <p>
                            {rating}
                        </p>
                        <h2>
                            Description
                        </h2>
                        <p>
                            {data.place.showEstablished()}
                        </p>
                        <p>
                            Serving {data.place.cuisines}
                        </p>
                        <hr/>
                        <h2>
                            Comments:
                        </h2>
                        <p>
                            {comments}
                        </p>
                    </div>
                </div>
                    <hr/>
                    <a href={`/places/${data.place._id}/edit`} className="btn btn-warning"> 
                        Edit
                    </a>     
                    <form method="POST" action={`/places/${data.place._id}?_method=DELETE`}> 
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                    <h2>
                        Create your own Rant!: 
                    </h2>
                    <form method="POST" action= {`/places/${data.place._id}/comment`}>
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <label htmlFor="content">Content</label>
                            <textarea className="form-control" id="content" name="content" ></textarea>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="author">Author</label>
                            <input className="form-control" id="author" name="author" />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="stars">Star Rating</label>
                            <input className="form-control" type="range" step="0.5" min="1" max="5" id="stars" name="stars" />
                        </div>
                        <div className="col-sm-2" >
                            <label htmlFor="rant">Rant?</label>
                            <input type="checkbox" id="rant" name="rant" />
                        </div>
                        <br />
                    </div>
                        <input type="submit" value="Add Comment" />
                    </form>
            </main>
        </Def>
    )
}

module.exports = show


