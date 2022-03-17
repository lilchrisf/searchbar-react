import axios from 'axios';
import React, { useState } from 'react';
import Button from './components/Button';
import InputBox from './components/InputBox'
import DisplayData from './components/DisplayData';

function App() {

  const [personData, setPersonData] = useState({
    fullname: '',
    address: '',
    cohort: ''
  });
  const baseURL = 'https://62322ad3c5ec1188ad2c3f6d.mockapi.io/ambercontacts/Student';

  const personAmber = {
    fullname: personData.fullname,
    address: personData.address,
    cohort: personData.cohort
  };

  function change(event) {
    // const currentValue = event.target.value;
    setPersonData({
      ...personData,
      [event.target.name]: event.target.value
    });
  }


  function submit(e) {
    e.preventDefault();
    // console.log(`Name ${personData.fullname}`);
    console.log(personData);

    axios.post(baseURL, personAmber).
      then((response) => {
        console.log(response.data);
        // setPersonData(response.data)
      }).catch((error) => {
        console.log(error);
      });
  }

 

  return (
    <div className='bg-gray-300'>
      <div className="App h-3/4 pt-4 w-full flex justify-center items-center">
        <div className="bg-white md:w-5/12 w-8/12 flex justify-center items-center rounded-md py-6">
          <form onSubmit={submit}>
            <div>
              <h4 className="flex justify-center font-semibold text-2xl">Registration</h4>
              <InputBox inputType="Text" name="fullname" inputLabel="Full Name" value={personData.fullname} onChange={change} />
              <InputBox inputType="Text" name="address" inputLabel="Address" value={personData.address} onChange={change} />
              <InputBox inputType="Text" name="cohort" inputLabel="Cohort" value={personData.cohort} onChange={change} />
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
     
      <div className='h-3/4 flex justify-center mt-12 items-center w-full'>
        <DisplayData />
      </div>
    </div>
  );
}

export default App;