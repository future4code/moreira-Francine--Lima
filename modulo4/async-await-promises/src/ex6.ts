import axios from "axios";
import { baseUrl } from "./baseUrl";
import { user } from "./type";

//6a)
//o promise.all é um combinador de promessas, que retorna um array das promises que esperamos, caso uma delas falhe ao responder ele fara como um um curto circuito e exibirá o erro correspondente.
//o promise.all retorna um array com os valores das promises.

//b)
//A vantagem é que não há grande discrepancia na entrega das promises(renderização)
//também por ser um processo assíncrono pode rodar no background enquanto outras funções rodam também.
//caso uma das promises não seja entrega um erro será gerado e o código não vai simplesmente quebrar.

//c)

const sendNotifications = async (
  users: user[],
  message: string
): Promise<void> => {
  try {
    const promises = users.map((user) => {
      return axios.post(`${baseUrl}/notifications`, {
        subscriberId: user.id,
        message: message,
      });
    });

    await Promise.all(promises);
    // console.log(promises)
  } catch (e: any) {
    console.log(e);
    console.log("Error please try again.");
  }
};

const main = async () => {
  await sendNotifications(
    [
      {
        id: "eb98add9-6981-41d6-8d9f-d63258486296",
        email: "pais.basco@labenu.com.br",
        name: "País, o Basco",
      },
    ],
    "Olá"
  );
};
main();
