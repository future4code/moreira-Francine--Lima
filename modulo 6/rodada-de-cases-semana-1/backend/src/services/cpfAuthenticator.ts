function VerifyCPF(strCpf: string): boolean {
  strCpf = strCpf.replace(/[^0-9]+/g, "");
  let soma: number;
  let resto: number;
  soma = 0;

  //test for same digit cpf
  if (
    strCpf.length != 11 ||
    strCpf == "00000000000" ||
    strCpf == "11111111111" ||
    strCpf == "22222222222" ||
    strCpf == "33333333333" ||
    strCpf == "44444444444" ||
    strCpf == "55555555555" ||
    strCpf == "66666666666" ||
    strCpf == "77777777777" ||
    strCpf == "88888888888" ||
    strCpf == "99999999999"
  ) {
    return false;
  }

  for (let i = 1; i <= 9; i++) {
    soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
  }

  resto = soma % 11;

  if (resto == 10 || resto == 11 || resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }

  if (resto != parseInt(strCpf.substring(9, 10))) {
    return false;
  }

  soma = 0;

  for (let i = 1; i <= 10; i++) {
    soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
  }
  resto = soma % 11;

  if (resto == 10 || resto == 11 || resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }

  if (resto != parseInt(strCpf.substring(10, 11))) {
    return false;
  }

  return true;
}
export default VerifyCPF;
