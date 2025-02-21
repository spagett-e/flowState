import { YStack, Text, ScrollView } from 'tamagui';

const TermsOfService = () => {
  return (
    <ScrollView>
      <YStack padding="$4">
        <Text fontSize="$6" fontWeight="bold">Terms of Service</Text>
        <Text>Last updated: [Date]</Text>

        <Text fontWeight="bold">1. Introduction</Text>
        <Text>
          Welcome to [Your SaaS Name]. By accessing our services, you agree to these terms.
        </Text>

        <Text fontWeight="bold">2. Use of Service</Text>
        <Text>
          You may not use our services for illegal purposes. Violation may result in account termination.
        </Text>

        <Text fontWeight="bold">3. User Accounts</Text>
        <Text>
          You are responsible for maintaining the security of your account and any activity under it.
        </Text>

        <Text fontWeight="bold">4. Payments & Refunds</Text>
        <Text>
          Payments are processed securely. No refunds are provided unless required by law.
        </Text>

        <Text fontWeight="bold">5. Termination</Text>
        <Text>
          We reserve the right to suspend or terminate accounts that violate these terms.
        </Text>

        <Text fontWeight="bold">6. Changes to Terms</Text>
        <Text>
          We may update these terms periodically. Continued use of our services means acceptance of changes.
        </Text>
      </YStack>
    </ScrollView>
  );
};

export default TermsOfService;