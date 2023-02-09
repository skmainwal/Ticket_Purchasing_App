import {
  Card, CardBody, Center, Heading, Image,
  Text, Wrap
} from "@chakra-ui/react";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectMovieHandler } from "../store/reducer";

// This page renders the movie card
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [moviesData, setMoviesData] = useState([]);

  // On page load , fetching movies list
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=21c89ff8841fc7ed0c7a346c8e305ddd&language=en-US&page=1",
    })
      .then(function (response) {
        const { results } = response.data;
        setMoviesData(results);
        console.log();
      })
      .catch(function (error) {
        console.error(error);
      });
      return ()=>{
       
      }
  }, []);

  return (
    <Fragment>
      <Center mt="50px" mb="50px">
        <Heading borderBottom={"1px solid"}>Top IMDB Movies</Heading>
      </Center>
      <Center>
        <Wrap>
          {moviesData?.map((item) => (
            <Card
            key={item.title}
              _hover={{ cursor: "pointer" }}
              border="1px solid lightgrey"
              w="200px"
              width={[
                "80%", // 0-30em
                "50%", // 30em-48em
                "25%", // 48em-62em
                "10%", // 62em+
              ]}
              onClick={() => {
                dispatch(setSelectMovieHandler(item));
                navigate("/available-seats");
              }}
            >
              <CardBody>
                <Center>
                  <Image
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                  ></Image>
                </Center>
                <Text> {item.title}</Text>
                {/* <Text>{moment(item.release_date).format('YYYY-MM-DD').year()} </Text> */}
              </CardBody>
            </Card>
          ))}
        </Wrap>
      </Center>
    </Fragment>
  );
};

export default Home;
