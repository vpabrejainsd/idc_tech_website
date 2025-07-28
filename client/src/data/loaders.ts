import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const homePageQuery = qs.stringify(
  {
    populate:{
      blocks:{
        on:{
          "blocks.hero-section":{
            populate:{
              logo:{
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
              image:true,
              cta:true
            }
          }
        }
      }
    }
  }
);

export async function getHomePage() {
  const path = "/api/home-page";
  const BASE_URL = getStrapiURL()

  const url = new URL(path, BASE_URL);
  url.search = homePageQuery;

  return await fetchAPI(url.href, { method: "GET" });
}