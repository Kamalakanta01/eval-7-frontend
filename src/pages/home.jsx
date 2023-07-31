import { useSelector } from 'react-redux';
import { Box, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function Home() {
  const token = useSelector((state) => state.token);

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <Box>
    {token===""?
        (<Heading>Please log in</Heading>)
        :
        (<Box>loggen in</Box>)
    }
    </Box>
  );
}
