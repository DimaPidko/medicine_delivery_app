import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const PORT = 3306; // MySQL server port

//Don`t touch my trulalal
const _queryShops = 'SELECT * FROM shops';
const _queryDrugs = 'SELECT * FROM drugs';

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
    connectionLimit: 2,
    host: '127.0.0.1',
    user: 'root',
    database: 'drug-stores',
});

pool.getConnection((err) => {
    if (!err) {
        console.log('Connected! :D');
    } else {
        console.log('Lost connection :(');
    }
});

app.listen(PORT);

app.get('/shops', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            return;
        } else {
            connection.query(_queryShops, (err, rows) => {
                connection.release();

                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                    return;
                }

                console.log('Success', rows);
                res.send(rows);
            });
        }
    });
});

app.get('/drugs', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            return;
        } else {
            connection.query(_queryDrugs, (err, rows) => {
                connection.release();

                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                    return;
                }

                console.log('Success', rows);
                res.send(rows);
            });
        }
    });
});

app.get('/drugs/:id', (req, res) => {
    const drugId = req.params.id;
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            return;
        } else {
            connection.query(
                'SELECT * FROM drugs WHERE id = ?',
                [drugId],
                (err, rows) => {
                    connection.release();

                    if (err) {
                        console.log(err);
                        res.status(500).send('Internal Server Error');
                        return;
                    }

                    console.log('Success', rows);
                    res.send(rows);
                }
            );
        }
    });
});

app.post('/drugs/:id', (req, res) => {
    const drugId = req.params.id;

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            return;
        }

        connection.query(
            `SELECT favorites FROM drugs WHERE id = ${drugId}`,
            (err, rows) => {
                if (err) {
                    connection.release();
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                    return;
                }
                const newFavoriteValue = rows[0].favorites === 1 ? 0 : 1;

                const updateQuery = `UPDATE drugs SET favorites = ${newFavoriteValue} WHERE id = ${drugId}`;

                connection.query(updateQuery, (err, result) => {
                    connection.release();

                    if (err) {
                        console.log(err);
                        res.status(500).send('Internal Server Error');
                        return;
                    }

                    console.log('Success', result);
                    res.send('Favorite updated successfully');
                });
            }
        );
    });
});
