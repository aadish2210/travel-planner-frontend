import React from 'react'
import {Card, CardHeader} from "@nextui-org/react";
import axios from 'axios';
import {Spinner} from "@nextui-org/react";
const Hotel = () => {
    const [hotelData , setHotelData] = React.useState([]);
    let dummy = [];
    React.useEffect(() => {
        // axios.get("http://localhost:3000/getHotels")
        // .then(function (response) {
        // setHotelData(response);
        // });
        axios.get("https://dummyjson.com/products")
        .then(function (response) {
        setHotelData(dummy);
        });
      },[])
    

      function handlePress(id){
        console.log(id);
      }
  return (
    <div className='flex items-center justify-center h-[100vh]'>
            {hotelData.length==0 && <Spinner/>}
            {hotelData.length!=0 && hotelData.map( (item) => (
                <Card className="py-4 w-6/12 " key={item.Hotel_Id} isPressable onPress={() => handlePress(item.Destinations_Id)}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">{item.Price} stars</p>
                  <small className="text-default-500">{item.Location}</small>
                  <h4 className="font-bold text-large">{item.Hotel_Name}</h4>
                </CardHeader>
                </Card>
            ))};
    </div>
  )
}

export default Hotel