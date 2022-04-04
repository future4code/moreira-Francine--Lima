type Info = {
  name: string;
  email: string;
  role: string;
};

const info: Info[] = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];

function admin(info: Info[]): string[] {
  const adminEmails: Info[] = info.filter((person) => {
    return person.role === "admin";
  });
  const adminArr: string[] = adminEmails.map((admin) => {
    return admin.email;
  });

  return adminArr;
}

console.log(admin(info));
