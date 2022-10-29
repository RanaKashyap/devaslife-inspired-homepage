import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Button, Link } from "@chakra-ui/react"
import Head from "next/head"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article.js'
import Paragraph from "../components/paragraph"
import Section from "../components/section"
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a undergrad at University of Central Florida!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Kashyap Rana
                        </Heading>
                        <p> Developer </p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/rbglogo1.png" alt="Profile Image" />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">Work</Heading>
                    <Paragraph>Paragraph</Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>Present</BioYear>
                        Studying at University of Central Florida in Orlando, FL.
                    </BioSection>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page