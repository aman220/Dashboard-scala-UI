import axios from 'axios';

const getUserDetails = async () => {
    const id = localStorage.getItem("key");
  try {
    const response = await axios.get(
      `http://localhost:7000/api/v1/users/${id}`,
    );
    if (response.data.success) {
      return response.data.user;
    } else {
      throw new Error("Failed to fetch user data: " + response.data.message);
    }
  } catch (error) {
    throw new Error("Error fetching user data: " + error.message);
  }
};

export default getUserDetails;
