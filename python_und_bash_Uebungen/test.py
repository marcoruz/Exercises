import pymongo 

db.collection.bulkWrite( [
   { insertOne : { "document" : <document> } }
] )