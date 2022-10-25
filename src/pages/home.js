import JoinGang from "../comp/joinGang/joinGang";
import HeroSection from "../comp/HeroSection/HeroSection";
import NftShowcase from "../comp/NftShowcase/NftShowcase";
import NftCase from "../comp/NftCase/NftCase";
import BlockChainCase from "../comp/BlockchainCase/BlockchainCase";
import TeamMembers from "../comp/TeamMembers/TeamMembers";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div
        className={"Container"}
        style={{ paddingTop: "50px", paddingBottom: "160px" }}
      >
        <JoinGang></JoinGang>
      </div>
      <NftShowcase></NftShowcase>
      <NftCase></NftCase>
      <BlockChainCase></BlockChainCase>
      <TeamMembers></TeamMembers>
    </div>
  );
};

export default Home;
