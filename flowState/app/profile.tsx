import React, { useState } from "react";
import { 
  YStack, XStack, Avatar, Input, Button, Label, Separator, Text 
} from "tamagui";
import { useUser, useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

const ProfilePage = () => {
  const { user, isSignedIn } = useUser();
  const { signOut } = useAuth();
  const router = useRouter();

  const [name, setName] = useState(user?.fullName || "");
  const [bio, setBio] = useState(user?.publicMetadata?.bio || "");
  const [loading, setLoading] = useState(false);
  
  // Redirect if not signed in
  if (!isSignedIn) {
    router.push("/sign-in");
    return null;
  }

  // Function to save profile changes
  const handleSave = async () => {
    if (!user) return;
    setLoading(true);
    
    try {
      await user.update({
        firstName: name.split(" ")[0] || "",
        lastName: name.split(" ").slice(1).join(" ") || "",
        publicMetadata: { bio },
      });
      alert("Profile updated!");
    } catch (error) {
      alert("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <YStack padding="$4" space="$4">
      {/* Profile Header */}
      <XStack alignItems="center" space="$4">
        <Avatar circular size="$6" source={{ uri: user?.profileImageUrl }} />
        <YStack>
          <Text fontWeight="bold" fontSize="$5">{user?.fullName}</Text>
          <Text color="$gray9">{user?.primaryEmailAddress}</Text>
        </YStack>
      </XStack>

      <Separator />

      {/* Profile Form */}
      <YStack space="$4">
        <Label>Name</Label>
        <Input value={name} onChangeText={setName} />

        <Label>Bio</Label>
        <Input 
          value={bio} 
          onChangeText={setBio} 
          multiline 
          numberOfLines={3} 
        />

        <Button disabled={loading} onPress={handleSave}>
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </YStack>

      <Separator />

      {/* Actions */}
      <YStack space="$3">
        <Button onPress={() => router.push("/settings")}>Settings</Button>
        <Button color="$red10" onPress={signOut}>Sign Out</Button>
      </YStack>
    </YStack>
  );
};

export default ProfilePage;