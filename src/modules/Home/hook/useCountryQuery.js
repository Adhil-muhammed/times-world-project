import { useEffect } from "react";
import axios from "axios";
import { setCountryData } from "reduxConfig";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";

export const useCountryQuery = ({ enabled }) => {
  const dispatch = useDispatch();
  const countryState = useSelector((state) => state?.country);
  const { data, filterKey, visibleItemsCount } = countryState;

  const filteredCountry = data?.filter((data) => {
    return filterKey ? data?.region === filterKey : true;
  });

  const fetchCountryList = async () => {
    const res = await axios.get(
      "https://restcountries.com/v2/all?fields=name,region,flag"
    );
    return res.data;
  };

  const countryQuery = useQuery({
    queryKey: ["country"],
    queryFn: fetchCountryList,
    enabled,
  });

  useEffect(() => {
    if (countryQuery.data) {
      dispatch(
        setCountryData({
          data: countryQuery?.data,
          isLoading: countryQuery?.isLoading,
        })
      );
    }
  }, [countryQuery.data]);

  return { filteredCountry, visibleItemsCount };
};
