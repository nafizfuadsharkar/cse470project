import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';

const useCourse = () => {
    
    const axiosPublic = useAxiosPublic()
    const {data : course = []} = useQuery({
        queryKey : ["course"],
        queryFn : async () => {
            const res =  await axiosPublic.get("/course")
            console.log(res.data)
            return res.data
        }
    })
    return [course]
};

export default useCourse;