import { Navigate, useOutlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { StyledButton, Box, FlexBox } from '../components/styledCompnents';

const ProtectedRoute = () => {
  const { user, logout } = useAuth();

  const outlet = useOutlet();

  return !user?.name ? (
    <Navigate to="/" />
  ) : (
    <Box>
      <FlexBox>
        {' '}
        <StyledButton onClick={logout}>Logout</StyledButton>
        {outlet}
      </FlexBox>
    </Box>
  );
};
export default ProtectedRoute;
