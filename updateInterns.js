const updateMovies = (db) => {
    const updateMovie = db.collection('myMovies');

    updateMovie.updateOne(
        {movie: 'The Banker'},
        {
            $set: {
                movie: 'Maleficient',
                year: 2020,
                rating: 8
            }
        }, function(err, result ) {
            if (err) throw err;
            return result;
        });

        const update = updateMovie.findOne({}, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
}

module.exports = {
    updateMovies
}