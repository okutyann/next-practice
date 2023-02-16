import classes from "./Links.module.css";

export const Links = ({ items, handlReduce }) => {
  return (
    <div className={classes.grid}>
      <button onClick={handlReduce}>減らす</button>
      {items.map((item) => {
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
