import axios from "axios"
import { useEffect, useState } from "react"

export const ProductPage=()=>{
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);

    const [loader, setLoader] =useState(false)
    useEffect(()=>{ (async()=>{
        try{
            setLoader(true)
            const resProducts = await axios.get('/api/products') 
            const resCategories = await axios.get('/api/categories')
            setProduct(resProducts.data.products)
            // setCategories(resCategories.data)
            setCategory(resCategories.data.categories)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoader(false)
        }
        })()
    },[])
    return (
    <div>
        <h1>All Categories</h1>
        {category.map((eachCategory)=>(<p key={eachCategory.id}>{eachCategory.categoryName}</p>))}
        {loader?'loading...':''}
        <h1>Product page</h1>
        {product.map(each=>(<div style={{border:'1px solid'}} key={each._id}>
            <h4>{each.title}</h4>
            <p>author: {each.author}</p>
            <p>{each.categoryName}</p>
            <p>{each.price}</p>
            </div>
            )
        )}
        
    </div>)
}