import React from 'react';
import { XStack, YStack, Text, Divider, Image } from 'tamagui';

type AttachmentType = 'audio' | 'image' | 'video' | 'document';

interface Attachment {
  type: AttachmentType;
  uri: string;
}

interface UserMessageProps {
  text: string;
  attachments?: Attachment[];
}

const renderAttachment = (attachment: Attachment) => {
  switch (attachment.type) {
    case 'audio':
      // Replace with your actual audio waveform component if available
      return (
        <YStack
          key={attachment.uri}
          padding="$2"
          borderRadius="$3"
          backgroundColor="$gray4"
        >
          <Text size="$2">Audio Waveform</Text>
        </YStack>
      );
    case 'image':
      return (
        <Image
          key={attachment.uri}
          source={{ uri: attachment.uri }}
          width={100}
          height={100}
          borderRadius="$3"
          alt="attachment image"
        />
      );
    case 'video':
      return (
        <YStack key={attachment.uri} position="relative">
          <Image
            source={{ uri: attachment.uri }}
            width={100}
            height={100}
            borderRadius="$3"
            alt="video thumbnail"
          />
          {/* Overlay a play icon or text */}
          <Text
            position="absolute"
            bottom={5}
            right={5}
            color="white"
            fontSize={12}
          >
            Play
          </Text>
        </YStack>
      );
    case 'document':
      return (
        <YStack
          key={attachment.uri}
          padding="$2"
          borderRadius="$3"
          backgroundColor="$gray4"
          alignItems="center"
        >
          <Text size="$2">Document</Text>
        </YStack>
      );
    default:
      return null;
  }
};

const UserMessage = ({ text, attachments }: UserMessageProps) => {
  return (
    <XStack justifyContent="flex-end" padding="$2">
      <YStack
        backgroundColor="$blue10"
        padding="$3"
        borderRadius="$4"
        maxWidth="80%"
      >
        {attachments && attachments.length > 0 && (
          <>
            <XStack space="$2" marginBottom="$2">
              {attachments.map(renderAttachment)}
            </XStack>
            <Divider my="$2" />
          </>
        )}
        <Text color="white">{text}</Text>
      </YStack>
    </XStack>
  );
};

export default UserMessage;