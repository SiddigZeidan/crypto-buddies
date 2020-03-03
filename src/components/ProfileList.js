/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { Link } from 'gatsby'

function ProfileList(props){
    const buddies = props.buddies;
    const buddiesList =  buddies.map(buddy => (
      
        <Box sx={{flexBasis: ['100%', '50%', '20%'],
                  marginBottom: '35px',
                  padding: '25px',
                  }} 
                  key={buddy.id}>

            <Link to={`/details?${buddy.id}`} 
                  key={buddy.id}
                  state={{id:buddy.id}}>
                  
                  <img src={buddy.image} 
                  state={{ buddyId: buddy.id }}
                  sx={{borderRadius: '50%',
                      maxWidth: '100%',
                      display: 'block',
                      margin: '0 auto',
                      transition: 'all 0.5s ease',
                      ':hover':{
                        transform: 'scale(1.05)'
                      }}} 
                  alt={buddy.name}/></Link>

          <p as="h4" sx={{textAlign: 'center',
                          fontSize: '14px' }}>{buddy.name}</p>
        </Box>
      
      ));
      return (
        buddiesList
      );
}

export default ProfileList