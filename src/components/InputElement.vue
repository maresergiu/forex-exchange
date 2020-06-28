<template>
    <div>
        <label
            :for="inputId"
            :class="{'hidden': hideLabel}">
            {{label}}
        </label>
        <input
            type="text"
            :id="inputId"
            :name="inputName"
            :placeholder="placeholder"
            class="input-element"
            @keyup="handleKeyUp" />
        <div class="input-element_error">
            <p
                v-for="(error,index) in this.inputErrors"
                :key="error.key + index"
                class="text">
                {{validator[error.type]}}
            </p>
        </div>
    </div>
</template>

<script>
import Validator from '../helpers/jsValidationSchema.js'

export default {
    name: 'InputElement',
    props: {
        label: { // the label of the input
            type: String,
            required: true
        },
        inputId: { // the input ID
            type: String,
            required: true
        },
        inputName: { // the input name
            type: String,
            required: true
        },
        inputType: { // the input name
            type: String,
            required: true
        },
        hideLabel: { // toggle the label visibility
            type: Boolean,
            default: false
        },
        placeholder: { // the input placeholder
            type: String,
            default: ''
        },
        triggerValidation: { // trigger input validation based on the current value
            type: Number,
            required: true
        }
    },
    data () {
        return {
            inputErrors: [],                               // holds the errors after the input validated
            validator: {...Validator.customErrorMessages}, // custom validation messages
            inputValue: ''                                 // input value
        }
    },
    watch: {
        // triggers the input validation when it's incremented
        triggerValidation (){
            this.validateInput()
        }
    },
    methods: {
        // validate input
        validateInput (){
            const objToValidate = {}
            objToValidate[this.inputName] = this.inputValue

            const validation = Validator.jsValidationSchema.validate(objToValidate);

            this.inputErrors = validation.error ? [...validation.error.details] : []

            this.updateApplication(validation, objToValidate)
        },
        // emit the result of validation
        updateApplication (validation, validatedObj){
            if(validation.error) {
                this.$emit('emittedErrorInput', {
                    name: this.inputName,
                    value: validatedObj[this.inputName]
                })
            }else{
                this.$emit('emittedValidInput', {
                    name: this.inputName,
                    value: validatedObj[this.inputName]
                })
            }
        },
        handleKeyUp (event){
            if(this.inputType === 'number'){
                this.inputValue = parseFloat(event.target.value.trim())
            }else{
                this.inputValue = event.target.value.trim()
            }

            this.validateInput()
        }
    }
}
</script>