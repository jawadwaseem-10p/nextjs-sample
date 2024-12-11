import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";
import ImageSlideshow from "./components/images/image-slideshow";


export default function Home() {
  // this is server rendered component this gets executed on server and jsx is returned to client
  // regular anchor tag downloads the whole new page, which we don't want to preserver spa for that we use link
  return (
    <>
    <header className={classes.header}>
      <div className={classes.slideshow}>
        <ImageSlideshow/>
      </div>
      <div>
        <div className={classes.hero}>
          <h1> Next level food for Next level Foodies</h1>
          <p>taste & share the food from all over the world</p>
        </div>
        <div className={classes.cta}>
          <Link href="/community"> Join the community</Link>
          <Link href="/meals">Explore the meal</Link>
        </div>
      </div>
    </header>
    <main>
      <section className={classes.section}>
        <h2> how it works</h2>
        <p>This is a food platfor dedicated for meat lovers. You're going to find crazy grilled steaks, smoked BBQ, Afghani Tikka, Baloch Saji and lots more</p>
        <p>The meals are cooked with great dedication and love to push the known boundaries of the taste</p>
      </section>

    </main>
    </>
  );
}
