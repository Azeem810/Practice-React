import React from 'react'

const Home = () => {

  let arr = [55,2,778,4,575,63];
  let arr1 = [5,288,4568,49,175,93];

  const getSecondLargest = (arr)=> {
    let secondLargest = [...new Set(arr)].sort((a,b)=>a-b);
    return secondLargest[secondLargest.length - 2]
  }
  console.warn('Sorted Array1',getSecondLargest(arr));
  console.warn('Sorted Array1',getSecondLargest(arr1));
 
  
  return (
    <div className='home'>
      <h1 id='home-heading' className='home-heading'>Home Page</h1>

    </div>
  );
}

export default Home;
