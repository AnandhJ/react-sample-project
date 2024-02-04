import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchString: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const searchInput = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchInput.current) {
          onSearch(searchInput.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftAddon children={<BsSearch />} />
        <Input
          placeholder="Search games..."
          borderRadius={20}
          variant="filled"
          ref={searchInput}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
