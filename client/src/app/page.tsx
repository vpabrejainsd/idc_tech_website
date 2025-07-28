import { HeroSection } from "@/components/blocks/HeroSection";
import { getHomePage } from "@/data/loaders"
import { notFound } from "next/navigation";

async function loader() {
  const data = await getHomePage();
  if(!data) notFound();
  return { ...data.data }
}

export default async function HomeRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];
  console.log(data)

  const hero = blocks[0];
  const primaryCta = hero.cta?.find((c: { href: any; }) => !!c.href);
  return(
    <div>
    <HeroSection {...hero} cta={primaryCta}/>
    </div>
  )
}