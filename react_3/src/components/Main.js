import classes from "./Main.module.css";
import { Footer } from "../components/Footer";
import { Links } from "../components/Links";
import { Headline } from "../components/HeadLine";

export function Main(props) {
  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <Headline page={props.page}>
          <code className={classes.code}>pages/{props.page}.js</code>
        </Headline>
        <Links />
      </main>
      <Footer />
    </div>
  );
}
