const Sequelize = require('sequelize');
const db = require('../');

module.exports = db.define('organisms', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    kingdom: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phylum: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    classes: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    order: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    family: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    genus: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    species: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        defaultValue: 'http://www.happybirthdaycake2015.com/wp-content/uploads/2017/08/http-2F2Fmashable.com2Fwp-content2Fgallery2Fcatmemes2Fserious20cat-min-300x207.jpg'
    }
})