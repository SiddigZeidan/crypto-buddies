/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { Link } from 'gatsby'

const Navigation = ({ ...props }) => (
  <Box sx={{ padding: '40px' }}>
    <Link to="/">
     <img src="/logo.png" alt="Logo" sx={{ height: '24px', width: 'auto' }} />
    </Link>
  </Box>
)

export default Navigation
