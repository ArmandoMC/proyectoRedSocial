const { Pool } = require('pg');

const pool = new Pool({
    /**
    host: 'ec2-204-236-228-169.compute-1.amazonaws.com',
    user: 'xbklbxypnbfjaa',
    password: 'c1e66dc38e7316ef998f6783ad43a08446b995e72ead22a64703fe6bfe9231b4',
    database: 'de6l3lv5na4bng',
    port: '5432'
     */
    


    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'redSocial',
    port: '5432'
    /*host: 'localhost',
    user: 'postgres',
    password: 'liga2020',
    database: 'bd_proyecto_progravii',
    port: '5432'*/
    //port: '5433'

});
module.exports=pool;