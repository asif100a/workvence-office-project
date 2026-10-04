import { Eye, Trash2, X } from "lucide-react-native";
import React from "react";
import {
  Alert,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export type PhotoAttachment = {
  id: string;
  name: string;
  uri: string;
};

type AttachmentsSectionProps = {
  initialAttachments?: PhotoAttachment[];
  title?: string;
};

function AttachmentRow({
  attachment,
  onRemove,
  onPreview,
}: {
  attachment: PhotoAttachment;
  onRemove: () => void;
  onPreview: () => void;
}) {
  return (
    <View className="h-[42px] flex-row items-center rounded-lg border border-[#EEF0F3] bg-white px-3">
      <Text className="flex-1 text-[#10151C] text-sm" numberOfLines={1}>
        {attachment.name}
      </Text>
      <TouchableOpacity
        className="h-8 w-8 items-center justify-center"
        onPress={onRemove}
        activeOpacity={0.7}
      >
        <Trash2 size={16} color="#111820" strokeWidth={1.7} />
      </TouchableOpacity>
      <TouchableOpacity
        className="h-8 w-8 items-center justify-center"
        onPress={onPreview}
        activeOpacity={0.7}
      >
        <Eye size={16} color="#111820" strokeWidth={1.7} />
      </TouchableOpacity>
    </View>
  );
}

function AttachmentPreviewModal({
  attachment,
  onClose,
}: {
  attachment: PhotoAttachment | null;
  onClose: () => void;
}) {
  return (
    <Modal
      visible={Boolean(attachment)}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <Pressable
        className="flex-1 px-5 py-14"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onPress={onClose}
      >
        <View
          className="flex-1 justify-center"
          onStartShouldSetResponder={() => true}
        >
          <View className="overflow-hidden rounded-2xl bg-white">
            <View className="h-12 flex-row items-center border-b border-[#EEF0F3] px-4">
              <Text
                className="flex-1 text-[#10151C] text-sm font-semibold"
                numberOfLines={1}
              >
                {attachment?.name}
              </Text>
              <TouchableOpacity
                className="h-8 w-8 items-center justify-center"
                onPress={onClose}
                activeOpacity={0.7}
              >
                <X size={18} color="#10151C" strokeWidth={1.8} />
              </TouchableOpacity>
            </View>
            {attachment ? (
              <Image
                source={{ uri: attachment.uri }}
                className="h-[420px] w-full bg-[#F4F5F7]"
                resizeMode="contain"
              />
            ) : null}
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

export default function AttachmentsSection({
  initialAttachments = [],
  title = "Attachments",
}: AttachmentsSectionProps) {
  const [attachments, setAttachments] =
    React.useState<PhotoAttachment[]>(initialAttachments);
  const [previewAttachment, setPreviewAttachment] =
    React.useState<PhotoAttachment | null>(null);

  const handleAddPhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "Please allow photo library access to add an attachment."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      allowsMultipleSelection: false,
    });

    if (result.canceled) return;

    const asset = result.assets[0];
    const extension = asset.uri.split(".").pop()?.split("?")[0] ?? "jpg";
    const fallbackName = `photo_${Date.now()}.${extension}`;

    setAttachments((current) => [
      ...current,
      {
        id: `${asset.uri}-${Date.now()}`,
        name: asset.fileName ?? fallbackName,
        uri: asset.uri,
      },
    ]);
  };

  const handleRemovePhoto = (id: string) => {
    setAttachments((current) =>
      current.filter((attachment) => attachment.id !== id)
    );
    setPreviewAttachment((current) => (current?.id === id ? null : current));
  };

  return (
    <View>
      <View className="mb-4 mt-1 flex-row items-center justify-between">
        <Text className="text-[#4A4F57] text-base font-semibold">{title}</Text>
        <TouchableOpacity onPress={handleAddPhoto} activeOpacity={0.7}>
          <Text className="text-[#007AFF] text-xs font-medium">
            + Upload File
          </Text>
        </TouchableOpacity>
      </View>

      <View className="gap-3">
        {attachments.length === 0 ? (
          <View className="rounded-lg border border-dashed border-[#D5DAE1] bg-white px-3 py-5">
            <Text className="text-center text-[#7A8088] text-sm">
              No photos attached yet.
            </Text>
          </View>
        ) : null}
        {attachments.map((attachment) => (
          <AttachmentRow
            key={attachment.id}
            attachment={attachment}
            onRemove={() => handleRemovePhoto(attachment.id)}
            onPreview={() => setPreviewAttachment(attachment)}
          />
        ))}
      </View>

      <AttachmentPreviewModal
        attachment={previewAttachment}
        onClose={() => setPreviewAttachment(null)}
      />
    </View>
  );
}
