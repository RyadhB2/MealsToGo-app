import React, { useContext } from "react";
import { Container } from "../../../components/utils/safe-area.component";
import { List, Avatar } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <Container>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#3182BD" />

        <Text variant="label">{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="List of your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </Container>
  );
};
