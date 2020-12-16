const URL = process.env.REACT_APP_BASEURL;
let bURL = "https://stormy-depths-99062.herokuapp.com/v1";

if (URL) {
  bURL = URL;
}

export const environment = {
  baseURL: bURL,
};
