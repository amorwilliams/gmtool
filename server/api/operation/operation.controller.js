/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var request = require('request');
var config = require('../../config/environment');
var gs_url = config.gs_server.url;

var server = {
    zones: ['dr', 'jr', 'sir', 'mrs', 'mr', 'NaN', 'dj'],
    serverIds: ['server1', 'server2', 'server3', 'server4']
}

// Get list of things
exports.index = function(req, res) {
    return res.json(200, server);
};

// Get a role info
exports.getRoleInfo = function(req, res) {
    console.log(req.body);
    post(req.body, function(err, res2, body) {
        console.log(body);
        res.json({'good':'find'});
    });
}

function post(send_data, cb) {
    request.post({
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        url: gs_url,
        form: {
            data: send_data
        }
    }, function(err, res, body) {
        cb(err, res, body);
    });
}