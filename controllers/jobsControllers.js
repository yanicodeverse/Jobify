const createJob = async (req, res) => {
    res.send('create job')
}

const getAllJobs = async (req, res) => {
    res.send('get all job')
}

const deleteJob = async (req, res) => {
    res.send('delete job')
}

const updateJob = async (req, res) => {
    res.send('update job')
}

const showStats = async (req, res) => {
    res.send('job stats')
}

export {
    createJob,
    getAllJobs,
    deleteJob,
    updateJob,
    showStats
}