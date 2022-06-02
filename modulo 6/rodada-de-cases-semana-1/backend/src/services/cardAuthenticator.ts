export function validateCVV(cvv: string) {
  if (cvv.length === 3) {
    return true;
  } else {
    return false;
  }
}
export function verifyExpDate(date: string) {
  const splitDate = date.split("/");
  const splitMonth = Number(splitDate[0]) + 1;
  const splitYear = Number(splitDate[1]);

  const todaysDate = new Date();
  const todaysMonth = todaysDate.getMonth();
  const todaysYear = todaysDate.getFullYear();
  if (splitYear < todaysYear || splitMonth < todaysMonth) {
    return false;
  }
  return true;
}

function cardAuthenticator(numberCard: string): boolean {
  if (!numberCard) {
    throw new Error(
      "O campo de 'numero do cartão' não foi passado corretamente"
    );
  }
  const validateAmericanExpress = /^(?:3[47][0-9]{13})$/g;
  const validateVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/g;
  const validateMasterCard = /^(?:5[1-5][0-9]{14})$/g;
  const validateDiscovery = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/g;
  const validateDinersClub = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/g;
  const validateJCB = /^(?:(?:2131|1800|35\d{3})\d{11})$/g;

  if (numberCard.match(validateAmericanExpress)) {
    return true; //APENAS NUMEROS QUE COMECEM COM 34 OU 37, COMPRIMENTO DE 15 DIGITOS
  }
  if (numberCard.match(validateVisa)) {
    return true; //APENAS NUMERO QUE COMECEM COM 4, COMPRIMENTO DE 13 OU 16 DIGITOS
  }
  if (numberCard.match(validateMasterCard)) {
    return true; //APENAS NUMEROS QUE COMECEM COM 51 OU 55, COMPRIMENTO DE 16 DIGITOS
  }
  if (numberCard.match(validateDiscovery)) {
    return true; //APENAS NUMEROS QUE COMECEM COM 6011, COMPRIMENTO DE 16 DIGITOS OU COMEÇANDO COM 5, COMPRIMENTO DE 15 DIGITOS
  }
  if (numberCard.match(validateDinersClub)) {
    return true; //APENAS NUMEROS QUE COMECEM COM 300 A 305, 36 OU 38, COMPRIMENTO DE 14 DIGITOS
  }
  if (numberCard.match(validateJCB)) {
    return true; //APENAS NUMEROS QUE COMECEM COM 2131 OU 1800, COMPRIMENTO DE 15 DIGITOS OU COMEÇANDO COM 35, COMPRIMENTO DE 16 DIGITOS
  } else {
    return false;
  }
}

export default cardAuthenticator;
