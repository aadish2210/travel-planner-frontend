import React from 'react'
import {Card, CardHeader , Spinner} from "@nextui-org/react";
import { useNavigate ,useParams } from "react-router-dom";
import axios from 'axios';
const Destinations = () => {
  const navigate = useNavigate();
  const [destinationData , setDestinationData] = React.useState([])
  const {userId} = useParams();
  let dummy = [
    {
        "Destinations_Id": 1,
        "Destination_Name": "Paris",
        "Description": "City of Love and Lights",
        "Popularity": 5
    },
    {
        "Destinations_Id": 2,
        "Destination_Name": "New York",
        "Description": "The Big Apple",
        "Popularity": 4
    },
    {
        "Destinations_Id": 3,
        "Destination_Name": "Tokyo",
        "Description": "Vibrant Metropolis",
        "Popularity": 5
    },
    {
        "Destinations_Id": 4,
        "Destination_Name": "Rome",
        "Description": "Eternal City",
        "Popularity": 3
    },
    {
        "Destinations_Id": 5,
        "Destination_Name": "Sydney",
        "Description": "Harbor City",
        "Popularity": 4
    },
    {
        "Destinations_Id": 6,
        "Destination_Name": "Jaipur",
        "Description": "The Pink City",
        "Popularity": 4
    }
]
  React.useEffect(() => {
    axios.get("http://localhost:3000/getDestinations")
    .then(function (response) {
    setDestinationData(response.data);
    });
    // axios.get("https://dummyjson.com/products")
    // .then(function (response) {
    // setDestinationData(dummy);
    // });
  },[])

  function handlePress(id){
    navigate(`/destinations/${userId}/${id}`)
  }
  return (
    <div className='m-10 flex flex-col justify-center items-center h-[100vh] gap-5 '>
    {destinationData.length==0 && <Spinner/>}
    {destinationData.length!=0 && destinationData.map((item) => (
      <Card className="py-4 w-6/12 " key={item.Destinations_Id} isPressable onPress={() => handlePress(item.Destinations_Id)}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{item.Popularity} stars</p>
        <small className="text-default-500">{item.Description}</small>
        <h4 className="font-bold text-large">{item.Destination_Name}</h4>
      </CardHeader>
      </Card>
    ))}
    
    </div>
  )
}

export default Destinations