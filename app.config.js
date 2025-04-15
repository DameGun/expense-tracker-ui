export default ({ config }) => ({
  ...config,
  name: "expense-tracker-ui",
  slug: "expense-tracker-ui",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  plugins: ["expo-router"],
});
