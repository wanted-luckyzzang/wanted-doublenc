type StyleType = {
  sx?: { [key: string]: string };
};

interface ColParams extends StyleType {
  children: React.ReactNode;
}

const Col = (props: ColParams): JSX.Element => {
  return (
    <div style={{ display: "flex", flexDirection: "column", ...props?.sx }}>
      {props.children}
    </div>
  );
};

export default Col;
