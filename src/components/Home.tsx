import { Contacts } from "./Contacts";
import { Layout } from "./Layout";
import { Leaderboard } from "./Leaderboard";
import { About } from "./About";
import { Slider } from "./Slider";

// add any missing aria-labels +
// footer problem
// overflow thingy 
// comet animation
// blue hue animation
// delete all comments
// deploy
// add documentation to README.MD



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