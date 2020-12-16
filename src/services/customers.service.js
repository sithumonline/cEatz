import axios from "axios";
import { environment } from "../configs/environment";

export async function AddACustomers(data) {
  console.log(data);
  await axios
    .post(environment.baseURL + "/customers/", data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export async function UpdateACustomers(id, data) {
  console.log(data);
  await axios
    .put(environment.baseURL + "/customers/" + id, data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export async function DeleteACustomers(id) {
  await axios
    .delete(environment.baseURL + "/customers/" + id)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}
