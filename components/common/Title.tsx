import { C, FS, FW } from "../../constants";
import { CommonParams } from "../../types";

const Title = (props: CommonParams): JSX.Element => {
  return (
    <h1 style={{ ...FS.TITLE, ...FW.BIG, ...C.BLACK }}>{props.children}</h1>
  );
};

export default Title;
