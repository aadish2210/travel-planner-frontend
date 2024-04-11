import React from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import axios from "axios"
import {Button, Input} from "@nextui-org/react";
import {Card, CardHeader} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
const City = () => { 
  const navigate = useNavigate();
  const {desId , userId} = useParams();
  const [placesData , setPlacesData] = React.useState([]);
  const [userData , setUserData] = React.useState([]);
  const [date,setData] = React.useState("")

  let dummy = [
    {
      "Places_Id": 1,
      "Name": "Eiffel Tower",
      "Description": "Iconic landmark offering panoramic views of Paris.",
      "Destinations_Id": 1
    },
    {
      "Places_Id": 2,
      "Name": "Louvre Museum",
      "Description": "World-renowned art museum housing famous works of art.",
      "Destinations_Id": 1
    },
    // Other rows...
  ]

  React.useEffect(() => {
    //     axios.get(`http://localhost:3000/getDestinations/${desId}`)
    //     .then(function (response) {
    //     setPlacesData(response);
    //   });
    setPlacesData(dummy);
  },[])

  const handlePress = () => {
  }
  
  function handleAdd(id){
    userData.push({userId : Number(userId) , placeId : id , date});
    setUserData(userData);
    //console.log(userData);
  } 

  const handleSubmit = () => {
    navigate(`/hotel/${userId}`)
    //console.log("post request sent to pearl!")
    //console.log(userData);
    // axios.post('http://localhost:3000/insertPlaces', {
    //   userData
    //   })
    //   .then(function (response) {
    //     if(response.data.success){
    //       navigate(`/hotel/${userId}`)
    //     }
    //   })
    //  .catch(function (error) {
    //     console.log(error);
    //   });
  }

  const handleReset = () => {
    setUserData([]);
  }

  return (
    <div className='flex flex-col items-center justify-around m-10 gap-5'>
    {placesData.length!=0 && placesData.map((item) => (
        <div key={item.Places_Id} className='flex gap-5 justify-center items-center w-[100vw]'>
        <Card className="py-4 w-6/12 "  isPressable onPress={handlePress} >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <small className="text-default-500">{item.Description}</small>
          <h4 className="font-bold text-large">{item.Name}</h4>
        </CardHeader>
        </Card>
        <Popover placement="right" color="primary" className=''>
        <PopoverTrigger>
        <Button color="success" variant="ghost">Add Place</Button> 
        </PopoverTrigger>
        <PopoverContent>
        <Input label="Enter Date Of Visit" type="text" className='p-2' onValueChange={setData}></Input>
        <Button color='success' variant="ghost" onClick={() => handleAdd(item.Places_Id)}>Save</Button>
        </PopoverContent>
        </Popover>
        </div>
    ))}  
      <div className='flex gap-5'>
       <Button onClick={handleSubmit} color='success' variant="ghost" className='mt-3'>Submit</Button>
       <Button onClick={handleReset} color='success' variant="ghost" className='mt-3'>Reset</Button>
      </div>
    </div>
  )
}

export default City