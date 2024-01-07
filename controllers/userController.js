const userModel = require('../models/userModel')
exports.signUp = async (req, res) => {
    try {
        const { fatherName, motherName, childrenNames } = req.body;
        const files = req.files;
        const file = req.file
        console.log('Files:', files); // Add this line to log the files

        // Check if required fields are present
        if (!fatherName || !motherName || !childrenNames || !files) {
            return res.status(400).json({
                message: 'All fields are required.',
            });
        }

        // Create a user instance
        const user = new userModel({
            fatherName,
            motherName,
            childrenNames: childrenNames.split(','), // Assuming childrenNames is a comma-separated string
            fatherPicture: file.filename, // Access the first file in the array
            motherPicture: file.filename, // Access the first file in the array
            childrenPictures: files['childrenPictures'].map((file) => file.filename),
        });

        // Save the user to the database
        await user.save();

        res.status(201).json({
            message: 'Successfully signed up',
            data: user,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message,
        });
    }
};
