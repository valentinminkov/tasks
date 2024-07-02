interface Props {
  title: string;
  body: string;
  classes: string;
}

const FAQItem = ({ title, body, classes }: Props) => {
  return (
    <div className={classes}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default FAQItem;
