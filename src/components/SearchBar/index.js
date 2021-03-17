import styles from "./SearchBar.module.scss";
import { Icon, InlineIcon } from "@iconify/react";
import searchIcon from "@iconify/icons-bi/search";

const SearchBar = ({ ...rest }) => {
  return (
    <div className={styles.container}>
      <h3>Search currency</h3>
      <div className={styles.input_container}>
        <Icon className={styles.search_icon} icon={searchIcon} />
        <input
          className={styles.input}
          type="text"
          placeholder="enter currency name"
        />
      </div>
    </div>
  );
};

export default SearchBar;
