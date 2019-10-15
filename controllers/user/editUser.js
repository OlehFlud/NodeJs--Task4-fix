const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {

        const { user_id } = req.body;

        const parameters = req.body;

        const UserModel = dataBase.getModel('User');

        await UserModel.update(parameters,{
            where: {
                id: user_id
        }});

        res.json('User was edited');
    } catch (e) {
        res.status(400).json(e.message);
    }
};
