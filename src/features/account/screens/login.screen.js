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

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);

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
          secure
          onChangeText={(text) => setPassword(text)}
        />
        {error && (
          <ErrorContainer>
            <Text style={{textAlign:'center'}} variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => onLogin(email, password)}
        >
          Login
        </AuthButton>
      </AccountContainer>

      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};
