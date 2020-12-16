import axios from "axios";
import { environment } from "../configs/environment";

export async function AddAOrder(data: {
  CusID: string;
  OrdID: string;
  ResID: string;
  NoItems: string;
  paymentWay: string;
}) {
  console.log(data);
  await axios
    .post(environment.baseURL + "/orders/", data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export async function UpdateAOrder(
  id: string,
  data: { CusID: any; OrdID: any; ResID: any; NoItems: any; paymentWay: any }
) {
  console.log(data);
  await axios
    .put(environment.baseURL + "/orders/" + id, data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export async function DeleteAOrder(id: string) {
  await axios
    .delete(environment.baseURL + "/orders/" + id)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}
