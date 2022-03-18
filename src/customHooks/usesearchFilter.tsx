import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { message } from "antd";

let source: any = null;

export const useSearchFilter = (
  dataContext: any,
  searchText: any,
  page: any,
  setMaxPages: any
) => {
  const isLongEnough = searchText.length >= 3;
  const fetchPosts = async () => {
    dataContext.setloading(true);
    // Create a new CancelToken source for this request

    try {
      if (source) {
        source.cancel("Query was cancelled by React Query");
      }
      source = axios.CancelToken.source();
      const response = await axios.get(
        "https://travel-advisor.p.rapidapi.com/locations/search",
        {
          params: {
            query: searchText,
            limit: 5,
            offset: page,
          },
          headers: {
            //@ts-ignore
            "x-rapidapi-host": process.env.REACT_APP_RAPID_API_KEY_HOST,
            //@ts-ignore
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
          },
          cancelToken: source.token,
        }
      );

      dataContext.setloading(false);
      if (
        localStorage.getItem("searchList") === null &&
        response.data.data.length > 0
      ) {
        let searchListNew: any = [];
        searchListNew.push(searchText);
        localStorage.setItem("searchList", JSON.stringify(searchListNew));
      } else if (response.data.data.length > 0) {
        let searchList1: any = JSON.parse(localStorage.searchList);

        let searchListNew: any = [];
        searchListNew.push(searchText);
        for (let i = 0; i < searchList1.length; i++) {
          if (!searchListNew.includes(searchList1[i]))
            searchListNew.push(searchList1[i]);
          if (searchListNew.length === 3) {
            break;
          }
        }
        localStorage.setItem("searchList", JSON.stringify(searchListNew));
      }
      return response.data;
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Request canceled");
      } else {
        dataContext.setloading(false);
        message.error("You have exceeded the MONTHLY quota for Requests");
        console.log(err);
      }
    }
  };

  const { data, error, status } = useQuery([searchText, page], fetchPosts, {
    keepPreviousData: true,
    staleTime: 1000000000000000,
    enabled: isLongEnough,
  });

  useEffect(() => {
    if (data === undefined) return;
    if (status === "success") {
      let len = data.paging.total_results;
      var intvalue = Math.ceil(len / 5);
      setMaxPages(intvalue);
      dataContext.setdata(data);
    }
  }, [data, status]);
};
