import { Sheet, YStack, XStack, Button, Text } from 'tamagui';

export const TopicDetailsPopup = ({ topic, onClose }) => {
  return (
    <Sheet modal open onOpenChange={onClose}>
      <Sheet.Frame padding="$4" backgroundColor="$background">
        <Sheet.Handle />

        {/* Topic Title */}
        <Text fontSize="$6" fontWeight="bold">{topic.name}</Text>

        {/* Summary */}
        <Text marginTop="$3">{topic.summary}</Text>

        {/* Key Points */}
        <YStack marginTop="$3" gap="$2">
          {topic.keyPoints.map((point, index) => (
            <Text key={index}>• {point}</Text>
          ))}
        </YStack>

        {/* Related Topics */}
        <YStack marginTop="$3">
          <Text fontWeight="bold">Related Topics</Text>
          <XStack gap="$2" marginTop="$2">
            {topic.related.map((relatedId) => (
              <Button key={relatedId} size="$2">
                {topics.find(t => t.id === relatedId)?.name}
              </Button>
            ))}
          </XStack>
        </YStack>

        {/* Close Button */}
        <Button onPress={onClose} marginTop="$4">
          Close
        </Button>
      </Sheet.Frame>
    </Sheet>
  );
};