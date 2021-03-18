import styles from "./SearchBar.module.scss";
import { Icon, InlineIcon } from "@iconify/react";
import searchIcon from "@iconify/icons-bi/search";

const SearchBar = ({ onChange, placeholder }) => {
  return (
    <div className={styles.container}>
      <h3>Search currency</h3>
      <div className={styles.input_container}>
        <Icon className={styles.search_icon} icon={searchIcon} />
        <input
          onChange={onChange}
          className={styles.input}
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default SearchBar;
