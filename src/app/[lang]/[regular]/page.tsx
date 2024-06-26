import Breadcrumbs from "@/components/Breadcrumbs";
import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import { getActiveLanguages, getLanguageObj } from "@/lib/languageParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import path from "path";
import Carousel from '@/components/carousel';

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams = () => {
  const slugs = getActiveLanguages().map((language) => {
    const regularPages = getSinglePage(path.join(language.contentDir, "pages"));
    return regularPages.map((page: RegularPage) => ({
      lang: language.languageCode,
      regular: page.slug,
    }));
  });
  return slugs.flat();
};

// for all regular pages
const RegularPages = ({
  params,
}: {
  params: { regular: string; lang: string };
}) => {
  const language = getLanguageObj(params.lang);
  const regularData = getSinglePage(path.join(language.contentDir, "pages"));
  const data = regularData.filter(
    (page: RegularPage) => page.slug === params.regular,
  )[0];
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;
  const DATA = [
    { image: '/images/image1.png' },
    { image: '/images/image2.png' },
    { image: '/images/image3.png' },
    { image: '/images/image4.png' },
    { image: '/images/image5.png' },
    { image: '/images/image6.png' },
    { image: '/images/image7.png' },
    { image: '/images/image8.png' },
    { image: '/images/image9.png' },
    { image: '/images/image10.png' },
    { image: '/images/image11.png' },
    { image: '/images/image12.png' },
  ]

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title}>
      </PageHeader>
      
      
      <section className="section">
        
        <main className="col12 flex max-h-screen flex-col items-center justify-center text-center">
        <Carousel data= {DATA}   />
        </main>
        <div className="container">
          <div className="content">
            <MDXContent content={content} />
          </div>
        </div>
      </section>
    </>
  );
};

export default RegularPages;
