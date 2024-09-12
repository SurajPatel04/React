import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github(){

    const data = useLoaderData()
    
    // const [data, setdata] = useState({})
    // useEffect(() => {
    //     fetch("https://api.github.com/users/SurajPatel04")
    //     .then((res)=>res.json()).then((data) => {
    //         setdata(data)
    //         console.log(data)
    //     })
    // },[])
    return(
        <div className='text-center'>
            GitHub Profile Name: {data.name}
            <br />GitHub followers: {data.followers}
            <img src={data.avatar_url} alt="" />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch("https://api.github.com/users/SurajPatel04")
    return response.json()
}