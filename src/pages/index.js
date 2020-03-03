/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, Box, Container, Label, Input } from 'theme-ui'
import { keyframes } from '@emotion/core' 
import Navigation from '../components/Navigation'
import ProfileList from '../components/ProfileList'
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const GET_BUDDIES = gql`
{
  buddies {
    id
    name,
    image
  }
}`

const blinkingCaret = keyframes`
from, 20%, 53%, 80%, to {
  border-left: 1px solid transparent;
}

  50% {
    border-left: 1px solid #333;
  }
`
const Index = ({ ...props }) => {
  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })
  

  const handleInputChange = event => {
    console.log(event.target.value)
  }

  const {loading, error, data:{ buddies = [] } = {} } = useQuery(GET_BUDDIES)
  if (loading) return <p>Loading fresh cryptobuddies...</p>;
  if (error) return <p>Error, data cannot be loading</p>;

  
  return (
    <Box sx={{ fontFamily: 'heading' }}>
      <Navigation />
      <Box
        as='form'
        onSubmit={e => e.preventDefault()}
        sx={{position:'relative'}}
        mb='276px'
        ml='100px'
        pl='15px'>

          <Label htmlFor='search'>Crypto Buddies</Label>
          <Input
            name='search'
            mb={3}
            onChange={handleInputChange}
            sx={{ animation:` ${blinkingCaret} 1s ease infinite`}}
          />
      </Box>
      
      <Box sx={{ maxWidth: '1400px',
                 margin: '0 auto',
                padding: '0 15px'}}>
        <h2 sx={{fontSize:'48px',
                  padding: '64px 30px'}}>Fresh Cryptobuddies</h2>

        <div sx={{display: 'flex',
                  flexWrap: 'wrap'}}>
          <ProfileList buddies={buddies} />
        </div>
      </Box>
      
    </Box>
  )
}

export default Index
