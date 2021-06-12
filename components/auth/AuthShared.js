import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  background-color: ${(props) => props.theme.formBgColor};
  border: 1px solid
    ${(props) => (props.hasError ? "tomato" : props.theme.formBorderColor)};
  padding: 12px 7px;
  margin-bottom: 8px;
  border-radius: 4px;
  color: ${(props) => props.theme.formFontColor};
  margin-bottom: ${(props) => (props.lastOne ? "15" : 8)}px;
`;
