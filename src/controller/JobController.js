const JobModel = require('../models/JobModel')

const readJob = async (req, res) => {
    try {
        const data = await JobModel.readJob()
        if (data.length == 0) {
            res.status(404).json({
                status: 'failed',
                message: 'Data not found'
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Comment read successfully',
            data: data
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Bad request',
            serverMessage: error.message
        });
    }
}

module.exports = {
    readJob
}