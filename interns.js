// const insertDocuments = (db) => {
//     // Get the documents collection
//     const collection = db.collection('interns');
//     // Insert some documents
//     collection.insertOne({
//         'name': 'Chioma'
//     })
//     console.log(`interns collection created`)
// }

const insertNewDocuments = (db) => {
    //Get the documents collection
    const collections = db.collection('myMovies');
    //Insert some documents
    collections.insertMany([
        { 'movie': 'The Banker', 'year': '2020', 'rating': '8' },
        { 'movie': 'Bad Boys', 'year': '2020', 'rating': '7' },
        { 'movie': 'The Hunt', 'year': '2020', 'rating': '7' },
        { 'movie': 'Bloodshot', 'year': '2020', 'rating': '7.5' },
        { 'movie': 'First Cow', 'year': '2020', 'rating': '6.5' }]
        , function (err, res) {
            if (err) throw err;
            console.log(res);
        });

};

module.exports = {
    insertNewDocuments
}
// module.exports = {
//     insertDocuments
// }