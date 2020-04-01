const insertDocuments = (db) => {
    // Get the documents collection
    const collection = db.collection('interns');
    // Insert some documents
    collection.insertOne({
        'name': 'Chioma'
    })
    console.log(`interns collection created`)
}

module.exports = {
    insertDocuments
}