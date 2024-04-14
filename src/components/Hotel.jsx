import React from 'react'
import {Card, CardHeader} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import axios from 'axios';
import {useParams} from "react-router-dom"
import {Spinner} from "@nextui-org/react";
import {useNavigate} from "react-router-dom"
const Hotel = () => {
  const {desId} = useParams();
  const [hotelData , setHotelData] = React.useState([]);
  const [hotel , setHotel] = React.useState();
  const navigate = useNavigate();
  let dummy = [
      {
          "Hotel_Id": 16,
          "Hotel_Name": "Hotel Eiffel",
          "Destinations_Id": 1,
          "Price": 8000,
          "Popularity": 5
      },
      {
          "Hotel_Id": 17,
          "Hotel_Name": "Le Mridien Etoile",
          "Destinations_Id": 1,
          "Price": 7000,
          "Popularity": 4
      },
      {
          "Hotel_Id": 18,
          "Hotel_Name": "Hotel de Crillon",
          "Destinations_Id": 1,
          "Price": 8500,
          "Popularity": 4
      },
      {
          "Hotel_Id": 19,
          "Hotel_Name": "Hotel Lutetia",
          "Destinations_Id": 1,
          "Price": 6000,
          "Popularity": 3
      },
      {
          "Hotel_Id": 20,
          "Hotel_Name": "Hotel Plaza Athne",
          "Destinations_Id": 1,
          "Price": 9000,
          "Popularity": 5
      }
  ];

    React.useEffect(() => {
        axios.get(`http://localhost:3000/getHotels/${desId}`)
        .then(function (response) {
        setHotelData(response.data);
        });
        // axios.get("https://dummyjson.com/products")
        // .then(function (response) {
        // setHotelData(dummy);
        // });
      },[])
    

      function handleSort(key){
        axios.get(`http://localhost:3000/getHotels/${desId}/${key}`)
        .then(function(response){
            setHotelData(response.data)
        })
      }
      const handleProceed = () => {
        //navigate("/checkout")
        axios.post('http://localhost:3000/updateItinerary', {
           "Hotel_Id" : hotel,
        })
        .then(function (response) {
            if(response.data.success){
              navigate(`/checkout`)
            }
         })
        .catch(function (error) {
           console.log(error);
        });
      }

  return (
    <div className='flex flex-col items-center justify-center h-[100vh] gap-5'>
        {hotelData.length!=0 && <Dropdown>
            <DropdownTrigger>
            <Button variant="ghost" color='success'>Sort By</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Action event" onAction={(key) => handleSort(key)} color='success' className='text-black'>
            <DropdownItem  key="lowtohighprice">Price : Low To High</DropdownItem>
            <DropdownItem key="hightolowprice">Price : High To Low</DropdownItem>
            <DropdownItem key="lowtohighrating">Rating : Low To High</DropdownItem>
            <DropdownItem key="hightolowrating">Rating : High To Low</DropdownItem>
            </DropdownMenu>
            </Dropdown>}
            {hotelData.length==0 && <Spinner/>}
            {hotelData.length!=0 && hotelData.map( (item) => (
                <Card className="py-4 w-6/12 "  key={item.Hotel_Id}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">{item.Price} ₹</p>
                  <p className="text-tiny uppercase font-bold">{item.Popularity} Stars</p>
                  <small className="text-default-500">{item.Location}</small>
                  <h4 className="font-bold text-large">{item.Hotel_Name}</h4>
                </CardHeader>
                </Card>
            ))}
            {hotelData.length!=0 && <><Dropdown>
            <DropdownTrigger>
            <Button variant="ghost" color='success'>Select Hotel</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Action event" onAction={(key) => setHotel(key)} color='success' className='text-black'>
              {hotelData.map((item) => <DropdownItem key={item.Hotel_Id}>{item.Hotel_Name}</DropdownItem>)}
            </DropdownMenu>
            </Dropdown>
            <Button className="mt-5" color='success' variant='ghost' onClick={handleProceed}>Proceed</Button></>}
            
          
    </div>
  )
}

export default Hotel