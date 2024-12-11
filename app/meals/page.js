import Link from 'next/link';
import classes from './page.module.scss';

export default function MealsPage(props) {
    return <>
        <header className={classes.header}>
            <main>  
                <h1>
                    Delicious meals, created <span className = {classes.highglight}> By you</span>
                </h1>
                <p> 
                    Eat from malangjan drink from chayai khana. It is easy and fun.
                </p>
                <p className ={classes.cta}>
                    <Link href="/meals/share">
                        Share your favorite recipie
                    </Link>
                </p>
            </main>

        </header>
    </>
}