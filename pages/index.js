import Layout from "../components/layout";
import Link from "next/link";
import ListLink from "../components/list-link";
import Logo from "../components/logo";
import useI18n from "../hooks/use-i18n";
import { useRouter } from "next/router";

const colors = {
  gween: "#65A300",
  mel: "#0096DB",
  pweach: "#FF5757",
  pwink: "#FF52A3",
};

const cx = {
  main: "vh-100 dt w-100",
  container: "dtc v-mid tc",
  article: "measure-narrow center sans-serif f3 fw2 ph2",
  h1: "lh-title fw2 f2",
  h1a: "no-underline",
  ul: "list pl0 tl",
  liTop: "lh-title mb2 mt4",
  img: "center dib ma3",
};

const Index = () => {
  const t = useI18n(useRouter());
  return (
    <Layout className={cx.main}>
      <div className={cx.container}>
        <article className={cx.article}>
          <Logo alt={t("image-description")} className={cx.img} width={256} />
          <h1 className={cx.h1}>
            <Link href="/">
              <a className={cx.h1a}>{t("introduction")}</a>
            </Link>
          </h1>

          <ul className={cx.ul}>
            <ListLink
              className={cx.liTop}
              color={colors.pwink}
              prefix={t("gf-prefix")}
              text={t("gf-link-label")}
              postfix={t("gf-postfix")}
              rel="me"
              url="https://girlfriend.technology"
            />
            <ListLink
              className={cx.liTop}
              prefix={t("blog-prefix")}
              text={t("blog-link-label")}
              postfix={t("blog-postfix")}
              rel="me"
              url="https://melkat.link"
            />
            <ListLink
              prefix={t("gifs-prefix")}
              text={t("gifs-link-label")}
              postfix={t("gifs-postfix")}
              rel="me"
              url="https://myhot.pics"
            />
            <ListLink
              prefix={t("deals-prefix")}
              text={t("deals-link-label")}
              postfix={t("deals-postfix")}
              rel="me"
              url="https://melkat.deals"
            />

            <ListLink
              className={cx.liTop}
              prefix={t("github-prefix")}
              text={t("github-link-label")}
              postfix={t("github-postfix")}
              rel="me"
              url="https://github.com/zicklepop"
            />

            <ListLink
              prefix={t("art-by-prefix")}
              text={t("art-by-link-label")}
              postfix={t("art-by-postfix")}
              className={cx.liTop}
              color={colors.pweach}
              url="https://dzuk.zone"
            />
          </ul>
        </article>
      </div>
      <style global jsx>
        {`
          ul > li::before {
            content: "*";
            color: #8f8f8f;
            width: 1rem;
            display: inline-block;
          }
        `}
      </style>
    </Layout>
  );
};

export default Index;
