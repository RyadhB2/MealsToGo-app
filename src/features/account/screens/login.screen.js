import React, { useContext, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  LoginInput,
  AuthButton,
  ErrorContainer,
} from "../components/account.styles";
import { Title } from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { ActivityIndicator, Colors } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  console.log(isLoading);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <LoginInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />

        <LoginInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        {error && (
          <ErrorContainer>
            <Text style={{ textAlign: "center" }} variant="error">
              {error}
            </Text>
          </ErrorContainer>
        )}

        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
      </AccountContainer>

      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};
