var jasper = require('node-jasper-report')({
    path: './lib/jasperreports-5.6.0',
    reports: {
      // Report Definition
      hw: {
        jasper: '../report/report_tes.jasper'
      }
    },
    drivers: {
      pg: {
        path: './postgresql-42.4.0.jar',
        class: 'org.postgresql.Driver',
        type: 'postgresql'
      }
    },
    conns: {
      dbserver1: {
        host: 'localhost',
        port: 5432,
        dbname: 'odoo-mmp',
        user: 'odoo',
        pass: 'saya',
        driver: 'pg'
      }
    },
    defaultConn: 'dbserver1',
  });

  export default jasper;