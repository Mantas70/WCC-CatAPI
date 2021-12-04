import { GET_ANIMALS_QUERY } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { LinearProgress } from "@mui/material";
import { useState } from "react";
import Search from "../Search";
import AnimalCard from "../AnimalCard";
import styles from "./styles.module.css";
const AnimalList = () => {
  const { loading, data, error } = useQuery(GET_ANIMALS_QUERY);
  const [searchValue, setSearchValue] = useState(" ");
  if (error) {
    return <h2>Something went wrong</h2>;
  }
  if (loading) {
    return <LinearProgress />;
  }
  const filterAnimal = () => {
    return data?.animals?.edges.filter((animal) => {
      return animal.node.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  };
  const handleSearch = (value) => {
    setSearchValue(value);
  };
  console.log(filterAnimal());
  return (
    <div className={styles.container}>
      <Search onSearch={handleSearch} />
      <div className={styles.animalContainer}>
        {filterAnimal().map((animal) => (
          <AnimalCard
            key={animal.node.id}
            name={animal.node.name}
            image={animal.node.imageUrl}
          >
            <p>{animal.node.name}</p>
          </AnimalCard>
        ))}
      </div>
    </div>
  );
};
export default AnimalList;
