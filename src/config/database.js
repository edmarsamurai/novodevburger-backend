module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mypostgres',
    database: 'novodevburger',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
}