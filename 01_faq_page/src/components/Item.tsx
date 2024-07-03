interface Props {
  title: string;
  body: string;
  classes?: string;
}

const Item = ({ title, body, classes }: Props) => {
  return (
    <div className={classes && classes}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Item;
