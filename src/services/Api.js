import axios from "axios";

axios.defaults.baseURL = "https://6457897e0c15cb14820ae629.mockapi.io";

const fetchUsers = async () => {
  try {
    const response = await axios.get("/users");
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const Api = {
  fetchUsers,
};

export default Api;
