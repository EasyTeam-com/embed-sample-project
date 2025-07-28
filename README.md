# Easyteam Demo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Add your easyteam npm token to a `.npmrc` file in the root folder

2. Install dependencies

   ```bash
   npm install
   ```

3. Configure environment variables (optional)

   Create a `.env` file in the root directory with the following content:

   ```bash
   API_BASE_PATH=http://192.168.1.1:9999/DEMO_API_URL
   ACCESS_TOKEN=example.token
   ```

   If no `.env` file is provided, the app will use the default value, which will be the sandbox api.

4. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Environment Variables

The app uses the following environment variables:

- `API_BASE_PATH`: The base URL for the EasyTeam API (default: `https://www.easyteam.io/sandbox/embed`)
- `ACCESS_TOKEN`: The signed token for the user that will be using the demo app.

## Integration

Please use our integration guide available in our [mobile SDK integration](https://docs.easyteam.com/mobile-sdk-integration).

If there are any questions or thoughts, please contact us!
