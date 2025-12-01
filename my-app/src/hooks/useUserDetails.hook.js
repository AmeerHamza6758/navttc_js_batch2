import { axiosInstance } from "../libs/axios.config";

export const useUserHook = () => {

  async function getAllUsers() {
    const res = await axiosInstance.get('/users');
    console.log(res, 'res of users data')
    return res.data;
  }

  async function getUserById(id) {
    const res = await axiosInstance.get(`/users/${id}`);
    console.log(res, 'res of single user data');
    return res.data;
  }

  async function updateUserDetails(id, payload) {
    const res = await axiosInstance.put(`/users/${id}`, payload);
    console.log(res, 'res of updated user data');
    return res.data;
  }

  async function deleteUserDetails(id) {
    const res = await axiosInstance.delete(`/users/${id}`);
    console.log(res, 'res of deleted user data');
    return res.data;
  }

  async function createUserDetails(payload) {
    const res = await axiosInstance.post(`/users`, payload);
    console.log(res, 'res of created user data');
    return res.data;
  }

  return {
    getAllUsers,
    getUserById,
    updateUserDetails,
    deleteUserDetails,
    createUserDetails
  };
};
