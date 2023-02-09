import { Box, Button, Card, CardBody, Center, Text } from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  firstColumnSeat,
  secondColumnSeat
} from "../database/seatAvailablityData";
import { setSelectedSeatsHandler } from "../store/reducer";

const AvaialbeSlot = () => {
  const [selectedSeat, setSelectedSeat] = useState([]);

  const [firstColumnSeats, setFirstColumnSeats] = useState([
  ]);
  const [secondColumnSeats, setSecondsColumnSeats] = useState([
  ]);

  useEffect(() => {
  
    return ()=>{
      // dispatch(setSelectedSeatsHandler([]))
      console.log("🚀 ~ file: AvaialbeSlot.js:31 ~ return ~ firstColumnSeat", firstColumnSeat)
      setFirstColumnSeats(()=>[...firstColumnSeat])
      setSecondsColumnSeats(()=>[...secondColumnSeat])
      setSelectedSeat([])
    }
  }, [firstColumnSeat,secondColumnSeat]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  //  Handling a seat selection

  const seatSelectHandler = (colNo, data) => {
    if (!data?.is_available && data?.is_booked) return;
    let selectedSeats = [...selectedSeat];

    if (colNo === "col1") {
      let idx = firstColumnSeats.findIndex(
        (item) => item.seat_no === data.seat_no
      );
      let seatList = firstColumnSeats;
      let seatData = firstColumnSeats[idx];
      if (seatData.is_available && !seatData.is_booked) {
        seatData["is_available"] = false;
        seatList[idx] = seatData;
        setFirstColumnSeats(() => [...seatList]);
        selectedSeats.push(seatList[idx]);
      } else {
        seatData = {
          ...seatData,
          is_available: true,
        };
        seatList[idx] = seatData;
        setFirstColumnSeats(() => [...seatList]);
        let filteredData = selectedSeats.filter(
          (item) => item.seat_no !== data.seat_no
        );
        selectedSeats = filteredData;
      }
    }
    if (colNo === "col2") {
      let idx = secondColumnSeats.findIndex(
        (item) => item.seat_no === data.seat_no
      );
      let seatList = secondColumnSeats;
      let seatData = secondColumnSeats[idx];
      if (seatData.is_available && !seatData.is_booked) {
        seatData.is_available = false;
        seatList[idx] = seatData;
        setSecondsColumnSeats(() => [...seatList]);
        selectedSeats.push(data);
      } else {
        seatData = {
          ...seatData,
          is_available: true,
        };
        seatList[idx] = seatData;
        setSecondsColumnSeats(() => [...seatList]);
        let filteredData = selectedSeats.filter(
          (item) => item.seat_no !== data.seat_no
        );
        selectedSeats = filteredData;
      }
    }

    setSelectedSeat(selectedSeats);

   
    dispatch(setSelectedSeatsHandler(selectedSeats));
  };
  return (
    <Fragment>
      <Center>
        {" "}
        <Text fontSize="3xl"> Available Seats </Text>{" "}
      </Center>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
         w={["50%","45%","30%"]}
          // width="30%"
          height="60%"
          display="flex"
          flexWrap="wrap"
          margin="5px"
          border="1px solid lightgrey"
        >
          {firstColumnSeats?.map((item) => (
            <Card
              key={item.seat_no}
              onClick={() => seatSelectHandler("col1", item)}
              m={"10px"}
              background={
                !item?.is_available && item.is_booked
                  ? "lightgray"
                  : !item.is_available && !item.is_booked
                  ? "#3182CE"
                  : "#FFFFFF"
              }
              color={!item.is_available && !item.is_booked && "white"}
              _hover={{
                background: item?.is_available && "#4299E1",
                color: item?.is_available && "white",
                cursor: item?.is_available && "pointer",
              }}
            >
              <CardBody>
                <Center>{item.seat_no}</Center>
              </CardBody>
            </Card>
          ))}
        </Box>
        <Box
        w={["50%","45%", "30%"]}
            // width= "30%"
            height= "60%"
            display= "flex"
            flexWrap= "wrap"
            margin= "5px"
            border="1px solid lightgrey"
        >
          {secondColumnSeats?.map((item) => (
            <Card
              key={item.seat_no}
              onClick={() => seatSelectHandler("col2", item)}
              m={"10px"}
              background={
                !item?.is_available && item.is_booked
                  ? "lightgray"
                  : !item.is_available && !item.is_booked
                  ? "#3182CE"
                  : "#FFFFFF"
              }
              color={!item.is_available && !item.is_booked && "white"}
              _hover={{
                background: item?.is_available && "#4299E1",
                color: item?.is_available && "white",
                cursor: item?.is_available && "pointer",
              }}
            >
              <CardBody>
                <Center>{item.seat_no}</Center>
              </CardBody>
            </Card>
          ))}
        </Box>
      </Box>
      <Center mt={"50px"}>
        <Button
          colorScheme="blue"
          onClick={() => {
            if(selectedSeat.length){

            navigate("/check-out");
            }
          }}
        >
          {" "}
          Book Now
        </Button>
      </Center>
    </Fragment>
  );
};

export default AvaialbeSlot;
