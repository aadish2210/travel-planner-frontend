import React from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import axios from "axios"
import {Card, CardHeader , Button} from "@nextui-org/react";
const CheckoutPlaces = () => {
  const navigate = useNavigate();
    const {Itinerary_Id} = useParams();
    const [placesData , setPlacesData] = React.useState([]);
    let dummy = [
      {
          "Name": "Tokyo Disneyland",
          "Price": 6000,
          "Hotel_Name": "Hotel Villafranca",
          "Date": "2019-03-02T18:30:00.000Z",
          "Description": "Theme park with attractions and entertainment for all ages."
      },
      {
          "Name": "Tsukiji Fish Market",
          "Price": 6000,
          "Hotel_Name": "Hotel Villafranca",
          "Date": "2029-08-11T18:30:00.000Z",
          "Description": "Lively market offering fresh seafood and sushi."
      },
      {
          "Name": "Senso-ji Temple",
          "Price": 6000,
          "Hotel_Name": "Hotel Villafranca",
          "Date": "2033-03-22T18:30:00.000Z",
          "Description": "Tokyo's oldest temple with a bustling shopping street."
      },
      {
          "Name": "Senso-ji Temple",
          "Price": 6000,
          "Hotel_Name": "Hotel Villafranca",
          "Date": "2023-09-03T18:30:00.000Z",
          "Description": "Tokyo's oldest temple with a bustling shopping street."
      }
  ];
  //maxDate = new Date(maxDate).toISOString().split('T')[0];
    React.useEffect(() => {
        // axios.get(`http://localhost:3000/getItineraryPlaces/${Itinerary_Id}`)
        // .then(function (response) {
        // setPlacesData(response.data);
        // });
        axios.get("https://dummyjson.com/products")
        .then(function (response) {
          dummy.map((item) => item.Date = new Date(item.Date).toISOString().split('T')[0]);
        setPlacesData(dummy);
        });
      },[])

      const handleBack = () => {
        navigate("/checkout");
      }
  return (

    <div className='flex flex-col justify-center items-center h-[100vh] gap-5'>
      {placesData.length!=0 && placesData.map((item,index) => <Card className="py-4 w-6/12 " key={index}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {/* <p className="text-tiny uppercase font-bold">{item.Name} stars</p> */}
        <small className="text-default-500">{item.Description}</small>
        <small className="text-default-500">{item.Date}</small>
        <h4 className="font-bold text-large">{item.Name}</h4>
      </CardHeader>
      </Card>)}
      {placesData.length!=0 && <h4 className='text-2xl font-semibold'>{placesData[0].Hotel_Name}</h4>}
      {placesData.length!=0 &&<h6 className='text-lg font-semibold'>{placesData[0].Price} ₹</h6>}
      <Button className='mt-5' color='success' variant='ghost' onClick={handleBack}>{"<<<"}</Button>
    </div>
  )
}

export default CheckoutPlaces