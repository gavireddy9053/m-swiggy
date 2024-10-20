import { useEffect, useState } from "react";

function useGetData(a){
    let [apiData,setApiData] = useState(null)

    async function fetchData(){
        let data = await fetch(a)
        let jsonData = await data.json()
   setApiData(jsonData)

    }

    useEffect(()=>{
fetchData()
    },[])
return apiData

}

export default useGetData