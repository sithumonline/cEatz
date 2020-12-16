import axios from "axios";
import { environment } from "../configs/environment";

export async function AddARestaurant(data: {
  ResID: string;
  Name: string;
  Phone: string;
  Location: string;
  ImgURL: string;
}) {
  console.log(data);
  await axios
    .post(environment.baseURL + "/restaurants/", data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export async function UpdateARestaurant(
  id: string,
  data: { ResID: any; Name: any; Phone: any; Location: any; ImgURL: any }
) {
  console.log(data);
  await axios
    .put(environment.baseURL + "/restaurants/" + id, data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export async function DeleteARestaurant(id: string) {
  await axios
    .delete(environment.baseURL + "/restaurants/" + id)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}
