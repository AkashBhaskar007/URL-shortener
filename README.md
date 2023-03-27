# URL-shortener

A backend URL shortener application using Node.js, Express.js and MongoDB.
## Getting started

To install the dependencies.
```
npm install
```
## Start the server and run application

Run application
```
npm start
```
## API Reference

#### Shorten the URL

```http
  POST /url
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `url` | `string` | **Required**. URL to shorten |

#### Access the long URL

```http
  GET /:shortUrl
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `shortUrl`      | `string` | **Required**. Short URL |
