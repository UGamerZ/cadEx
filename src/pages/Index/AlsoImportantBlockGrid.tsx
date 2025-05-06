import { FlexContainer } from "../../styles/style.ts";
import ExampleCard from "../../components/ExampleCard.tsx";

const AlsoImportantBlockGrid = ({ rows }: { rows: number }) => {
  return (
    <>
      {[...Array(rows)].map((_, key) => (
        <FlexContainer key={key}>
          <ExampleCard
            title="Title"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
          />
          <ExampleCard
            title="Title"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
          />
          <ExampleCard
            title="Title"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
          />
        </FlexContainer>
      ))}
    </>
  );
};

export default AlsoImportantBlockGrid;
