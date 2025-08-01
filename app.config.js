import 'dotenv/config';

export default {
  expo: {
    name: "ezteam-demo",
    slug: "ezteam-demo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "ezteamdemo",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      package: "com.ezteam.demo",
      versionCode: 1,
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      "expo-font",
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      apiBasePath:
        process.env.API_BASE_PATH || "https://www.easyteam.io/sandbox/embed",
      jwtPrivateKey: process.env.JWT_PRIVATE_KEY,
      partnerId: process.env.PARTNER_ID,
      eas: {
        projectId: "f9fe7433-78b6-4928-a255-72e5d0f57b2a",
      },
    },
  },
};
