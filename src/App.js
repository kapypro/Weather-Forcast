import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";
import moment from "moment/moment";

const App = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("Bhopal");

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_FORCAST_URL}${search}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then((res) => setData(res?.data))
      .catch((err) => console.log(err));
  }, [search]);
  console.log(data);

  return (
    <Box
      sx={{ backgroundColor: "primary.light", width: "100%", height: "100vh",justifyContent:"center" }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: { md: "2.5rem", xs: "2rem" },
          textAlign: "center",
          pt: { md: "4rem", xs: "1.5rem" },
          pb: { md: 2, xs: 0 },
        }}
      >
        Weather <span style={{ fontWeight: 1000 }}>Forecast</span>
      </Typography>
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "primary.dark",
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-evenly",
          width: "100%",
          height: { md: "65vh", xs: "85%" },
          alignItems: "center",
          borderRadius: { md: "2rem", xs: "1.5rem" },
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: { md: "28%", xs: "60%" },
            height: { md: "90%", xs: "42%" },
            borderRadius: { md: "1rem", xs: "0.5rem" },
            px: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: {md:"space-evenly",xs:"center"},
          }}
        >
          <Box>
            <TextField size="small"
            rows={1}
              sx={{
                width: { md: "80%", xs: "100%" },fontSize:"0.6rem",color:"primary.dark"
              }}
              // id="Search Your City"
              label="Search Your City"
              variant="outlined"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Box>
          <Box sx={{height:{xs:"11rem"}}}>
            <Typography sx={{ fontSize: { md: "2rem", xs: "1.2rem" } }}>
              {moment().format("dddd")}
            </Typography>
            <Typography sx={{ fontSize: { md: "1.2rem", xs: "0.8rem" } }}>
              {moment().format("LL")}
            </Typography>
            <Typography
              sx={{
                fontSize: { md: "1.2rem", xs: "0.8rem" },
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocationOnIcon /> &nbsp;{search}
            </Typography>
            <img
              style={{ width: "3rem", height: "3rem" }}
              src={`${process.env.REACT_APP_ICON_URL}${
                data?.list?.at(0)?.weather?.at(0)?.icon
              }.png`}
              alt="Weather condition"
              loading="lazy"
            />
            <Typography sx={{ fontSize: { md: "2rem", xs: "1rem" } }}>
              {data?.list?.at(0)?.main?.temp} &deg;C
            </Typography>
            <Typography sx={{ fontSize: { md: "1.2rem", xs: "0.9rem" } }}>
              {data?.list?.at(0)?.weather?.at(0)?.main}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: { md: "60%", xs: "90%" },
            height: { md: "90%", xs: "51%" },
            borderRadius: { md: "1rem", xs: "0.5rem" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <TableContainer
            component={Paper}
            sx={{ bgcolor: "primary.main", height: {md:"50%",xs:"42%"},
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            
            /* Track */
            "&::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 5px grey" ,
              borderRadius: "8px",
            },
             
            /* Handle */
            "&::-webkit-scrollbar-thumb": {
              background: "grey",
              borderRadius: "8px",
            },
            
            /* Handle on hover */
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#b30000", 
            } }}
          >
            <Table size="small" aria-label="a dense table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Description
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data?.list?.at(0)?.weather?.at(0)?.description}
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Humidity
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data?.list?.at(0)?.main?.humidity}%
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Wind
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data?.list?.at(0)?.wind?.speed}&nbsp;m/s
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Air Pressure
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data?.list?.at(0)?.main?.pressure}&nbsp;mb
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Max Temp
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data?.list?.at(0)?.main?.temp_max}&deg;C
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Min Temp
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data?.list?.at(0)?.main?.temp_min}&deg;C
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              display: "flex",
              height: { xs: "55%",md:"50%" },
              flexDirection: "row",
              // flexWrap:"wrap",
              justifyContent:"flex-start",
              alignItems:"center",
              overflow: "auto",
              textAlign: "center",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              
              /* Track */
              "&::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 5px grey" ,
                borderRadius: "8px",
              },
               
              /* Handle */
              "&::-webkit-scrollbar-thumb": {
                background: "grey",
                borderRadius: "8px",
              },
              
              /* Handle on hover */
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#b30000", 
              }
            }}
          >
            {data?.list.slice(0, 6).map((ele, i) => (
              <Box
                key={i}
                sx={{
                  height: "auto",
                  minWidth: "5rem",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  mx: 2,
                }}
              >
                <img
                  style={{ width: "3rem", height: "3rem" }}
                  src={`${process.env.REACT_APP_ICON_URL}${
                    ele?.weather?.at(0)?.icon
                  }.png`}
                  alt="weather icon"
                />
                <Typography sx={{ fontSize: "0.8rem", fontWeight: 500 }}>
                  {ele?.dt_txt}
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", fontWeight: 600 }}>
                  {ele?.main?.temp} &deg;C
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", fontWeight: 600 }}>
                  {ele?.weather?.at(0)?.main}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default App;
