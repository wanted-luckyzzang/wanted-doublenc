type StyleType = {
  sx?: { [key: string]: string };
};

interface RowPrams extends StyleType {
  children: React.ReactNode;
}

const Row = (props: RowPrams): JSX.Element => {
  return <div style={{ display: "flex", ...props?.sx }}>{props.children}</div>;
};

export default Row;
