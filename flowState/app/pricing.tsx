import { YStack, XStack, Card, Heading, Text, Button, Separator } from 'tamagui';

const Pricing = () => {
  return (
    <YStack space="$4" alignItems="center" padding="$6">
      <Heading size="$8">Choose Your Plan</Heading>
      <Text size="$4" color="$gray10">
        Upgrade for more features and better performance.
      </Text>

      <XStack space="$4" flexWrap="wrap" justifyContent="center">
        {/* Free Plan */}
        <Card bordered padding="$6" width={300} space="$4">
          <Heading size="$6">Free</Heading>
          <Text size="$3" color="$gray10">For personal use</Text>
          <Separator />
          <YStack space="$2">
            <Text>- Basic AI Chat</Text>
            <Text>- Limited Message History</Text>
            <Text>- No Attachments</Text>
          </YStack>
          <Button theme="alt1" disabled>Current Plan</Button>
        </Card>

        {/* Pro Plan */}
        <Card bordered padding="$6" width={300} space="$4">
          <Heading size="$6">Pro</Heading>
          <Text size="$3" color="$gray10">For professionals & teams</Text>
          <Separator />
          <YStack space="$2">
            <Text>- Unlimited AI Chats</Text>
            <Text>- Full Message History</Text>
            <Text>- Attachments & File Support</Text>
            <Text>- Priority Support</Text>
          </YStack>
          <Button theme="active" onPress={() => {/* Handle checkout */}}>
            Upgrade to Pro
          </Button>
        </Card>
      </XStack>
    </YStack>
  );
};

export default Pricing;