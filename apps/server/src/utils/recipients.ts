// utils/recipients.ts
const commonRecipients = [
    //   "dein.peter@petbowe.com.ph",
    // "junnel.montelibano@petbowe.com.ph",
    //   "kenneth.cruz@petbowe.com.ph",
    //   "paul.cuaresma@petbowe.com.ph",
    //   "ybeth@petbowe.com.ph",
    //   "sheena.palmon@petbowe.com.ph",
    //   "vher@petbowe.com.ph",
    //   "rea.siwa@petbowe.com.ph",
    //   "katherine.valena@petbowe.com.ph",
    //   "jocelyn@petbowe.com.ph",
    //   "sernan.mercado@petbowe.com.ph",
    //   "jay.delafuente@petbowe.com.ph",
    "solomon.santiago@petbowe.com.ph",
    //   "liza.antonio@petbowe.com.ph",
    //   "rodolfo.concepcion@petbowe.com.ph",
    //   "joshua.deleon@petbowe.com.ph",
];

const customerExtra = [
    //   "miles@petbowe.com.ph",
    //   "rafa@petbowe.com.ph",
    //   "mel@petbowe.com.ph",
    //   "merry.dejesus@petbowe.com.ph",
    "junnel.montelibano@petbowe.com.ph",
];

export function getRecipients(concernType: string) {
    if (concernType === "customer") {
        return [...commonRecipients, ...customerExtra];
    }
    return [...commonRecipients];
}
