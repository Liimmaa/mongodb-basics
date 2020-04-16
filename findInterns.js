const firstDocument = (db) => {
    //Get the documents collection
    const firstDocmentCollection = db.collection('myMovies');
    //All the movies with a rating of 7
    const ratingOfSeven = db.collection('myMovies');
    // Just movies
    const justMovieTitles = db.collection('myMovies');
    //My Query
    var query = { 'rating': '7' };
    //Get the first document
    firstDocmentCollection.findOne({}, function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    ratingOfSeven.find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    justMovieTitles.find({}).project({ 'movie': 1, _id: 0 }).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
    });
};

module.exports = {
    firstDocument
}