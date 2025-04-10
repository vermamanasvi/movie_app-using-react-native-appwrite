# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.





Steps:
npx expo start for setting app on phone
npm install nativewind tailwind react-native-reanimated react-native-safe-area context
npx tailwind init
update tailwind.config.js from nativewind/expo website, add babel.config.js, add global.css, add metro.config.js by "npx expo customize metro.config.js" -> copy paste
add import './globals.css'; on layout.tsx
make nativewind-env.d.ts on root dir -> /// <refernces types="nativewind/types" />

npx expo start --clear           for reloading the app with staged changes




Routing: 
Create new tsx files for diff pages in app dir and type rnfes  
Dynamic Routing: Create a seprate dir in apps dir and under that dir make files of diff ids like [id].tsx for each movies
on [id].tsx import { useLocalSearchParams } from 'expo-router', const { id } = useLocalSearchParams();, export default Details; 

when you declare a reusable component like TabIcon you must start its name with a capital letter, it must be :
const TabIcon 
and not:
const tabIcon 
or it won't work



