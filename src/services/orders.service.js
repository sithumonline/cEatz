import axios from "axios";
import { environment } from "../configs/environment";

export async function AddAOrder(data) {
  console.log(data);
  await axios
    .post(environment.baseURL + "/orders/", data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export async function UpdateAOrder(id, data) {
  console.log(data);
  await axios
    .put(environment.baseURL + "/orders/" + id, data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export async function DeleteAOrder(id) {
  await axios
    .delete(environment.baseURL + "/orders/" + id)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}
