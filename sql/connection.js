const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '76.251.167.18',
        user: 'root',
        password: 'Ilovemom12',
        database: 'admin',
        debug: false,
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;