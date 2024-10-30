const AppError = require('./app_error')

function launch_error(message,status) {
    throw AppError.create(message, status)
}

module.exports = launch_error
