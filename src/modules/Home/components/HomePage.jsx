import React from "react";
import { Container } from "react-bootstrap";
import { Header, Slider, ContryList, useCountryQuery } from "..";

export const HomePage = () => {
  useCountryQuery({
    enabled: true,
  });

  return (
    <Container className="cotainer">
      <Header />
      <Slider />
      <ContryList />
    </Container>
  );
};
