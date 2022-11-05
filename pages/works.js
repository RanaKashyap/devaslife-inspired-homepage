import { Container, Heading, SimpleGrid, Button, Box, Center } from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from "../components/paragraph"

const Works = () => (
  <Layout title="Works">
    <Container>
      
      <Box align="center" my={4}>
                        <NextLink href="https://github.com/RanaKashyap?tab=repositories">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
                                My GitHub
                            </Button>
                        </NextLink>
                    </Box>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      
        
      <SimpleGrid columns={[1, 1, 2]} gap={6} >
        <Section>
          <Center my={6}>
          <WorkGridItem id="Temperature-Converter-Basic" title="Temperature-Converter" >
            Converts temperature from one unit to other.
          </WorkGridItem></Center>
        </Section>
      </SimpleGrid>
          

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="LeNet5-FashionMNIST" title="Convolutional Neural Network">
            FashionMNIST classification using LeNet-5 architecture
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="TaskTracker" title="Task Tracker" >
            *In Progress*
            <Paragraph>React App which can be used to store task, take notes and set reminders.</Paragraph>
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="scoboard" title="Board Meeting Scheduler" >
            *In Progress*
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'