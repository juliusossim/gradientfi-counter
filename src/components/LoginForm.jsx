import useLogin from '../hooks/useLogin';
import { Box, StyledButton, StyledForm, StyledHeader, StyledInput } from './styledCompnents';

const LoginForm = () => {
  const { login, errors, validateEmail } = useLogin();
  return (
    <Box>
      <StyledHeader>Login</StyledHeader>
      <StyledForm onSubmit={login}>
        <StyledInput
          onChange={validateEmail}
          name="email"
          placeholder="Email"
          required
          type="email"
          width="24vw"
          errors={errors}
        />
        <StyledInput width="24vw" name="password" placeholder="Password" required type="password" />
        <StyledButton width="25vw" type="submit" errors={errors}>
          Login
        </StyledButton>
      </StyledForm>
    </Box>
  );
};
export default LoginForm;
