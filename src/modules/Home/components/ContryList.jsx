import React, { useEffect } from "react";
import { showMore } from "reduxConfig";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col, Button } from "react-bootstrap";

export const ContryList = () => {
  const dispatch = useDispatch();
  const countryState = useSelector((state) => state?.country);
  const { data, filterKey, visibleItemsCount } = countryState;

  const filteredCountry = data?.filter((data) => {
    return filterKey ? data?.region === filterKey : true;
  });

  return (
    <div className="my-5">
      <Row className="justify-content-center">
        {filteredCountry?.slice(0, visibleItemsCount)?.map((data) => {
          return (
            <Col xs={12} md={6}>
              <Card className="p-1 shadow-sm m-1">
                <Card.Body className="d-flex align-items-center">
                  <div className="me-3">
                    <img
                      src={data?.flag}
                      alt={`${data?.name} flag`}
                      style={{
                        width: "50px",
                        height: "auto",
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                  <div>
                    <h5 className="mb-1">{data?.name}</h5>
                    <p className="text-muted mb-0">{data?.region}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <div className="d-flex justify-content-center mt-3">
        <Button onClick={() => dispatch(showMore())}>
          {visibleItemsCount === 12 || visibleItemsCount === 8
            ? "Load more"
            : "Show less"}
        </Button>
      </div>
    </div>
  );
};
