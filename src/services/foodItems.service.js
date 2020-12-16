import axios from "axios";
import { environment } from "../configs/environment";

export async function AddAFoodItem(data) {
  console.log(data);
  await axios
    .post(environment.baseURL + "/food-items/", data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export async function UpdateAFoodItem(id, data) {
  console.log(data);
  await axios
    .put(environment.baseURL + "/food-items/" + id, data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export async function DeleteAFoodItem(id) {
  await axios
    .delete(environment.baseURL + "/food-items/" + id)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}
