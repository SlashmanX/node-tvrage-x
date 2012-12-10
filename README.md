### About
This is essentially [this TVDB module](https://npmjs.org/package/thetvdb) rewritten to use the TVRage API.

Right now, there are only 2 methods

`search` simply takes a string as input and returns a list of results

`getEpisodeInfo` takes in an object containing the id of the series, the season number and the episode number



### Dependencies

[superagent] (https://github.com/visionmedia/superagent)

### Usage

Install from NPM with:

```
npm install tvrage-x
```

Then,

```
var TVRage = require('tvrage-x').();

TVRage.search('Castle', function(err, data){
    console.log(data);
})

TVRage.getEpisodeInfo({
        showid: 19267,
        season: 5,
        episode: 5
    }, function(err, data){
            console.log(data.show.episode.title);
})
```