const React = require('react')
const Def = require('./default')

function error404(){
    return(
        <Def>
            <main>
                <h1>
                    404: Page Not Found
                </h1>
                <p>
                    Oops, sorry we can't find this page.
                </p>
                {/* <img src="..\..\pics\404.gif"></img> */}
            </main>
        </Def>
    )
}

module.exports = error404