import { useSelector } from 'react-redux';
import { Box, Button, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const token = useSelector((state) => state.token);
  const navigation = useNavigate()
  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <Box>
    {token===""?
        (
          <Box>
            <Heading>Please log in</Heading>
            <Button onClick={()=>{navigation("/login")}}>Login</Button>
          </Box>
        )
        :
        (<Box>loggen in</Box>)
    }
    </Box>
  );
}
