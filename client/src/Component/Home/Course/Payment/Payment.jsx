import React, {  useEffect, useState } from 'react';
import useAxiosPublic from '../../../../Hook/useAxiosPublic';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe("pk_test_51OEWOiDrduCbZi0VLPT7T9eLn2TvSS9tXvPPjYobROOoRrllCLoTp2vyShnGnVvM7ahdy3x44PvHK3tQZXfFNR6P00oSh3z0UK")

const Payment = () => {
    window.scrollTo(0, 0);
    const {id} = useParams()
    const axiosPublic =  useAxiosPublic()
    const [total, setTotal] = useState(null)
    const [enrolledCourse, setEnrolled] = useState([])
    console.log(id)
    useEffect(() => {
        axiosPublic.get(`/payment/${id}`)
        .then(res => {
            console.log(res.data.coursePrice)
            setTotal(res.data.coursePrice)
            setEnrolled(res.data)
            
        })
    }, [])




    return (
        <>
        <div className=' max-w-sm mx-auto pt-[130px] md:pt-[160px]  h-screen'>
            <div className=' pb-14'>
                <h2 className=' text-3xl md:text-4xl font-bold text-center'>Payment </h2>
            </div>
            <Elements stripe={stripePromise}>
              <CheckoutForm total={total} enroll={enrolledCourse} />
            </Elements>
        </div>
        </>
    );
};

export default Payment;