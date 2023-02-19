const React = require('react');
const Def = require('./default');

function error404(){
    return(
        <Def>
            <main>
                <h1>
                    404: Page Not Found
                </h1>
                <p>
                    Oops, sorry we can't find this page. Here's a cute kitten for your troubles.
                </p>
                <div>
                    <img src='https://placekitten.com/200/300' alt='kitten'/>
                </div>
            </main>
        </Def>
    );
};

module.exports = error404;