const LS_KEY = "feedback-form-state"

const formElement = document.querySelector(".feedback-form")
const textareaElement = document.querySelector("textarea")

function readFormData (form) {
    const message = form.message.value.trim()
    const email = form.email.value.replaceAll(' ', '')
    
    return {
        email,
        message
    }   
}


formElement.addEventListener('submit', (event) => {
    
    console.log(readFormData(formElement))
    event.preventDefault()
    localStorage.removeItem(LS_KEY)
    formElement.reset()
})

formElement.addEventListener('input', (event) => {
    const data = readFormData(event.currentTarget)
    localStorage.setItem(LS_KEY, JSON.stringify(data))

})



const rawData = localStorage.getItem(LS_KEY)
if(rawData) {
    const data = JSON.parse(rawData)
    formElement.email.value = data.email
    formElement.message.value = data.message
}