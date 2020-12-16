import axios from "axios";
import { environment } from "../configs/environment";

export async function AddARestaurant(data) {
  console.log(data);
  await axios
    .post(environment.baseURL + "/restaurants/", data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export async function UpdateARestaurant(id, data) {
  console.log(data);
  await axios
    .put(environment.baseURL + "/restaurants/" + id, data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export async function DeleteARestaurant(id) {
  await axios
    .delete(environment.baseURL + "/restaurants/" + id)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}
