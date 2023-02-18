import classes from "./Links.module.css";

export const Links = (props) => {
  return (
    <div className={classes.grid}>
      <button onClick={props.handlReduce}>減らす</button>
      {props.items.map((item) => {
        return (
          <a key={item.href} href={item.href} className={classes.card}>
            <h2>{item.title} &rarr;</h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
};
