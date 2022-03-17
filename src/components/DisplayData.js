import React, { useEffect, useState } from "react";
import InputBox from "./InputBox";

const DisplayData = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // const [dataList, setDataList] = useState(items);
  // console.table(dataList);

  useEffect(() => {
    fetch("https://62322ad3c5ec1188ad2c3f6d.mockapi.io/ambercontacts/Student")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
        )
      }, [])

  function procChange(e) {
    const filterList = items.filter((value)=> value.indexOf(e.target.value)!== -1);
    setItems(filterList);
 }

  if (error) { return <div>Error: {error.message}</div> }
  else if (!isLoaded) { return <div>Loading...</div>; }
  else {
    return (
      <>
       <div className='w-full flex justify-center items-center'>
         <InputBox name='txtSearch' type='text' placeholder="Search" onChange={procChange}/>
      </div>
      <table className="table-fixed w-3/4">
        <thead className="border-2">
          <tr className=" border-y-2">
            <th className="border-x-2">NAME</th>
            <th className="border-x-2">ADDRESS</th>
            <th className="border-x-2">COHORT</th>
          </tr>
        </thead>
        <tbody className="border-x-2">
          {items.map(item => (
            <tr key={item.id} className='hover:bg-white uppercase border-y-2'>
              <td className="px-4 py-0 border-x-2 w-1/2 hover:bg-white">{item.fullname}</td>
              <td className="px-4 py-0 border-x-2 w-1/2 hover:bg-white">{item.address}</td>
              <td className="px-4 py-0 border-x-2 w-1/2 hover:bg-white">{item.cohort}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
    );
  }
};

export default DisplayData;


