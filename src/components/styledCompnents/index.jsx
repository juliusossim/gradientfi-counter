import styled from 'styled-components';
import { device } from './constants';

export const StyledText = styled.div`
  font-size: ${(props) => props.theme.normal};
  font-family: 'Mogra', cursive;
  width: ${(props) => props.width};
  text-align: ${(props) => props.textAlign};
  padding-left: ${(props) => props.theme.gap.normal};
  align-items: center;
  color: ${(props) => props.theme.main.dark};
`;
export const PaddedTex = styled(StyledText)`
  padding: ${(props) => props.theme.gap.small};
`;
export const BigText = styled(StyledText)`
  font-size: ${(props) => props.theme.fontSize.big};
`;
export const StyledTitle = styled(StyledText)`
  font-size: ${(props) => props.theme.fontSize.title};
`;
export const StyledHeader = styled(StyledText)`
  font-size: ${(props) => props.theme.fontSize.header};
`;
export const Box = styled.div`
  align-items: center;
  padding-right: ${(props) => props.theme.gap.small};
  padding-left: ${(props) => props.theme.gap.small};
  padding-bottom: ${(props) => props.paddingBottom};
  margin-top: ${(props) => props.margin};
  margin-bottom: ${(props) => props.margin};
`;
export const StyledLayout = styled(Box)`
  width: 50vw;
  justify-content: center;
  display: solid;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
  padding: ${(props) => `${props.theme.gap.normal} ${props.theme.gap.large}`};
  border: solid 1px;
`;
export const FlexBox = styled(Box)`
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
  align-items: center;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export const StyledButton = styled.button`
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: 'Mogra', cursive;
  padding: 10px;
  min-width: 10vw;
  width: ${(props) => props.width};
  color: ${(props) => (props.errors ? props.theme.error.dark : props.theme.main.white)};
  border: ${(props) => (props.errors ? props.theme.error.dark : props.theme.info.dark)};
  margin: ${(props) => `${props.theme.gap.small} ${props.theme.gap.big}`};

  background: ${(props) => (props.errors ? props.theme.info.light : props.theme.main.dark)};
  &: hover {
    border: 'solid 1px #de3';
    border-radius: 10px;
    background: ${(props) => (props.errors ? props.theme.error.light : props.theme.main.light)};
    color: ${(props) => props.hoverColor};
    transition: all 0.5s ease;
  }

  margin: ${(props) => props.margin};
`;

export const StyledInput = styled.input`
  color: ${(props) => (props.errors ? props.theme.error.dark : props.theme.main.dark)};
  border: ${(props) => props.border};
  width: ${(props) => props.width || '35vw'};
  margin: ${(props) => `${props.theme.gap.small} ${props.theme.gap.big}`};
  padding: ${(props) => `${props.theme.gap.small} ${props.theme.gap.big}`};
  margin-top: ${(props) => props.theme.gap.big};
  font-size: ${(props) => (props.errors ? props.theme.fontSize.big : props.theme.fontSize.normal)};
  &: focus-visible {
    background: linear-gradient(
      90deg,
      rgba(72, 68, 144, 1) 0%,
      rgba(148, 148, 189, 1) 35%,
      rgba(125, 74, 166, 1) 100%
    );
    outline: none;
    border: none;
    background: ${(props) => props.hoverBackground};
    color: #fff;
  }
`;
export const StyledForm = styled.form`
  justify-content: center;
  align-content: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 75vw;
  padding: 2vh 5vw;
  background: ${(props) => props.background};
  &: hover {
    border: ${(props) => props.border};
    background: ${(props) => props.hoverBackground};
  }
`;
