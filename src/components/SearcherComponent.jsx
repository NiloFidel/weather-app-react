import React, { useEffect, useState } from "react";
import axios from "axios";
import { FilterCardComponent } from "./FilterCardComponent";
import { NavbarComponent } from "./NavbarComponent";

export const SearcherComponent = () => {
  const [isloading, setIsloading] = useState(true);
  const [factsData, setFactsData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/upload`)
      .then((response) => {
        setFactsData(response.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const filteredData = factsData.filter((fact) => {
      return Object.values(fact)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setFilteredResults(filteredData);
  }, [factsData, searchInput]);

  return (
    <>
    <NavbarComponent/>
      <div className="filterCardList" style={{ marginTop: "90px", border:"2px solid green"}}>
        <header className="header">
          <h2 className="page-title">Busca tu libro favorito</h2>
            <label className="search-input-label" htmlFor="search"/>
              <input
                className="search-input"
                type="search"
                name="search"
                id="search"
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                required
              />
        </header>

        <main>
          {isloading ? (
            <p className="message">loading...</p>
          ) : (
            <section className="cards-wrapper">
              {filteredResults.length === 0
                ?
                <FilterCardComponent FilteredCardList={factsData} />

                :
                <FilterCardComponent FilteredCardList={filteredResults} />
              }
            </section>
          )}
        </main>
      </div>
    </>
  );
};
