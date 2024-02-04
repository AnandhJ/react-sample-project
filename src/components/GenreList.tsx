import {
  HStack,
  List,
  ListItem,
  Image,
  Skeleton,
  SkeletonText,
  Button,
  Link,
  Heading,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (isLoading) {
    // return <Spinner></Spinner>;
    return (
      <List>
        {skeletons.map((skeleton) => (
          <ListItem paddingY="5px" key={skeleton}>
            <HStack>
              <Skeleton boxSize="32px" />
              <SkeletonText noOfLines={1}>action</SkeletonText>
            </HStack>
          </ListItem>
        ))}
      </List>
    );
  }
  if (error) {
    return null;
  }

  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              ></Image>
              <Button
                textAlign="left"
                whiteSpace="normal"
                fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
