module.exports = (sequelize, DataTypes) => {
    return sequelize.define('books', {
        nameOfBook:{
            type: DataTypes.STRING,
        },
        author: DataTypes.STRING,
        genre: {
            type: DataTypes.ENUM,
            values: ['Novel', 'Sci-Fi', 'Horror', 'Memoir', 'Guidebook'],
            defaultValue: 'Novel'
        },
        pubYear: DataTypes.INTEGER,
        rating: {
            type: DataTypes.INTEGER,
            min: 1,
            max: 5,
            defaultValue: 1
        }
    });
}