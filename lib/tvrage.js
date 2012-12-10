var events = require('events');

var util = require('util');
var http = require('http');

var superagent = require('superagent');

var xml2json = require('./xml2json');

module.exports = function() {
    return new TVRage();
}
/*
 * Constructor
 */

function TVRage() {
    this.host = 'services.tvrage.com';
    this.port = 80;
    return this;
}
TVRage.prototype.search = function(show, callBack) {
	if (!show) {
		callBack('First param needs to be the show name.')
	}
	var url = '/feeds/search.php?show=' + escape(show);
	this.query(url, callBack)
}
TVRage.prototype.getEpisodeInfo = function(data, callBack) {
	if (!data) {
		callBack('First param needs to be the episode data.')
	}
	var url = '/feeds/episodeinfo.php?sid='+data.showid+'&ep='+ data.season +'x'+ data.episode;
	this.query(url, callBack)
}
TVRage.prototype.query = function(url, callBack) {
	console.log(this.host + url)
	var request = superagent
        .get(this.host + url)
        .end(function(res){
            if(res.ok) callBack(null, xml2json.parser(res.text));
			else {
				callBack('Error calling the server.')
			}
		});
	return this;
}
