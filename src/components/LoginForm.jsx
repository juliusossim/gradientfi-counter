import useLogin from '../hooks/useLogin';
import {
  FlexBox,
  StyledButton,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledLayout
} from './styledCompnents';

const LoginForm = () => {
  const { login, errors, validateEmail } = useLogin();
  return (
    <StyledLayout>
      <StyledHeader>Login</StyledHeader>
      <StyledForm onSubmit={login}>
        <FlexBox>
          <StyledInput
            onChange={validateEmail}
            name="email"
            placeholder="Email"
            required
            type="email"
            width="24vw"
            errors={errors}
          />
        </FlexBox>
        <FlexBox>
          <StyledInput
            width="24vw"
            name="password"
            placeholder="Password"
            required
            type="password"
          />
        </FlexBox>
        <FlexBox>
          {' '}
          <StyledButton width="25vw" type="submit" errors={errors}>
            Login
          </StyledButton>
        </FlexBox>
      </StyledForm>
    </StyledLayout>
  );
};
export default LoginForm;
