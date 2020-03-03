/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui'
import Navigation from '../components/Navigation'
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const GET_BUDDIES = gql`
{
buddy(where: {id: "ck6rfsva8ksvm0960vruqk4pa"}) {
    id
    name,
    image
  }
}`

const Index = ({ location }) => {

const { state = {} } = location;
    
const {loading, error, data:{ buddy = [] } = {} } = useQuery(GET_BUDDIES)
  if (loading) return <p>Loading fresh cryptobuddies...</p>;
  if (error) return <p>Error, data cannot be loading</p>;
  return (
    <Container>
        <Box sx={{ fontFamily: 'heading' }}>
            <Navigation />

            <Box sx={{padding: '40px'}}>  
              <div sx={{display: ['block','flex']}}>
                <img sx={{flexBasis: '20%', 
                          borderRadius: '50%', 
                          maxWidth: '168px', 
                          flex: '1', 
                          alignSelf: 'center',
                          marginRight: '56px',
                          }} src={buddy.image} alt={buddy.name}/>

                <h1 sx={{fontSize: ['50px','128px'], 
                        maxWidth: ['none', '50%'], 
                        lineHeight: '1'}}>{buddy.name}</h1>
              </div>
                
              <Button>Add Buddy</Button>
            </Box>
                    
        
        </Box>
    </Container>

  )
}

export default Index
