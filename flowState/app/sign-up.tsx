import { useState } from "react";
import { useSignUp } from "@clerk/clerk-expo";
import { YStack, Input, Button, Text, Separator } from "tamagui";

export default function SignupScreen() {
  const { signUp, isLoaded } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async () => {
    if (!isLoaded) return;
    setLoading(true);
    try {
      await signUp.create({ emailAddress: email, password });
      await signUp.prepareEmailAddressVerification();
      console.log("Verification email sent!");
    } catch (err: any) {
      setError(err.errors ? err.errors[0].message : "Signup failed.");
    }
    setLoading(false);
  };

  return (
    <YStack space="$4" alignItems="center" justifyContent="center" flex={1}>
      <Text fontSize={"$8"} fontWeight="bold">
        Sign Up
      </Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        size="$4"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        size="$4"
        secureTextEntry
      />
      {error ? <Text color="red">{error}</Text> : null}
      <Button onPress={handleSignup} disabled={loading} size="$4">
        {loading ? "Signing up..." : "Sign Up"}
      </Button>
      <Separator />
      <Button variant="outlined" onPress={() => console.log("Navigate to Login")} size="$4">
        Already have an account? Login
      </Button>
    </YStack>
  );
