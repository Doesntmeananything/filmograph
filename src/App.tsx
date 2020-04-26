import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { Counter } from "./features/counter/Counter";
import {
  selectFilms,
  selectErrorMessage,
  selectLoadingStatus,
  fetchFilms,
} from "./features/search/searchSlice";
import { Header } from "./features/search/Header";
import { Movie } from "./features/search/Movie";
import { Search } from "./features/search/Search";
import "./App.css";

export const App = () => {
  const films = useSelector(selectFilms);
  const errorMessage = useSelector(selectErrorMessage);
  const loading = useSelector(selectLoadingStatus);

  const dispatch = useDispatch();

  const searchFilms = (searchQuery: string) => {
    dispatch(fetchFilms(searchQuery));
  };

  return (
    <div className="App">
      <Header />
      <Search searchFilms={searchFilms} loading={loading} />
      {errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ margin: 0 }}>
          {films.map((film) => (
            <Col className="gutter-row" span={6} key={film.Title}>
              <Movie movie={film} />
            </Col>
          ))}
        </Row>
      )}
      <Counter />
    </div>
  );
};
