const express = require('express');
const cors = require("cors");
const pool = require("./config/db");
const app = express();
const port = 5000;



app.use(cors());
app.use(express.json());
app.use(express.static('client/build'));


// get all records
app.get('/getAllRecords' , async(req,res) => {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM customer');
        res.status(200).json(result.rows);

    } catch (err) {
        console.error(err.message)
    }finally {
        client.release();
      }
  })

//   post data 
app.post('/postRecord', async (req, res) => {
    const { customer_name, age, phone, location, created_date, created_time } = req.body;
  
    const client = await pool.connect();
    try {
      const result = await client.query(
        'INSERT INTO customer (customer_name, age, phone, location, created_date, created_time) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [customer_name, age, phone, location, created_date, created_time]
      );
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Error inserting record:', error);
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      client.release();
    }
  });
  

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });