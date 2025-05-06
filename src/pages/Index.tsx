import VideoBlock from "./Index/VideoBlock.tsx";
import LessImportantBlock from "./Index/LessImportantBlock.tsx";
import AlsoImportantBlock from "./Index/AlsoImportantBlock.tsx";

const Index = () => {
  return (
    <>
      <VideoBlock />
      <AlsoImportantBlock />
      <LessImportantBlock />
    </>
  );
};

export default Index;
