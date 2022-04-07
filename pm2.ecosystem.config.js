module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [{
        script: 'server.js',
        log_date_format: 'YYYY-MM-DD HH:mm:ss',
        watch: true,
        instances: 'max',
        combine_logs: true,
        merge_logs: true,
        env_sit: {
            NODE_ENV: 'sit',
            NO_PROXY: '*',
            name: 'Robosys-UAT',
        },
        env_uat: {
            NODE_ENV: 'uat',
            name: 'Robosys-UAT-Uat',
        },
        env_production: {
            NODE_ENV: 'production',
            name: 'Robosys-UAT-Prod'
        },
   }]
};
