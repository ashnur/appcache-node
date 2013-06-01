void function(root){
    'use strict'

    function appcache(options, app){
        options = options || {}
        var lines = options.files || []
            , path = options.path || 'app.cache'
            , file

        lines.unshift('CACHE MANIFEST', '', 'CACHE:')
        lines.push('', '# ' + new Date())
        file = lines.join('\n')

        app.all(path, function(req, res){
            res.status(200)
            res.set('Content-Type', 'text/cache-manifest')
            res.set('Cache-Control', 'no-cache')
            res.set('Cache-Control', 'no-store')
            res.set('Cache-Control', 'max-age: 0')
            res.end(file)
        })
        return file
    }


    if ( module && module.exports ) {
        module.exports = appcache
    } else {
        console.log(appcache({files:['file1', 'file2']}, {all:function(){}} ));
    }
}(this)
