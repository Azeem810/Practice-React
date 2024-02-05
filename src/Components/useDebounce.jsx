import React,{useState,useEffect} from "react";

const useDebounce = (callBack,delay)=>{
const [debounceValue,setDebouncevalue]=useState(null);
useEffect(()=>{
  let debounce = setTimeout(()=>{
     callBack(debounceValue)
  },delay)

  return (()=>{
    clearTimeout(debounce);
  });

},[debounceValue,callBack,delay]);

const debounceData = (event)=>{
    setDebouncevalue(event.target.value)
}
return debounceData;
}

export default useDebounce;