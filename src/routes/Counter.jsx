import {
  BigText,
  FlexBox,
  PaddedTex,
  StyledButton,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledLayout,
  StyledText
} from '../components/styledCompnents';
import useCounter from '../hooks/useCounter';

const Counter = () => {
  const { paraCap, decreaseCount, increaseCount, count, setVal, user } = useCounter(); // custom hook

  return (
    <StyledLayout>
      <FlexBox>
        <BigText>Welcome,</BigText>
        <PaddedTex>
          {' '}
          <StyledHeader>{paraCap(user?.name)}</StyledHeader>
        </PaddedTex>
      </FlexBox>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <StyledInput
          onChange={(e) => setVal(parseInt(e.target.value, 10))}
          type="number"
          name="val"
          width="25vw"
          placeholder="enter amount to operate"
        />
        <FlexBox>
          {' '}
          <StyledButton width={count > 0 ? '' : '25.5vw'} onClick={increaseCount}>
            Increase
          </StyledButton>
          {count > 0 && <StyledButton onClick={decreaseCount}>Decrease</StyledButton>}
        </FlexBox>
      </StyledForm>
      <FlexBox>
        <StyledText>The count is</StyledText>
        <PaddedTex>
          <StyledHeader>{count}</StyledHeader>
        </PaddedTex>
      </FlexBox>
    </StyledLayout>
  );
};
export default Counter;
