export default {
  colors: {
    text: 'black',
    background: 'white',
  },
  fonts: {
    body: 'Space Mono, monospace',
    heading: 'Space Mono, monospace',
  },
  buttons: {
    primary: {
      color: 'background',
      bg: '#BC40C7',
      width: '100%',
      height: '72px',
      maxWidth: '280px',
      fontSize: '20px',
      borderRadius: '0',
      '&:hover': {
        bg: 'text',
      }
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
  },
  forms: {
    label: {
      position: 'absolute',
      fontSize: ['50px','128px'],
      fontWeight: 'bold',
      maxWidth: '50%',
      lineHeight: '1',
      top: '-10px',
      left:['26px'],
      '&:hover': {
       color: 'grey',

      },
    },
    input: {
      border: 'none',
      borderRadius: '0',
      marginLeft: '15px',
      color: '#1E252C',
      height: '108px',
    },
  }
}
