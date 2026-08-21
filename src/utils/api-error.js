class ApiError extends Error{
    constructor(statusCode, message = "somthing goes wrong", errors= [], stack= "", ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.errors = errors
        this.success = false
        if(stack){
            this.stack = stack
        }else{
            this.stack = Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}