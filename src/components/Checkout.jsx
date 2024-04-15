import React from 'react'
import axios from "axios";
import {Card, CardHeader, Image,Spinner , Button} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
const Checkout = () => {
  const navigate = useNavigate();
  const [list,setList] = React.useState([]);
  let dummy = [
    {
        "Itinerary_Id": 1,
        "Destinations_Id": 1,
        "Destination_Name": "Rome"
    },
    {
        "Itinerary_Id": 2,
        "Destinations_Id": 2,
        "Destination_Name": "Rome"
    },
    {
        "Itinerary_Id": 3,
        "Destinations_Id": 3,
        "Destination_Name": "Sydney"
    },
    {
        "Itinerary_Id": 4,
        "Destinations_Id": 4,
        "Destination_Name": "Jaipur"
    },
    {
        "Itinerary_Id": 5,
        "Destinations_Id": 5,
        "Destination_Name": "Rome"
    },
    {
        "Itinerary_Id": 6,
        "Destinations_Id": 6,
        "Destination_Name": "Rome"
    }
];
  // const handleBack = () => {
  //   navigate("/")
  // }
  React.useEffect(() => {
    setList(dummy)
    // axios.get("http://localhost:3000/checkout")
    // .then(function (response) {
    //   setList(response.data);
    // });
    axios.get("https://dummyjson.com/products")
    .then(function (response) {
    setList(dummy);
    });
  },[])

  function handleLoad(id){
    //make get request to pearl
    navigate(`/checkout/${id}`)
  }
  return (
    <div>
      <div className='flex flex-wrap gap-5 justify-center items-center h-[90vh]'>
        {list.length==0 && <Spinner>Loading...</Spinner>}
      {list.length!=0 && list.map((item) => 
      <>
      <Card className="col-span-12 sm:col-span-4 h-[300px] w-[200px]"  isPressable  onPress={() => handleLoad(item.Itinerary_Id)}>
      <CardHeader className="absolute z-10 t  op-1 flex-col !items-start">
        <h4 className="text-white font-medium text-large">{item.Destination_Name}</h4>
      </CardHeader>
      <Image removeWrapper alt="Card background" className="z-0  h-full object-cover" src={`/${item.Destinations_Id}.jpg`} />
      </Card>
      </>)}
      </div>
      {/* <Button className='mt-10' color='success' variant='ghost' onClick={handleBack}>{"<-"}</Button> */}
    </div>
  )
}

export default Checkout