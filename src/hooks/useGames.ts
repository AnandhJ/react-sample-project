import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: number;
  slug: number;
}
export interface Games {
  id: number;
  background_image: string;
  name: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface Props {
  gameQuery: GameQuery;
}
const useGames = (gameQuery: GameQuery) => {
  return useData<Games>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search : gameQuery.searchInput
      },
    },
    [gameQuery]
  );
};
export default useGames;
