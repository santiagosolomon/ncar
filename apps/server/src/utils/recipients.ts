// utils/recipients.ts
const commonRecipients = [
    // "dein.petertest@gmail.com",
    // "junnel.montelibanotest@gmail.com",
    // "kenneth.cruztest@gmail.com",
    // "paul.cuaresmatest@gmail.com",
    // "ybethtest@gmail.com",
    // "sheena.palmontest@gmail.com",
    // "vhertest@gmail.com",
    // "rea.siwatest@gmail.com",
    // "katherine.valenatest@gmail.com",
    // "jocelyntest@gmail.com",
    // "sernan.mercadotest@gmail.com",
    // "jay.delafuentetest@gmail.com",
    "solomon.santiago@petbowe.com.ph",
    // "liza.antoniotest@gmail.com",
    // "rodolfo.concepciontest@gmail.com",
    // "joshua.deleontest@gmail.com",
    // "monsantiago09@gmail.com"
];

const customerExtra = [
    //   "miles@petbowe.com.ph",
    // "rafatest@gmail.com",
    // "melatest@gmail.com",
    // "merry.dejesustest@gmail.com",
    "junnel.montelibano@petbowe.com.ph",
];

export function getRecipients(concernType: string) {
    if (concernType === "customer") {
        return [...commonRecipients, ...customerExtra];
    }
    return [...commonRecipients];
}
