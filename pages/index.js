import Head from 'next/head'
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
  Link
} from '@chakra-ui/core'

import { BiBone } from "react-icons/bi"
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa"
import { SiRiot } from "react-icons/si"
import { FaPaw } from "react-icons/fa"

const getImageUrl = ({url}) => {
  console.log("URL :", url)
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
  //console.log("SEC:", sections, "URL:", url)
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
  console.log("NEW URL:", imageUrl, "for :", titre, "has pic:",has_picture)
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

const Comment = ({name, job, quote, url}) => {
  return (
    <Box display={{ md: "flex" }} mb={['5%', "0%", "0%", "0%"]}>
      <Box pr={['5%', "0%", "0%", "0%"]} lineHeight="110%" textAlign="center" >
        <Image src={url} rounded="full" p={['1%', "0%", "0%", "0%"]} width={['200px', "0%", "0%", "0%"]} mx="auto" mb="4%"></Image>
        <Text>{name}</Text>
        <Text fontStyle="italic">{job}</Text>
      </Box>
      <Box>
        <Text>{quote}</Text>
      </Box>
    </Box>
  )
}
export default function Home({ data }) {
  //console.log("here is the data :", data.section, "recommandations now :", data.reco)
  const sections = data.section
  const recommandations = data.reco
  //console.log("section first :", sections[0].image.url, "recommandations now :", recommandations)
  return (
  <div>
      <head>
      
      </head>

    <Box
      backgroundColor="black"
      color="white"
      pl="10%"
      pr="10%"
      >

      <header>
        <Flex mb="5%">          
            <Box width={['0%', 0.6, 0.6]} pt="1%">
              <Box as={FaPaw} fontSize={["0", "2xl", "3xl", "5xl"]} color="acert_red"/>
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
      <Section titre="titre2" description="description2"/>

{/*Recommendation section for middle and large screen size*/}    
      <Box w={[0, "100%", "100%", "100%"]} borderWidth="1px" rounded="lg" borderColor="#0F0F0F" mt="15%">
        <Box mb={[0, "5%", "5%", "5%"]} display={{base:"none", lg:"block"}} textAlign="center">
            <Heading fontSize={[0, "xl", "3xl", "5xl"]}>They Recommend Us</Heading>
          </Box>

        <Stack mt={[0, "5%", "5%", "5%"]} justify="space-around" align="center">
          
        <Box display={{ md: "flex" }} fontSize={[0, "md", "lg", "xl"]} >
            
            <Box p={[0, "2%", "2%", "2%"]} w="25%">
              <Image src="https://pbs.twimg.com/profile_images/964468428856872960/Mo11mN9b_400x400.jpg" alt="Fabien" rounded="full" w="180px" mx="auto" mb="4%"></Image>
              <Text textAlign="center" >Fabien Imbault</Text>
              <Text textAlign="center" fontStyle="italic" mb="4%">CEO acert.io</Text>
              <Text textAlign="center">Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome.</Text>
            </Box>

            <Box p={[0, "2%", "2%", "2%"]}  w="25%">
            <Image src="https://media-exp1.licdn.com/dms/image/C4D03AQHkci2rD306mw/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=fJ_iUaTVHajI120N_WG9_q_SXc1nN04CtgQZIsQoii8" alt="Smart trainee" rounded="full" w="180px" mx="auto" mb="4%"></Image>
              <Text textAlign="center" >François</Text>
              <Text textAlign="center" fontStyle="italic" mb="4%">Trainee</Text>
              <Text textAlign="center">This web site is cool but honestly, I prefer the other one: more work, more content and fewer dogs.</Text>
            </Box>

            <Box p={[0, "2%", "2%", "2%"]}  w="25%">
              <Image src="\bernese-mountain-dog-wears-glasses.jpg" alt="Smart dog" rounded="full" w="180px" mx="auto" mb="4%"></Image>
              <Text textAlign="center" >Bandit</Text>
              <Text textAlign="center" fontStyle="italic" mb="4%">Smart dog</Text>
              <Text textAlign="center">Woof, woof wof warf wofwof. Nextgen wof, wof woof! Woof woooof. Warf woof wif!</Text>
            </Box>

            <Box p={[0, "2%", "2%", "2%"]}  w="25%">
              <Image src="\Kevin-Mitnick-crop.jpg" alt="Kevin Mitnick" rounded="full"  w="180px" mx="auto" mb="4%"></Image>
              <Text textAlign="center" >Kevin Mitnick</Text>
              <Text textAlign="center" fontStyle="italic" mb="4%">Famous hacker</Text>
              <Text textAlign="center">I never managed to crack Fabien's password. I think this says it all.</Text>
            </Box>
            
          </Box>
        </Stack>
      </Box>


{/*Recommendation section for small screen size*/}
      <Box 
        fontSize={["sm", 0, 0, 0]}
        mb={['15%', "0%", "0%", "0%"]}
        mt={['5%', "0%", "0%", "0%"]}
        p={['5%', "0%", "0%", "0%"]}
        borderWidth="1px" rounded="lg" borderColor="#0F0F0F"
      >
          <Box display={{base:"none", lg:"block"}} textAlign="center" pb={['10%', "0%", "0%", "0%"]}>
            <Heading fontSize={["xl", 0, 0, 0]}>They Recommend Us</Heading>
          </Box>

          <Comment 
          name="Fabien Imbault"
          job="CEO acert.io"
          quote="Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome."
          url="https://pbs.twimg.com/profile_images/964468428856872960/Mo11mN9b_400x400.jpg"
          />

          <Box display={{ md: "flex" }} mb={['5%', "0%", "0%", "0%"]}>
            <Box pr={['5%', "0%", "0%", "0%"]} lineHeight="110%" textAlign="center" >
              <Image src="https://media-exp1.licdn.com/dms/image/C4D03AQHkci2rD306mw/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=fJ_iUaTVHajI120N_WG9_q_SXc1nN04CtgQZIsQoii8" alt="Smart trainee" rounded="full" p={['1%', "0%", "0%", "0%"]} width={['200px', "0%", "0%", "0%"]} mx="auto" mb="4%"></Image>
              <Text>François</Text>
              <Text fontStyle="italic">Trainee</Text>
            </Box>
            <Box>
              <Text>This web site is cool but honestly, I prefer the other one: more work, more content and fewer dogs.</Text>
            </Box>
          </Box>

          <Box display={{ md: "flex" }} mb={['5%', "0%", "0%", "0%"]}>
            <Box pr={['5%', "0%", "0%", "0%"]} lineHeight="110%" textAlign="center" >
              <Image src="\bernese-mountain-dog-wears-glasses.jpg" alt="Smart dog" rounded="full" p={['1%', "0%", "0%", "0%"]} width={['200px', "0%", "0%", "0%"]} mx="auto" mb="4%"></Image>
              <Text>Bandit</Text>
              <Text fontStyle="italic">Smart dog</Text>
            </Box>
            <Box>
              <Text>Woof, woof wof warf wofwof. Nextgen wof, wof woof! Woof woooof. Warf woof wif!</Text>
            </Box>
          </Box>

          <Box display={{ md: "flex" }} mb={['5%', "0%", "0%", "0%"]}>
            <Box pr={['5%', "0%", "0%", "0%"]} lineHeight="110%" textAlign="center" >
              <Image src="\Kevin-Mitnick-crop.jpg" alt="Kevin Mitnick" rounded="full" p={['1%', "0%", "0%", "0%"]} width={["200px", "0%", "0%", "0%"]} mx="auto" mb="4%"></Image>
              <Text>Kevin Mitnick</Text>
              <Text fontStyle="italic">Famous hacker</Text>
            </Box>
            <Box>
              <Text>I never managed to crack Fabien's password. I think this says it all.</Text>
            </Box>
          </Box>

      </Box>


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
  </div>
  )
}

export async function getStaticProps() {
  const data = (await getAllData())
  //console.log("here is the data :", data.section, "recommandations now :", data.reco)
  return {
    props: { data }
  }
}