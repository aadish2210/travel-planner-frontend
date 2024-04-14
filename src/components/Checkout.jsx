import React from 'react'
import axios from "axios";
import {Card, CardHeader, Image,Spinner} from "@nextui-org/react";
const Checkout = () => {
  const [list,setList] = React.useState([]);
  let dummy = [
    {
      Destination_Id : 1,
      Itinerary_Id : 1,
      Destination_Name : "Paris",
    },
    {
      Destination_Id : 2,
      Itinerary_Id : 2,
      Destination_Name : "New York",
    },
    {
      Destination_Id : 3,
      Itinerary_Id : 3,
      Destination_Name : "Tokyo",
    }
  ]
  React.useEffect(() => {
    setList(dummy)
    // axios.get("http://localhost:3000/getList")
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
    console.log(id);
  }
  return (
    <div>
      <div className='flex gap-5 justify-center items-center h-[90vh]'>
        {list.length==0 && <Spinner>Loading...</Spinner>}
      {list.length!=0 && list.map((item) => 
      <>
      <Card className="col-span-12 sm:col-span-4 h-[300px] w-[200px]"  isPressable  onPress={() => handleLoad(item.Itinerary_Id)}>
      <CardHeader className="absolute z-10 t  op-1 flex-col !items-start">
        <h4 className="text-white font-medium text-large">{item.Destination_Name}</h4>
      </CardHeader>
      <Image removeWrapper alt="Card background" className="z-0  h-full object-cover" src={`/${item.Destination_Id}.jpg`} />
      </Card>
      </>)}
      </div>
    </div>
  )
}

export default Checkout