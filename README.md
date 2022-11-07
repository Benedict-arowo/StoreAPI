
## Store API

##### From [freecodecamp](https://www.youtube.com/watch?v=qwfE7fSVaZM&t=9340s)  | [John Smilga](https://github.com/john-smilga/node-express-course)

#### Products Route (GET, POST)

*   http://localhost:5000/api/v1/products

```plaintext
{
  "amount": 3,
  "result": [
    {
      "rating": 4.5,
      "featured": true,
      "createdAt": "2022-11-07T13:24:39.519Z",
      "_id": "63690717accfc16498fd2c17",
      "name": "high-back bench",
      "price": 39,
      "company": "ikea",
      "__v": 0
    },
    {
      "rating": 4.5,
      "featured": false,
      "createdAt": "2022-11-07T13:24:39.519Z",
      "_id": "63690717accfc16498fd2c18",
      "name": "leather sofa",
      "price": 99,
      "company": "caressa",
      "__v": 0
    },
    {
      "rating": 4.6,
      "featured": false,
      "createdAt": "2022-11-07T13:24:39.519Z",
      "_id": "63690717accfc16498fd2c13",
      "name": "bar stool",
      "price": 40,
      "company": "liddy",
      "__v": 0
    }
  ]
}   
```

Returns a json array of 10 product objects by default. Supports POST requests.

| Parameter | Description | Type |
| --- | --- | --- |
| name= | matches with any products that starts with the given name | string |
| featured= | supports t or true, and f or false | boolen |
| company= |   | string |
| sort= | Sorts by a given field. Sorted by date, more recent first by default | string |
| numericFilters= | Filters on a specific numerical condition (\<, \<=, =, >, >= or !=). |   |
| limit | A limit of how many products to return. 10 by default; The maximum is 50. | int |
| page | page number | int |


```plaintext
Available numerical fields for numericFilters:

*   rating
*   price
*   createdAt
```


#### Products Route (GET, POST, PATCH, DELETE) 

*   http://localhost:5000/api/v1/products/`:id`

```plaintext
{
  "rating": 4.5,
  "featured": true,
  "createdAt": "2022-11-07T13:24:39.519Z",
  "_id": "63690717accfc16498fd2c17",
  "name": "high-back bench",
  "price": 39,
  "company": "ikea",
  "__v": 0
}
```

Returns an object.

#### Configuration:

`.env`

```plaintext
PORT=5000 // 3000 by default if not specified.
MONGO_URI=mongodb://localhost:27017/storeapi // https://www.mongodb.com/docs/manual/reference/connection-string/
```

`.companyList.js`

You may add more, or remove items from this array.

```plaintext
const companyList = ['ikea', 'liddy', 'caressa', 'marcos'];
```

To pre-populate the database, you may run `npm run populate`.
Takes in one conditional argument `npm run populate clean`, which clears the database before pre-populating it.


### Run locally:

*   Clone the git repo
*   Rename `.envexample` to `.env` and setup credentials
*   Run npm install
*   `npm start` should start the app