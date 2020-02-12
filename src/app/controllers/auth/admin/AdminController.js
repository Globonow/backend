import Admin from '../../models/Admin';
import User from '../../../models/User';

class AdminController {

    async update(req, res){

        const { email, oldPassword } = req.body;
        
        const admin = await Admin.findByPk(req.userId);

        if (email !== admin.email){
            const adminExists = await Admin.findOne({
                where: { email }
            });
            if (adminExists) return res.status(400).json({error: "Admin already exists"});
        }

        if (oldPassword && !(await admin.checkPassword(oldPassword))){
            return res.status(401).json({error: "Password does not match"});
        }

        await user.update(req.body);

        const { id, name } = await Admin.findByPk(req.userId);

        return res.json({
            id,
            name,
            email
        });
    }

}

export default new AdminController();