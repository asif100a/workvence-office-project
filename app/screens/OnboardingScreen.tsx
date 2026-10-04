import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import One from "@/assets/images/onboarding/one.png";
import Two from "@/assets/images/onboarding/two.png";
import Three from "@/assets/images/onboarding/three.png";
import ScreenWrapper from "@/components/layout/ScreenWrapper";

export default function OnboardingScreen() {
  const { width } = useWindowDimensions();
  const [page, setPage] = useState(0);
  const slides = [
    {
      image: One,
      title: "Find Work That Fits You",
      body: "Discover quality projects matched to your\nskills, experience, and goals.",
    },
    {
      image: Two,
      title: "Work With Confidence",
      body: "Connect with trusted clients, manage your\nprojects, and keep every conversation organized.",
    },
    {
      image: Three,
      title: "Work With Confidence",
      body: "Connect with trusted clients, manage your\nprojects, and keep every conversation organized.",
    },
  ];
  const slide = slides[page];
  const next = () =>
    page === slides.length - 1
      ? router.push("/screens/ChooseRole")
      : setPage(page + 1);

  return (
    <ScreenWrapper edges={['bottom']}>
      <Image
        source={slide.image}
        style={[styles.photo, { width }]}
        resizeMode="cover"
      />
      <View style={styles.copy}>
        <Text style={styles.title}>{slide.title}</Text>
        <Text style={styles.subtitle}>{slide.body}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.dots}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === page && styles.activeDot]}
            />
          ))}
        </View>
        <Pressable style={styles.button} onPress={next}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  copy: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 18,
  },
  title: {
    color: "#080808",
    fontSize: 23,
    fontWeight: "800",
    lineHeight: 28,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: "#777777",
    fontSize: 12,
    lineHeight: 17,
    textAlign: "center",
  },
  photo: { height: 500 },
  footer: { marginTop: "auto", paddingHorizontal: 16, paddingBottom: 16 },
  dots: {
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#B4B4B4" },
  activeDot: { height: 22, borderRadius: 3, backgroundColor: "#6A6A6A" },
  button: {
    height: 48,
    borderRadius: 3,
    backgroundColor: "#050505",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { color: "#FFFFFF", fontSize: 14, fontWeight: "500" },
});
