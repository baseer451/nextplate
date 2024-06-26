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
        
        <main className="bg-gradient-to-r 
               from-[#f6f6f6] 
               to-[#f6f6f6] 
               dark:from-[#1c1c1c] 
               dark:to-[#1a1a1a] 
               w-full min-h-screen 
               mx-auto grid place-items-center">
        <Carousel/>
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
