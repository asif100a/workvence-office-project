import { router } from "expo-router";
import SplashScreen from "./screens/SplashScreen";

export default function Home() {
  const handleSplashScreen = () => {
    router.replace("/screens/OnboardingScreen");
  };

  return <SplashScreen onFinish={handleSplashScreen} />;
}
