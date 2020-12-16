import axios from "axios";
import { environment } from "../configs/environment";

export async function AddAFoodItem(data: {
  ItmID: string;
  ResID: string;
  Name: string;
  ItmKind: string;
  smallPrice: string;
  largePrice: string;
  ImgURL: string;
}) {
  console.log(data);
  await axios
    .post(environment.baseURL + "/food-items/", data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export async function UpdateAFoodItem(
  id: string,
  data: {
    ItmID: any;
    ResID: any;
    Name: any;
    ItmKind: any;
    smallPrice: any;
    largePrice: any;
    ImgURL: any;
  }
) {
  console.log(data);
  await axios
    .put(environment.baseURL + "/food-items/" + id, data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export async function DeleteAFoodItem(id: string) {
  await axios
    .delete(environment.baseURL + "/food-items/" + id)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}
