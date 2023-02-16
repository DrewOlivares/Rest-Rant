const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"/>
                <link rel='stylesheet' href='/style.css'/>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

  
  module.exports = Def