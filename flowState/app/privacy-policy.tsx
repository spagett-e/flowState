import { YStack, Text, ScrollView } from 'tamagui';

const PrivacyPolicy = () => {
  return (
    <ScrollView>
      <YStack padding="$4">
        <Text fontSize="$6" fontWeight="bold">Privacy Policy</Text>
        <Text>Last updated: [Date]</Text>

        <Text fontWeight="bold">1. Introduction</Text>
        <Text>
          We value your privacy. This policy explains how we collect, use, and protect your data.
        </Text>

        <Text fontWeight="bold">2. Data Collection</Text>
        <Text>
          We collect data to improve our services, including account information and usage data.
        </Text>

        <Text fontWeight="bold">3. How We Use Your Data</Text>
        <Text>
          Your data is used to provide, maintain, and improve our services. We do not sell your data.
        </Text>

        <Text fontWeight="bold">4. Cookies & Tracking</Text>
        <Text>
          We use cookies and analytics to improve user experience and measure performance.
        </Text>

        <Text fontWeight="bold">5. Third-Party Services</Text>
        <Text>
          We may use third-party services for payments, analytics, and other functions.
        </Text>

        <Text fontWeight="bold">6. Security</Text>
        <Text>
          We take security seriously and implement best practices to protect your information.
        </Text>

        <Text fontWeight="bold">7. Changes to Policy</Text>
        <Text>
          We may update this policy. Continued use of our services means acceptance of changes.
        </Text>
      </YStack>
    </ScrollView>
  );
};

export default PrivacyPolicy;