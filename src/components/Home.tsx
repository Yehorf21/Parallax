import { Contacts } from "./Contacts";
import { Layout } from "./Layout";
import { Leaderboard } from "./Leaderboard";
import { About } from "./About";
import { Slider } from "./Slider";

export const Home = () => {
  return (
    <Layout>
      <Slider />

      <About />

      <Leaderboard />

      <Contacts />
    </Layout>
  );
};