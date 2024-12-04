declare module 'react-native-config' {
  interface NativeConfig {
    NODE_SERVICE_URL: string;
  }

  const env: NativeConfig;
  export default env;
}
