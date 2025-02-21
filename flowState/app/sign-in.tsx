import { useState } from "react";
import { useSignIn } from "@clerk/clerk-expo";
import { YStack, Input, Button, Text, Separator } from "tamagui";

export default function LoginScreen() {
  const { signIn, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const handleLogin = async () => {
    if (!isLoaded) return;
    setLoading(true);
    try {
      await signIn.create({ identifier: email, password });
    } catch (err: any) {
      setError(err.errors ? err.errors[0].message : "Login failed.");
    }
    setLoading(false);
  };
  
  return (
    <YStack space="$4" alignItems="center" justifyContent="center" flex={1}>
      <Text fontSize={"$8"} fontWeight="bold">
        Login
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
      <Button onPress={handleLogin} disabled={loading} size="$4">
        {loading ? "Logging in..." : "Login"}
      </Button>
      <Separator />
      <Button variant="outlined" onPress={() => console.log("Navigate to Signup")} size="$4">
        Don't have an account? Sign Up
      </Button>
    </YStack>
  );
}