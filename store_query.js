import { query } from 'express';

function querydb(ColumnData)
{
    connection.query(ColumnData, function (err, rows, fields) {
        if (err) console.log(err);
        console.log('rows', rows);
        //console.log('fields', fields);
      });
}

export default function access_storelist()
{
    var store = 'SELECT name FROM store';
    querydb(store);

    store = 'SELECT img FROM store';
    querydb(store); 
}