import { useState, useEffect } from "react";

//Custom hook can use our built in hook 
function useCurrencyInfo(currency){ //This Hook will return an data 
   const [data, setData]=useState({}); 
     useEffect(()=>{ 
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`) //Data is in string form
        .then((res)=> res.json())//Converting data in json 
        .then((res)=> setData(res[currency])) 
     },[currency])//When Currency will change that time only it will cl so it is dependencies 
     return data;
} 

export default useCurrencyInfo;