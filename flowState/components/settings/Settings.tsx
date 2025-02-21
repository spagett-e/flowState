import React from 'react';
import { Popover, Button, XStack, YStack, Text, Avatar } from 'tamagui';
import { useRouter } from 'expo-router';
// Replace with your auth hook; for example, if using Clerk:
import { useUser } from '@clerk/clerk-expo';

const SettingsDropdown = () => {
  const router = useRouter();
  const { user, isSignedIn } = useUser(); // assume this provides user data
  
  const handleProfileClick = () => {
    router.push('/profile');
  };
  
  const handleSignOut = () => {
    // Your sign-out logic here
  };
  
  const handleSignIn = () => {
    router.push('/sign-in');
  };
  
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button>
          {isSignedIn ? (
            <XStack alignItems="center" space="$2">
              <Avatar size="$3" source={{ uri: user?.profileImageUrl }} />
              <Text>{user?.fullName}</Text>
            </XStack>
          ) : (
            <Text>Sign In</Text>
          )}
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <YStack space="$2" padding="$3">
          {isSignedIn ? (
            <>
              <Button onPress={handleProfileClick}>Profile</Button>
              <Button onPress={handleSignOut}>Sign Out</Button>
            </>
          ) : (
            <Button onPress={handleSignIn}>Sign In</Button>
          )}
        </YStack>
      </Popover.Content>
    </Popover>
  );
};

export default SettingsDropdown;