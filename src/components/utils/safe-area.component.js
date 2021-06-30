import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

export const Container = styled(SafeAreaView)`
flex: 1;
background-color: ${(props) => props.theme.colors.bg.primary}
paddingTop: ${StatusBar.currentHeight}px;
`;
