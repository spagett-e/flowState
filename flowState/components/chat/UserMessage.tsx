import React from 'react';
import { XStack, YStack, Text, Separator, Image } from 'tamagui';

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
        >
          <Text>Audio Waveform</Text>
        </YStack>
      );
    case 'image':
      return (
        <Image
          key={attachment.uri}
          source={{ uri: attachment.uri }}
          alt="attachment image"
        />
      );
    case 'video':
      return (
        <YStack key={attachment.uri}>
          <Image
            source={{ uri: attachment.uri }}
            alt="video thumbnail"
          />
          {/* Overlay a play icon or text */}
          <Text>
            Play
          </Text>
        </YStack>
      );
    case 'document':
      return (
        <YStack
          key={attachment.uri}
        >
          <Text>Document</Text>
        </YStack>
      );
    default:
      return null;
  }
};

const UserMessage = ({ text, attachments }: UserMessageProps) => {
  return (
    <XStack>
      <YStack>
        {attachments && attachments.length > 0 && (
          <>
            <XStack>
              {attachments.map(renderAttachment)}
            </XStack>
            <Separator />
          </>
        )}
        <Text>{text}</Text>
      </YStack>
    </XStack>
  );
};

export default UserMessage;