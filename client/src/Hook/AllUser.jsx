import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AllUser = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const {data : users = [], refetch} = useQuery({
        queryKey : ["users", user?.email],
        queryFn : async () => {
            const res = await axiosSecure.get("/allUser", {
                headers : {
                    authorization : `Bearer ${localStorage.getItem("access-token")}`
                }
            })
            return res.data
        }
    })
    return [users, refetch]
};

export default AllUser;