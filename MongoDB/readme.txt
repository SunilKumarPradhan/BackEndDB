we also need to install mongoose to use mongoose 

there is no , create db command we can simply shift to a new db , using: use nameDB 
and it will create a new DB and enter into that db.
eg: Patients> use fruitsDB

inside the database , we are supposed to create a collections inside the database.
eg : fruitsDB> db.createCollection("fruit_basket// ths is the name of the collection you want to use")

to delete a particular database , you enter into that database then inside that you use this commmand :
eg:  db.dropDatabase()


if you jsut create the database without creating collection , it wont show up when you run the : show dbs command 
so , when you actually create a collection inside the database , it shows up after we run the : show dbs command



---------------------------------------------------------------------------------------------------------------------------
In MongoDB, you don't need to manually create collections before inserting documents. Collections are created automatically when you insert the first document into them using your application code or a MongoDB client. This is known as "lazy creation" and is a feature of MongoDB that makes it more flexible and easier to use, especially during development.

For example, in the JavaScript code snippet you provided earlier for inserting a document into the fruit_basket collection using Mongoose:

CODE:

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

fruit.save();


When you run this code, Mongoose will check if a collection named fruit_basket exists in the specified database. If it doesn't, MongoDB automatically creates the collection and then inserts the new fruit document into it. The name of the collection is determined by the name you specify when defining your model:

CODE : 

const Fruit = mongoose.model("Fruit", fruitSchema);

we can see whats inside the collection using this command : 
CODE : fruitsDB> db.fruits.find().pretty()

output: 
fruitsDB> db.fruits.find().pretty()
[
  {
    _id: ObjectId('65c8b3b3774b29110b8b8a91'),
    name: 'Apple',
    rating: 7,
    review: 'Pretty solid as a fruit.',
    __v: 0
  }
]

EXAMPLE OF A BASIC DATABASE CODE :
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a schema
const blogPostSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

// Compile model from schema
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// Using the model to create a new blog post
const newPost = new BlogPost({
  title: 'Introduction to Mongoose Models',
  author: 'Jane Doe',
  body: 'Models are a core concept in Mongoose...'
  // other fields can be specified as needed
});

// Saving the new post to the database
newPost.save(function(err) {
  if (err) return console.error(err);
  console.log('Blog post saved successfully!');
});

CODE  FOR CUSTOM SCHEMA :

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const YourCustomSchema = new mongoose.Schema({
    name: String,
    age: Number
});
const YourCustomModel = mongoose.model('YourCustomCollection', YourCustomSchema);

const data = new YourCustomModel({ name: "John Doe", age: 30 });

data.save()
    .then(doc => console.log('Document inserted', doc))
    .catch(err => console.error(err));

--------------------------------------------------------------------------------------------------------------------

running this command will add the data into the fixed collecrtion as youve defined , no pluralizations
CODE: 
[USING MONGO SH]
fruitsDB> db.fruit_basket.insertOne({ name: "Banana", tast
{
  acknowledged: true,
  insertedId: ObjectId('65c97830e2190458705cb5ec')
}

fruitsDB> db.fruit_basket.find().pretty()
[
  {
    _id: ObjectId('65c97830e2190458705cb5ec'),
    name: 'Banana',
    taste: 8,
    review: 'Great!'
  }
]

BUT IF:
you pushed the data using the app.js to push the data then
it auto pluralizez it and put them like this 

{
  "_id": {
    "$oid": "65c975bc3f0e3c3c9509c835"
  },
  "name": "John Doe",
  "taste": 30,
  "review": "This is a test review.",
  "__v": 0
}

{
  "_id": {
    "$oid": "65c9772e0fb9c5900470643b"
  },
  "name": "Mango",
  "taste": 30,
  "review": "This is a test review.",
  "__v": 0
}


the data is stored in bruit_baskets collection instead of fruit fruit_basket

to access this data you can use :
CODE: db.fruit_baskets.find().pretty()