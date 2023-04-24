import { Box, Button, ButtonGroup, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelected from './components/SortSelected'
import GameHeading from './components/GameHeading'

export interface GameQuery {
   genre: Genre | null;
   platform: Platform | null;
   sortOrder: string;
   searchText: string;
}

function App() {
   const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

   return <>
      <Grid 
         templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
      }}
         templateColumns={{
            base: '1fr',
            lg: '200px 1fr'  //1st column and 2nd column
         }}
      >

         <GridItem area='nav' > 
            <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
         </GridItem>

         <Show above='lg'>
            <GridItem area='aside' padding={5} > 
               <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/> 
            </GridItem>
         </Show>

         <GridItem area='main'> 
            <Box paddingLeft={2}>
               <GameHeading gameQuery={gameQuery}/>
               <Flex marginBottom={5}>
                  <Box marginRight={5}>
                     <PlatformSelector  selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
                  </Box>
                  <SortSelected sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
               </Flex>
            </Box>
            <GameGrid gameQuery={gameQuery} />
            
         </GridItem>

      </Grid>
   </>
}

export default App


//Changes
//1 - Remove the bg color
//<GridItem area='nav' bg='coral' > 
//  <NavBar/>
//</GridItem>

//Before Game grid
// function App() {
//    return <>
//       <Grid templateAreas={{
//          base: `"nav" "main"`,
//          lg: `"nav nav" "aside main"`
//       }}>

//          <GridItem area='nav' > 
//             <NavBar/>
//          </GridItem>

//          <Show above='lg'>
//             <GridItem area='aside' > 
//                Aside 
//             </GridItem>
//          </Show>
//          <GridItem area='main' > 
//             Main
//          </GridItem>

//       </Grid>
//    </>
// }

//Before game query 
//function App(){
// const [selectedGenre, setSelectedGenre] = useState<Genre | null >(null);
// const [selectedPlatform, setSelectedPlatform] = useState<Platform | null >(null);   
// return <>
//       <Grid 
//          templateAreas={{
//             base: `"nav" "main"`,
//             lg: `"nav nav" "aside main"`
//       }}
//          templateColumns={{
//             base: '1fr',
//             lg: '250px 1fr'  //1st column and 2nd column
//          }}
//       >

//          <GridItem area='nav' > 
//             <NavBar/>
//          </GridItem>

//          <Show above='lg'>
//             <GridItem area='aside' padding={5} > 
//                <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre) }/> 
//             </GridItem>
//          </Show>

//          <GridItem area='main'> 
//             <PlatformSelector  selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
//             <GameGrid selectedPlatform ={selectedPlatform} selectedGenre={selectedGenre}/>
//          </GridItem>

//       </Grid>
//    </>
//}