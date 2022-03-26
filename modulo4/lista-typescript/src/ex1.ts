function myInfo(name: string, birthDate: string): string {
  const day: string[] = birthDate.split("/", 3);
  return `Olá me chamo ${name}, nasci no dia ${day[0]} do mês de ${day[1]} do ano de ${day[2]}.`;
}
console.log(myInfo("Fran", "19/12/1990"));
