import Contact from '@/components/contact';
import Breadcrumbs from "@/components/Breadcrumbs";
import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import {
  getActiveLanguages,
  getLanguageObj,
  getTranslations,
} from "@/lib/languageParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import path from "path";

const Contacts = async ({ params }: { params: { lang: string } }) => {
  const language = getLanguageObj(params.lang);
  const data: RegularPage = getListPage(
    path.join(language.contentDir, "contact/_index.md"),
  );
  const content = await getTranslations(params.lang);
  const { frontmatter } = data;
  const { title, description, meta_title, image } = frontmatter;
  
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title}>
        <Breadcrumbs lang={params.lang} />
      </PageHeader>
      <main className='flex min-h-screen flex-col items-center justify-center p-24 bg-theme-light  text-xl text-dark dark:bg-darkmode-theme-light dark:text-darkmode-dark'>
      <Contact />
      </main>
      
    </>
    
  );
}

export default Contacts;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export async function generateStaticParams() {
  return getActiveLanguages().map((language) => ({
    lang: language.languageCode,
  }));
}