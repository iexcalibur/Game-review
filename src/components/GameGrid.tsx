import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery;

}

const GameGrid = ({gameQuery}: Props) => {
    
    const {data,error,isLoading} = useGames(gameQuery);
    const skeletons = [1,2,3,4,5,6];

    if (error) return <Text> {error} </Text>;

    return (
        <>
            <SimpleGrid columns={{sm:1, md: 2, lg: 3, xl: 4}} padding='10px' spacing={6}>
                {isLoading && 
                    skeletons.map((skeleton) => (
                            <GameCardContainer key={skeleton}>
                                <GameCardSkeleton  /> 
                            </GameCardContainer>
                    ))}
                {data.map( (game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard  game={game}/>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
        
    )
}

export default GameGrid

//using useeffect hook to send api request to the backend

//Game[] is an array that create using list of object in interface Game

//{games.map( (game) => <li key={game.id}>{game.name}</li>)}

//Before gameQuery

// interface Props {
//     gameQuery: GameQuery;
//     selectedGenre: Genre | null;
//     selectedPlatform: Platform | null;
// }

// const GameGrid = ({selectedGenre,selectedPlatform}: Props) => {
    
//     const {data,error,isLoading} = useGames(selectedGenre, selectedPlatform);
//     const skeletons = [1,2,3,4,5,6];

//     return (
//         <>
//             {error && <Text> {error} </Text>}

//             <SimpleGrid columns={{sm:1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={3}>
//                 {isLoading && 
//                     skeletons.map((skeleton) => (
//                             <GameCardContainer key={skeleton}>
//                                 <GameCardSkeleton  /> 
//                             </GameCardContainer>
//                     ))}
//                 {data.map( (game) => (
//                     <GameCardContainer key={game.id}>
//                         <GameCard  game={game}/>
//                     </GameCardContainer>
//                 ))}
//             </SimpleGrid>
//         </>
        
//     )
// }