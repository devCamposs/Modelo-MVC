const path = require('path')

const homeControllers = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'))
    }
}

module.exports = homeControllers