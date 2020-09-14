import { Box, Text, Stack, IconButton, Icon, Image, Link, Flex, Button, PseudoBox} from "@chakra-ui/core";
import React from 'react'

export const SideComponent = ({link, line1, line2}) => {
    return (
    <Stack
            pos="fixed" 
            bottom="40" 
            right="0"
            zIndex="100"
            align="flex-end"
            display={{base:"none", lg:"flex"}}
            mr="4"
        > 
        <Link href={link} _hover={{textDecoration:"none"}}>
            <Flex 
                bg="white"
                p="2"
                rounded="lg"
                align="center"
                justify="start"
                bg="gray.100"
                w="290px"
                border="1px" borderRadius="md" borderColor="primary.200"
            >
                <Icon name="repeat" color="primary.500" size="32px"/>
                <Box textAlign="left" pl="4">
                    <Text color="primary.500" fontSize="15px" maxWidth="160px">{line1}</Text>
                    <Text color="primary.500" fontSize="21px" fontWeight="bold">{line2}</Text>
                </Box>
            </Flex>
        </Link> 
    </Stack>
    )
}