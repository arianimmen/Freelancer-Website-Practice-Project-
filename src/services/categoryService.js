import http from "./httpService";

export function getCategoryApi(data) {
  return http
    .get("/category/list", data)
    .then(({ data }) => data.data);
}
