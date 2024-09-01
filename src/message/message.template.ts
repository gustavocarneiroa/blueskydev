import { CONCEPTS, FRAMEWORKS, FRAMEWORKS_BACKEND, FRAMEWORKS_FRONTEND, FRAMEWORKS_MOBILE, LANGUAGES, TECH } from "./message.grapho";

type MessageTemplate = {
    message: string;
    recurrenceWithSameVariables: boolean;
};
const messageTemplates: MessageTemplate[] = [
    {
        message: `Galerinha… já existe algum tipo de roadmap de estudos de {{TECHS}} pra pegar trampo na gringa?`,
        recurrenceWithSameVariables: false,
    },
    {
        message: `se {{TECHS}} fosse ruim ninguém usava`,
        recurrenceWithSameVariables: false,
    },
    {
        message: `me falta motivação pra estudar {{LANGUAGES}}`,
        recurrenceWithSameVariables: false,
    },
    {
        message: `se vc está começando agora na área de ti e quer ser dev, eu sugiro de forma imediata aprender {{TECHS}}.
não vai demorar muito pra vc arrumar algo na área. 

não conheço uma pessoa que trampa com {{TECHS}} desempregado.

vai que é sucesso !!!!!!!!`,
        recurrenceWithSameVariables: false,
    },
    {
        message: '{{LANGUAGES}} morreu né?',
        recurrenceWithSameVariables: false,
    },
    {
        message: 'Pai, tira de mim essa vontade de aprender {{FRAMEWORKS}}!',
        recurrenceWithSameVariables: false,
    },
    {
        message: 'será que a galera de {{FRAMEWORKS_BACKEND}} daqui vai ser insuportavel como era no twitter?',
        recurrenceWithSameVariables: false,
    },
    {
        message: "Já que mataram o Twitter/X tá na hora de matar {{LANGUAGES}} junto",
        recurrenceWithSameVariables: false,
    },
    {
        message: `o front desse app é feio demais cara kkkkkk

parece até que foi feito com {{FRAMEWORKS_FRONTEND}} kkkkkk`,
        recurrenceWithSameVariables: false,
    },
    {
        message: "Alexandre de Moraes podia multar quem programa em {{LANGUAGES}} com até o dobro da multa pela VPN. EU acharia muito justo.",
        recurrenceWithSameVariables: false,
    },
    {
        message: "Vamo começar: não pode usar {{CONCEPTS}}",
        recurrenceWithSameVariables: false,
    },
    {
        message: "Dito isto, {{LANGUAGES}} deveria ser banido junto com o twitter, não passa de gambiarra",
        recurrenceWithSameVariables: false,
    },
    {
        message: "Sênior de dois anos em {{FRAMEWORKS}} não existe.",
        recurrenceWithSameVariables: false,
    }
];

function replaceTemplateVariables(text: string): string {
    const replacedText =  text
        .replace(/{{LANGUAGES}}/g, getRandomItemFromArray(LANGUAGES))
        .replace(/{{FRAMEWORKS_BACKEND}}/g, getRandomItemFromArray(FRAMEWORKS_BACKEND))
        .replace(/{{FRAMEWORKS_FRONTEND}}/g, getRandomItemFromArray(FRAMEWORKS_FRONTEND))
        .replace(/{{FRAMEWORKS_MOBILE}}/g, getRandomItemFromArray(FRAMEWORKS_MOBILE))
        .replace(/{{FRAMEWORKS}}/g, getRandomItemFromArray(FRAMEWORKS))
        .replace(/{{CONCEPTS}}/g, getRandomItemFromArray(CONCEPTS))
        .replace(/{{TECHS}}/g, getRandomItemFromArray(TECH));

    console.log({ text, replaceText: replacedText });

    return replacedText
}

function getRandomItemFromArray<T = any>(array: T[]): T {
    const randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
}

export function getMessageTemplate() {
    const randomTemplate = getRandomItemFromArray<MessageTemplate>(messageTemplates);
    return replaceTemplateVariables(randomTemplate.message);
}