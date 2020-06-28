import Joi from '@hapi/joi'

// validation schema for js objects
const jsValidationSchema = Joi.object({
    'base-currency': Joi.number().min(1)
})


// custom error messages
const customErrorMessages = {
    'number.base': 'Please insert a number'
}

export default {
    jsValidationSchema,
    customErrorMessages
}