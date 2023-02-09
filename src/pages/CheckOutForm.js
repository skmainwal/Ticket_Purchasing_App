import {
  Box,
  Button,
  Card,
  CardFooter,
  Center,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  FormHelperText,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { checkoutSchema } from "../schemas/index";

let initialValues = {
  name: "",
  email: "",
  mobile_number: "",
  card_number: "",
};


const CheckOutForm = () => {
  const { selectedSeats, selectedMovieInfo } = useSelector(
    (state) => state.dataReducer
  );

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: checkoutSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });

  return (
    <Fragment>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        height="100vh"
      >
        <Box
          w={[
            "90%", // 0-30em
            "50%", // 30em-48em
            "30%", // 48em-62em
            "30%",
          ]}
          border="1px solid lightgrey"
          h={{
            base: "100%", // 0-48em
            md: "70%", // 48em-80em,
            xl: "80%",
          }}
          p="30px"
          borderRadius="5px"
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        >
          <Center>Checkout</Center>
          <Center mt="10px" mb="10px">
            <Card p="5px">
              <Center>
                <Image
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${selectedMovieInfo?.poster_path}`}
                  alt="movie pic"
                  w={"150px"}
                  h={"150px"}
                />
              </Center>
              <Text fontSize={"10px"}> {selectedMovieInfo?.title}</Text>
              <CardFooter>
                {selectedSeats.map((item) => (
                  <Text fontSize={"12px"}> {item.seat_no},</Text>
                ))}
              </CardFooter>
            </Card>
          </Center>
          <Text as="i" fontSize={"13px"}>
            Please fill the form to confirm the seat.{" "}
          </Text>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormHelperText color={"red"}>
              {" "}
              {touched.name && errors.name ? errors.name : null}{" "}
            </FormHelperText>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormHelperText color={"red"}>
              {" "}
              {touched.email && errors.email ? errors.email : null}{" "}
            </FormHelperText>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="number"
              name="mobile_number"
              value={values.mobile_number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormHelperText color={"red"}>
              {" "}
              {touched.mobile_number && errors.mobile_number
                ? errors.mobile_number
                : null}{" "}
            </FormHelperText>
            <FormLabel>Debit/Credit card</FormLabel>
            <Input
              type="number"
              name="card_number"
              value={values.card_number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormHelperText color={"red"}>
              {" "}
              {touched.card_number && errors.card_number
                ? errors.card_number
                : null}{" "}
            </FormHelperText>
          </FormControl>
          <Center mt="20px">
            <Button colorScheme={"blue"} onClick={handleSubmit}>
              {" "}
              Submit
            </Button>
          </Center>
        </Box>
      </Box>
    </Fragment>
  );
};

export default CheckOutForm;
