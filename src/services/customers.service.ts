import axios from "axios";
import { environment } from "../configs/environment";

export async function AddACustomers(data: {
  CusID: string;
  FName: string;
  LName: string;
  Phone: string;
  Mail: string;
}) {
  console.log(data);
  await axios
    .post(environment.baseURL + "/customers/", data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export async function UpdateACustomers(
  id: string,
  data: { CusID: any; FName: any; LName: any; Phone: any; Mail: any }
) {
  console.log(data);
  await axios
    .put(environment.baseURL + "/customers/" + id, data)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}

export async function DeleteACustomers(id: string) {
  await axios
    .delete(environment.baseURL + "/customers/" + id)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err.message));
}
