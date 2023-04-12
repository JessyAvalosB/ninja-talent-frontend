import { LoaderBase, LoaderContainer } from "./Style";

const Loader = (props: any) => {
  return (
    <LoaderContainer {...props}>
      <LoaderBase></LoaderBase>
    </LoaderContainer>
  );
};

export default Loader;
