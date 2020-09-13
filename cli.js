#!/usr/bin/env node

var lgtv = require("lgtv2")({
    url: 'ws://lgwebostv:3000'
});

lgtv.on('error', function (err) {
    console.log(err);
});

lgtv.on('connect', function () {
    lgtv.request('ssap://tv/switchInput', {inputId: 'HDMI_1'}, function (err, res) {console.log(res)})
    process.exit(0)
});