# Book Store API

A simple Node.js + Express + Mongoose REST API for managing books.

## Base URL
```
`/api/books`
```

## Routes

### 1. Get all books
**GET** `/api/books/get`

Returns a list of all books.

---

### 2. Get a single book by ID
**GET** `/api/books/get/:id`

Returns one book matching the provided MongoDB ObjectId.

---

### 3. Add a new book
**POST** `/api/books/add`

Body example (JSON):
```json
{
  "title": "Book Title",
  "author": "Author Name",
  "price": 399
}
```

Creates a new book.

---

### 4. Update an existing book
**POST** `/api/books/update/:id`

Body example (JSON):
```json
{
  "title": "Updated Title",
  "price": 499
}
```

Updates the book with the given ID.

---

### 5. Delete a book
**DELETE** `/api/books/delete/:id`

Deletes the book with the given ID.

---

## Usage

1. Install dependencies:
```
npm install
```

2. Start the server:
```
npm start
```

3. Make API requests using Postman, Thunder Client, or any HTTP client.

---

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemon
- Postman for testing
