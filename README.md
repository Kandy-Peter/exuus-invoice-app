# Invoice App

Invoice App is the easiest way to create professional invoices and estimates for your customers. Users can create, read, update, and delete invoices. Users can also filter invoices by status ​​(draft/pending/paid).

![Homepage](https://user-images.githubusercontent.com/80612925/196788822-1dfb9adc-ecc1-47f7-b8c7-950838d2a642.png)

## Features

✅ Create, read, update, and delete invoices\
✅ Receive form validations when trying to create/edit an invoice\
✅ Save draft invoices, and mark pending invoices as paid\
✅ Filter invoices by status (draft/pending/paid)

## 👨‍💻 Demo

<a href="https://exuus-invoice-app.vercel.app/" target="blank">
<img src="https://img.shields.io/website?url=https://invoice-app-sand.vercel.app/&logo=github&style=flat-square" />
</a>

Try out the website : [Invoice App](https://exuus-invoice-app.vercel.app/)

## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/Kandy-Peter/exuus-invoice-app.git
```

2. Change the working directory

```bash
cd exuus-invoice-app
``` 

3. Install dependencies

```bash
npm install or yarn install
```

4. Start the server

 Using Docker: 
```bash
docker-compose build
docker-compose up
```

  Without Docker: 
  ```bash
  npm run dev or yarn dev
  ```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- `REACT_APP_API_URL` - API URL
- `DB_HOST` - Database host
- `DB_USER` - Database user
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name

## 🚀 Deployment

To deploy this project run

```bash
npm run build or yarn build
```

## 🛠️ Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Node.js](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript
- [Express](https://expressjs.com/) - A web application framework for Node.js
- [PostgreSQL](https://www.postgresql.org/) - An open source object-relational database system
- [Sequelize](https://sequelize.org/) - A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server
- [Docker](https://www.docker.com/) - A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers



## 📝 License

This project is licensed under the MIT License - see the [LICENSE]() file for details

## 📫 Support

For support, email me at [kandypeter03gmail.com]().
