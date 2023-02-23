import Head from 'next/head'
import styles from '../../../styles/Home.module.scss'
import GlobalHeader from "../../../components/GlobalHeader";
import BlogList from "./BlogList";
import classnames from "classnames";

export default function Home(props) {
    const {menus}=props;
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={"mt-6"}>
                    <GlobalHeader menus={menus}/>
                </div>
                <div className={"mt-16 flex flex-row"}>
                    <div className={"w-3/4 pr-4"}>
                        <BlogList/>
                    </div>
                    <div className={"w-1/4 pl-4"}>123123</div>
                </div>
            </main>

            <footer className={classnames(styles.footer,"mt-16")}>
                <div className={"text-14px"}>© 测试测试测试 页脚页脚</div>
            </footer>
        </div>
    )
}