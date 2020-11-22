import React, { useEffect, useState } from 'react';



const useFetch=(url)=>{
    const [data, setData] = useState(null)
    const [loading, setloading] = useState(true)
    useEffect(() => {
        (
            async () => {
                const response = await fetch(url);
                const data = await response.json();
                // console.log(data);
                setData(data)
                setloading(false)

            }
        )()
    })
    return {
        data,
        loading
    }
}

const Demo6 = () => {
    const {data,loading} =useFetch('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
    
    return (
        <div>
            {loading ? <div>...Loading</div> : data.chengpinDetails[0].title }
        </div>
    )
}

export default Demo6