import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import sky from "../img/sky.jpg";
const Home = styled.div`
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Title = styled.h1`
  text-align: center;
  margin-top: 4px;
`;
const Bio = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: left;
    width: 310px;
    height: 30px;
    margin: 2px;
    font-size: 16px;
  }

  align-items: center;
`;
const MatchButton = styled.div`
  display: flex;
  font-size: 44px;
`;
const Photo = styled.img`
  width: 300px;
  height: 348px;
  border-radius: 30px;
`;
const ButtonMatch = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 62px;
  border-radius: 50%;
  color: white;
  text-align: center;
  cursor: pointer;
`;
export function InitialScreen(props) {
  const [profiles, setProfiles] = useState([]);
  const [ismatch, setIsMatch] = useState(false);

  //posting  a match
  const onSubmit = (id) => {
    const urlPost =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine/choose-person";
    const body = {
      id: id,
      choice: true,
    };
    const headersPost = {
      headers: { "Content-Type": "application/json" },
    };
    axios
      .post(urlPost, body, headersPost)
      .then((response) => {
        //para trocar de imagen e renderizar uma nova
        setIsMatch(!ismatch);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //fetching data from API
  const getProfileToChoose = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine/person";
    axios
      .get(url)
      .then((res) => {
        const currentProfile = [res.data.profile];
        setProfiles(currentProfile);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfileToChoose();
  }, [ismatch]);

  return (
    <Home>
      <Title>Astromatch {"\u2764"}</Title>

      {profiles.map((profile) => {
        return (
          <Bio key={profile.id}>
            <p>
              {profile.name}, {profile.age}
            </p>
            <Photo src={profile.photo} />

            <p>{profile.bio}</p>
            <br />
            <MatchButton>
              <ButtonMatch onClick={() => getProfileToChoose()}>X</ButtonMatch>
              <ButtonMatch onClick={() => onSubmit(profile.id)}>
                {"\u2764"}
              </ButtonMatch>
            </MatchButton>
          </Bio>
        );
      })}
    </Home>
  );
}
