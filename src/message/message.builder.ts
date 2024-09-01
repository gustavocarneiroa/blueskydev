import { getMessageTemplate } from "./message.template"

export function generateProblematicMessage() {
    const message = getMessageTemplate() 
    
    return message + addBolhaDevFooter();
}







function addBolhaDevFooter() {
    return`

#bolhadev`
}