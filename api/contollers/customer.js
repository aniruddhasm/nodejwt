const customer = {}

customer.list = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) {
      res.json(err)
    }
    conn.query('SELECT * FROM customer', (err, customers) => {
      if (err) {
        res.json(err)
      }
      res.json(customers)
    })
  })
}

customer.save = (req, res) => {
  let data = req.body.data
  req.getConnection((err, conn) => {
    if (err) {
      res.json(err)
    }
    conn.query('INSERT INTO customer set ?', data, (err, customers) => {
      if (err) {
        res.json(err)
      }
      res.json(customers)
    })
  })
}

customer.edit = (req, res) => {
  let id = req.params.id
  req.getConnection((err, conn) => {
    if (err) {
      res.json(err)
    }
    conn.query('SELECT * FROM customer where id = ?', [id], (err, customers) => {
      if (err) {
        res.json(err)
      }
      res.json(customers[0])
    })
  })
}

customer.update = (req, res) => {
  let id = req.params.id
  let data = req.body.data
  req.getConnection((err, conn) => {
    if (err) {
      res.json(err)
    }
    conn.query('UPDATE customer set ? where id = ?', [data, id], (err, customers) => {
      if (err) {
        res.json(err)
      }
      res.json(customers)
    })
  })
}

customer.delete = (req, res) => {
  let id = req.params.id
  req.getConnection((err, conn) => {
    if (err) {
      res.json(err)
    }
    conn.query('DELETE FROM customer where id = ? ', id, (err, customers) => {
      if (err) {
        res.json(err)
      }
      res.json(customers)
    })
  })
}

module.exports = customer
