export const BaseUrl = "https://labeddit.herokuapp.com";

export const headers = {
  headers: { Authorization: "Content-Type: application/json" },
};
export const token = localStorage.getItem("token");
export const headerPosts = {
  headers: {
    Authorization: token,
    // Authorization: "Content-Type: application/json",
  },
};
