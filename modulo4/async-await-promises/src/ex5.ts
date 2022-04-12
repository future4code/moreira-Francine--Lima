import axios from "axios";
import { baseUrl } from "./baseUrl";
import { user } from "./type";

//5a)

const sendNotifications = async (
  users: user[],
  message: string
): Promise<void> => {
  try {
    //uso do for of para loopar sobre os usuários
    for (const user of users) {
      await axios.post(`${baseUrl}/notifications`, {
        subscriberId: user.id,
        message: message,
      });
    }

    console.log("All notifications sent");
  } catch {
    console.log("Error please try again.");
  }
};

const main = async () => {
   await sendNotifications(
  [{id:"eb98add9-6981-41d6-8d9f-d63258486296",
    email: 'pais.basco@labenu.com.br',
    name: 'País, o Basco'}], "Olá")
}
main()