//movies name: The Great Gasbe, Glass, avengers and social network.


var movie = [
    {
        title:'The Great Gasbe',
        rating: '10 stars',
        seen:true

    },

    {
        title:'Glass',
        rating: '0 stars',
        seen: false

    },
    {
        title:'avengers',
        rating: '9 stars',
        seen: true

    },
    {
        title:'social network.',
        rating: '10 stars',
        seen:true

    }
]

movie.forEach(function(show){
        if (show.seen == true){
            console.log('you have seen' + '"' + show.title + '' + ' - ' + show.rating);
        }
        else {
            console.log('you have not seen' + '"' + show.title + '' + ' - ' + show.rating);
        }
});
