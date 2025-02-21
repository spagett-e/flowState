import { Sheet, YStack, XStack, Button, Text } from 'tamagui';

export const TopicDetails = ({ topic, onClose }) => {
  return (
    <Sheet modal open onOpenChange={onClose}>
      <Sheet.Frame>
        <Sheet.Handle />

        {/* Topic Title */}
        <Text fontSize="$6" fontWeight="bold">{topic.name}</Text>

        {/* Summary */}
        <Text>{topic.summary}</Text>

        {/* Key Points */}
        <YStack gap="$2">
          {topic.keyPoints.map((point, index) => (
            <Text key={index}>• {point}</Text>
          ))}
        </YStack>

        {/* Related Topics */}
        <YStack>
          <Text fontWeight="bold">Related Topics</Text>
          <XStack gap="$2">
            {topic.related.map((relatedId) => (
              <Button key={relatedId} size="$2">
                {topic.find(t => t.id === relatedId)?.name}
              </Button>
            ))}
          </XStack>
        </YStack>

        {/* Close Button */}
        <Button onPress={onClose}>
          Close
        </Button>
      </Sheet.Frame>
    </Sheet>
  );
};