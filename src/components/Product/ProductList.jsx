import Product from "./Product";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductList(){
    const [loading, setLoading]=useState(null)
    const [error, setError]=useState(null)
    const [data, setData]=useState(null)

    const fetchproduct=() =>{
                setLoading(true)

                axios.get("https://fakestoreapi.com/products")
                .then((response) =>{
                    setData(response.data)
                })
                .catch((error) =>setError(error))
                .finally()

                setLoading(false)
    }


    useEffect(
        fetchproduct,
    )

    if(loading){
        return(
            <span className="loading loading-dots loading-xl"></span>
        )
    }

    if(error){
        return(
            <div className="bg-red-700">
                <h1 className="">
                    Erreur lors du Chargement des donnees
                </h1>
            </div>
        )
    }

    if(data){
        return(
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                { data.map(p=>
                    <div class="p-4"><Product title={p.title} id={p.id} price={p.price} image={p.image}  /></div>
                )

                }

            </div>
        )
    }

}