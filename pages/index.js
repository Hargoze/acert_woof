import Head from 'next/head'
import Newsletter from "../component/newsletter"
//import SideComponent from "../component/sideComponent"
import { SideComponent } from "../component/sideComponent"
import { getAllData } from '../lib/api'
import {
  Button,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  Divider,
  Link,
  SimpleGrid
} from '@chakra-ui/core'

import { BiBone } from "react-icons/bi"
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa"
import { SiRiot } from "react-icons/si"
import { FaPaw } from "react-icons/fa"

const getImageUrl = ({url}) => {
  if (!url || url === null) {
    return (null)
  } else if ( url.startsWith('/')) {
    const imageUrl = `${
      url.startsWith('/') ? "http://localhost:1337" : ''
    }${url}`
    return imageUrl
  }
}

const Section = ({sections, titre, description, dir}) => {
  if (!sections) {
    return null
  }
  var has_picture = false
  if (sections.image != null) {
    has_picture = true
  }
  var imageUrl = "url"
  if (has_picture === true) {
    imageUrl = getImageUrl(sections.image)
  }
  return (
    <Stack py='16'>
       <Stack display={{base:"flex", lg:"none"}} align="center" textAlign="center" w="100%">
          <Stack maxW={{base:"200px", sm:"300px", md:"400px"}} >
            <Heading fontSize={["xl", "2xl", "4xl", "6xl"]}>{titre}</Heading>
            <Text fontSize={["sm", "md", "lg", "xl"]} color="#FFFAFF"  pt="5%">{description}</Text>
          </Stack>
          {has_picture === true ?
          <Box w={{base:"90%", md:"66%"}}>
            <Image src={imageUrl} alt="oui"/>
          </Box>
          : void 0}
        </Stack>
        <Flex display={{base:"none", lg:"flex"}} align="start" textAlign="center" justify="space-around" direction={ dir == "left" ? "row-reverse" : "row"}>
          <Stack maxW="600px">
            <Heading fontSize={["xl", "2xl", "4xl", "6xl"]}>{titre}</Heading>
            <Text fontSize={["sm", "md", "lg", "xl"]} color="#FFFAFF"  pt="5%">{description}</Text>
          </Stack>
          {has_picture === true ?
          <Box w="40%">
            <Image src={imageUrl} alt="oui"/>
          </Box>
          : void 0}
        </Flex>
    </Stack>
  )
}

const Comment = ({name, job, quote, reco}) => {
  if (!reco) {
    return null
  }
  const imageUrl = `${
    reco.profile.url.startsWith('/') ? "http://localhost:1337" : ''
  }${reco.profile.url}`
  return (
    <Stack w={{base: "60%", lg:"20%"}} align="center" pb="6">
      <Image src={imageUrl} alt={name} rounded="full" size="150px"></Image>
      <Stack align="center" textAlign="center">
        <Text>{name}</Text>
        <Text fontStyle="italic">{job}</Text>
        <Box>
          <Text>{quote}</Text>
        </Box>
      </Stack>
    </Stack>
  )
}
export default function Home({ data }) {
  const sections = data.section
  const recommandations = data.reco
  return (
  <Flex direction="column"
  alignItems="center"
  justifyContent="flex-start"
  width="100%">

    <Head></Head>
    <Box
      backgroundColor="black"
      color="white"
      pl="10%"
      pr="10%"
      >

      <header>
        <Flex mb="5%">          
          <Box width={['0%', 0.6, 0.6]} pt="1%">
            <Link href="#">
              <Box as={FaPaw} fontSize={["0", "2xl", "3xl", "5xl"]} color="acert_red"/>
            </Link>
          </Box>
          <Box position="absolute" right="10%">
            <Heading textTransform="uppercase" fontSize={["0", "xs", "md", "xl"]} pt="5%">
              Nextgen identity & access management
            </Heading>
          </Box>
          <Box width={["100%", 0, 0]} pb="5%" pt="2%">
            <Stack isInline align="left">
                <Box as={FaPaw} fontSize={["xl", "0", "0", "0"]} color="acert_red"/>
              <Heading  textTransform="uppercase" fontSize={["xs", "0", "0", "0"]} fontStyle="bold" pt="1%">
                Nextgen identity & access management
              </Heading>
            </Stack>
          </Box>
        </Flex>
      </header>
      
      <main>
      {sections.map((section, i) => (
        <Section sections={section} titre={section.titre} description={section.description} dir={section.direction} key={i}/>
      ))}

        <Flex align="center" justify="space-around" display={{base:"none", lg:"flex"}}>
        {recommandations.map((reco, i) => (
          <Comment name={reco.name} job={reco.job} quote={reco.quote} reco={reco} key={i}/>
        ))}
        </Flex>
        <Stack align="center" justify="space-around" display={{base:"flex", lg:"none"}}>
        {recommandations.map((reco, i) => (
          <Comment name={reco.name} job={reco.job} quote={reco.quote} reco={reco} key={i}/>
        ))}
        </Stack>

{/*Small dog picture on the top of social medias*/}
        <Box width={["65%", "40%", "25%"]} ml="auto" mr="auto" mt="15%" pr={["15%", "7%", "5%"]}>
          <Image src="https://ekladata.com/9XM16UlLM0ntfHrK9wGzOQxB3Dw.jpg" alt="Dog with red collar" /> 
        </Box>

{/*Social medias*/}
        <Stack w="100%" mt="3" justify="space-around" align="center" h="24">
        <Box mb="2" display={{base:"none", lg:"block"}}>
          <Text textTransform="uppercase" textAlign={{xs:"right", lg:"left"}}> Join the discussion</Text>
        </Box>
        <Stack isInline w="40%" justify="space-around">
          <Link href="https://www.linkedin.com" >
            <Box as={FaLinkedin} size="44px" mx={{xs:"1", lg:"3"}}/>
          </Link>
          <Link href="https://www.github.com">
            <Box as={FaGithub} size="44px" mx={{xs:"1", lg:"3"}}/>
          </Link>
          <Link href="https://www.twitter.com">
            <Box as={FaTwitter} size="44px" mx={{xs:"1", lg:"3"}}/>
          </Link>
          <Link href="https://www.riot.com">
            <Box as={SiRiot} size="44px" mx={{xs:"1", lg:"3"}}/>
          </Link>
        </Stack>
      </Stack>

      

      </main>
      <SideComponent link="#" line1="bring me back" line2="to the normal website"/>
      <Newsletter />
      <footer>
        <Flex pt="10%" pb="2%" fontSize={["md", "lg", "xl", "2xl"]} >
          <span>WOOF</span>
          <Divider orientation="vertical" borderColor="white"/>
          <span>the lovely companion of acert.io</span>       
          <Box position="absolute" right="10%">
            <Stack isInline fontSize={["0", "lg", "xl", "2xl"]}>
              <Text>Made with </Text>
              <Box as={BiBone} fontSize={["0", "xl", "2xl", "4xl"]}/>
            </Stack>       
          </Box>
        </Flex>
        
             
          <Box pb={['5%', "0%", "0%", "0%"]}>
            <Stack isInline fontSize={["md", "0", "0", "0"]}>
              <Text>Made with </Text>
              <Box as={BiBone} fontSize={["lg", "0", "0", "0"]}/>
            </Stack>             
          </Box>
       
      </footer>
    </Box>
  </Flex>
  )
}

export async function getStaticProps() {
  const data = (await getAllData())
  return {
    props: { data }
  }
}