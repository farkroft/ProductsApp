const mongoose = require('mongoose')
var Province = require('../models/province.model')
var fs = require('fs')
var csv = require('fast-csv')

module.exports = {
    import: function (req, res, next) {
        var path = "/upload/" + req.params.file + ".csv"

        fs.exists(path, function (exists) {
            if (exists) {
                var stream = fs.createReadStream(path)

                csv.fromStream(stream, {headers : [ "code", "parent_code", "name" ] } )
                .on("data", function (data) {
                    var province = new Province({
                        code: data.code,
                        parent_code: data.parent_code,
                        name: data.name
                    }).save(function (err, data) {
                        if (err) return next(err)
                        res.status(200).send(data)
                    })
                })
            }
        })
    }
}