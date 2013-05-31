void function(root){
    'use strict'

    function appcache(options, app){
        options = options || {}
        var lines = (options && options.files) || []
            , path = (options && options.path) || 'app.cache'
            , file

        lines.unshift('CACHE MANIFEST', '', 'CACHE:')
        lines.push('', '# ' + new Date())
        file = lines.join('\n')

        app.all(path, function(r, s){
            s.writeHead(200, {
                  'Content-Type': 'text/cache-manifest'
            })
            s.end(file)
        })
        return file
    }


    if ( module && module.exports ) {
        module.exports = appcache
    } else {
        console.log(appcache({files:['file1', 'file2']}, {all:function(){}} ));
    }
}(this)
