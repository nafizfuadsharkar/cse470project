import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import useAxiosPublic from './useAxiosPublic';
import { AuthContext } from '../AuthProvider/AuthProvider';

export default function useEnrolledCourse() {

  const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const { data: enrolled = [], refetch } = useQuery({
        queryKey: ["enrolled"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/enrolled/${user?.email}`);
          console.log(res.data);
          return res.data;
        },
      });
  return [enrolled, refetch]
}
