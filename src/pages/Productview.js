import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';

const Productview = () => {

    const [productById, setProductById] = useState({});

    const {productId} = useParams();

    useEffect(() => {
        getproductById();
    },[])


    const getproductById = () => {
        Axios.get(`http://localhost:8080/api/v1/getproduct/${productId}`)
        .then(response =>{
            setProductById(response.data);
        })
        .catch(error => {
            console.error("Axios error: ", error)
        })
    }

    const navigate = useNavigate();

    const backToHomeClick = () =>{
        navigate("/");
    }

  return (
    <div className='flex mx-[150px] gap-10 my-10'>
        <div>
            <ArrowBackIcon onClick={backToHomeClick} className=' hover:bg-slate-200 rounded-xl'/>
        </div>
            <div>
            <img src={`data:${productById.imageType};base64,${productById.imageDate}`} alt={productById.description} className='w-[400px] h-[500px] rounded-3xl'></img>
            </div>
        <div className='text-left font-bold leading-10 my-3'>
            <h1 className='text-5xl'>LKR {productById.price}.00</h1>
            <h2 className='text-4xl bg-[#8DD4F1] my-3 w-[200px]'>Installment</h2>
            <h2 className='text-4xl mb-3'> {(productById.price)/3}x 3</h2>
            <p className='text-xl mb-3'>{productById.description}</p>
            <div className='flex'>
                <StarIcon className='text-yellow-500'/>
                <StarIcon className='text-yellow-500'/>
                <StarIcon className='text-yellow-500'/>
                <StarIcon className='text-yellow-500'/>
                <StarIcon className='text-yellow-500'/>
                </div>
            <div className='grid text-4xl w-[400px]'>
            <button className='bg-[#8DD4F1] rounded-full my-4 py-3'>
                Buy now
            </button>
            <button className='text-[#06B2F6] bg-[#D9D9D9] my-4 py-3 rounded-full border-[#06B2F6] border-2'>
                Add to cart
            </button>
            </div>
        </div>
    </div>
  )
}

export default Productview