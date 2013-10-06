/***
 *
 * RIAK-JS Test Scripts for DB Cluster & REST API
 *
 * @version 0.1
 *
 * @author : Mark Rushton
 *
 */


console.log("RIAK TESTS");


var db = require('riak-js').getClient();

var post = {
    id: 18,
    date: new Date(),
    title: 'a blog post',
    body: 'A blog post about Riak'
};


var user = {
    id: 3,
    date: new Date(),
    first: 'Mark',
    lastname: 'Rushton',
    body: 'Learning the Riak'
};


//console.log(post);

//db.save('posts', post.id, post);
//db.save('users', user.id, user);


db.get('posts', 17, function(err, data, meta){
    console.log(data);
});


db.get('posts', 18, function(err, data, meta){
    console.log(data);
});


db.get('users', 3, function(err, data, meta){
    console.log(data);
});




//db.save 'tests', 1, { works: 'fine' }, (err) ->

var aNewPost = {id: 18,
    date: new Date(),
    title: 'a second blog post',
    body: 'blog post about Riak part 2'};

// Save the second post, with a link to the first post
db.save('posts', aNewPost.id, aNewPost,
    { links: [ {bucket: 'posts', 'key': 17 } ]});

db.walk('posts', '18', [{bucket:'posts',tag:'_'}]);
// db.walk, traverses object 18's links,
// which happens to be post 17, and returns them.


