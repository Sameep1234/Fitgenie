const pool = require('../pool');

exports.eat = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log("SQL CONNECTION ERROR: " + err.message);
            res.send({
                status: 0,
                msg: err.message,
                success: false,
                data: null,
            });
        } else {
            let fetch = 'select * from menu;';
            pool.query(fetch, (err, result) => {
                if (err) {
                    console.log("SQL QUERY RUN ERROR: " + err.message);
                    res.send({
                        status: 0,
                        msg: err.message,
                        success: false,
                        data: null,
                    });
                } else {
                    res.send({
                        status: 1,
                        msg: 'Fetched',
                        success: true,
                        data: result,
                    });
                }
            });
        }
        connection.release();
    });
}