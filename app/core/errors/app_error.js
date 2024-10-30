class AppError {

    constructor(message, statusCode, details){
       this.message = message
       this.statusCode = statusCode
     }
     create(message, statusCode){
       return new AppError(message, statusCode)
     }
   }

   module.exports =  new AppError()
