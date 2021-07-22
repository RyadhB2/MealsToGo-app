import styled from "styled-components";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.35);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
  width: 75%;
`;

export const AuthButton = styled(Button).attrs({ color: colors.brand.primary })`
  margin: ${(props) => props.theme.space[1]};
  padding: ${(props) => props.theme.space[2]};
`;

export const LoginInput = styled(TextInput)`
  margin-bottom: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.space[1]};
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;

  text-align: center;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
