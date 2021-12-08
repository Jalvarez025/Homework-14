const sequelize = require("../config/connection");
const { Sequelize, Model, Datatypes} = require ('sequelize')

class Comment extends Model {

}

Comment.init(
    {
        body: {
            type: Datatypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize
    }
)

module.exports = Comment