import { useState } from "react";
import styled from "styled-components";
import background from "./assets/cityscape_1127-3766.avif";
import { IoRainy } from "react-icons/io5";
import axios from "axios";

const App = () => {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeatherData = async () => {
    const apiKey =  "5f383fa2a4e662be3828f807e25fa441";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    await axios.get(URL).then((res) => setWeather(res.data));
  };

  console.log(weather);

  return (
    <Conatiner>
      <Wrapper>
        <InputDiv>
          <input
            type="search"
            placeholder="Enter you City"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />

          <button onClick={getWeatherData}>Search</button>
        </InputDiv>
        {weather && (
          <Card>
            <Country> {weather.sys.country} </Country>
            <City> {weather.name} </City>
            <MainDate>32 Nov 2023</MainDate>

            <Cond>
              <IoRainy />
              <span> {weather.weather[0].description} </span>
            </Cond>
            <WeatherReading>
              {" "}
              <span> {(weather.main.temp - 273.15).toFixed(1)} </span>{" "}
              <label> ºC</label>
            </WeatherReading>
          </Card>
        )}
      </Wrapper>
    </Conatiner>
  );
};

export default App;

const Conatiner = styled.div`
  background-image: url(${background});
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Card = styled.div`
  height: 500px;
  width: 400px;
  background-color: azure;
  backdrop-filter: blur(14px);
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const InputDiv = styled.div`
  margin-bottom: 10px;
  
  button {
    height: 40px;
    width: 120px;
    border: none;
    font-size: 20px;
    background-color: skyblue;
    color: #fff;
    /* font-family: Montserrat; */
    font-weight: 600;
    cursor: pointer;
  }

  input {
    height: 40px;
    width: 300px;
    border: 1px solid #ddd;
    /* font-family: Montserrat; */
    outline: none;
    padding-left: 10px;
    font-size: 20px;
@media (max-width: 500px) {
  margin-bottom: 10px;
}
  }
  text-align: center;
`;

const City = styled.div`
  font-size: 40px;
  font-weight: lighter;
`;
const MainDate = styled.div`
  font-weight: 500;
  margin-bottom: 70px;
`;
const Cond = styled.div`
  font-size: 25px;
  font-weight: 300;
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
  }
`;
const WeatherReading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 90px;
    font-weight: 700;
  }
  label {
    margin-top: -50px;
    font-size: 20px;
    font-weight: 600;
  }
`;

const Country = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
