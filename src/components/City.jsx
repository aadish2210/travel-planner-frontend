import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import {Card, CardHeader} from "@nextui-org/react";
const City = () => { 
  const {desId} = useParams();
  const [placesData , setPlacesData] = React.useState([]);

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
    //     axios.get(`http://localhost:3000/getDestination/${desId}`)
    //     .then(function (response) {
    //     setPlacesData(dummy);
    //   });
    setPlacesData(dummy);
  },[])

  const handlePress = () => {
  }
  

  return (
    <div className='flex flex-col items-center justify-start m-10 gap-5'>
    {placesData.length!=0 && placesData.map((item) => (
        <Card className="py-4 w-6/12 "  isPressable onPress={handlePress} key={item.Places_Id}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <small className="text-default-500">{item.Description}</small>
          <h4 className="font-bold text-large">{item.Name}</h4>
        </CardHeader>
        </Card>
    ))}  
    </div>
  )
}

export default City