const { db } = require('../../mysql');

const getProducts = (req, res) => {

    db.getConnection((err, connection) => {
        if (err) throw err;
    
        connection.query('SELECT * FROM Productos', (error, result) => {
            connection.release();
            if (error) throw error;
    
            res.send({
                data: result,
                success: true
            });
        })
    })
}

module.exports = { getProducts }
