import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}