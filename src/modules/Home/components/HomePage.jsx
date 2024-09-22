import React from "react";
import { Container } from "react-bootstrap";
import {
  Header,
  Slider,
  Loader,
  ContryList,
  useCountryQuery,
  useGetWindowSize,
} from "..";
import { SignInWith } from "shared";

export const HomePage = () => {
  const { isLoading } = useCountryQuery({
    enabled: true,
  });

  useGetWindowSize();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container className="cotainer">
      <Header />
      <Slider />
      <ContryList />
      <SignInWith isShow={true} />
    </Container>
  );
};
