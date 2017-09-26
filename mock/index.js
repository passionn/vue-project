var mock= require('mockjs');

var data={
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" },
    { "id": 2, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" },
  "user":{
  		getinfo:{
  			name:'passion',
  			age:'25'
  		}
  }
}

module.exports= () => {
	return data;
}