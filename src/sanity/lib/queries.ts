import { groq } from 'next-sanity';

export const homeQuery = groq`*[_type == "homePage"][0]{
            ctaHeading,
            primaryButtonText,
            primaryButtonLink,
            secondaryButtonText,
            secondaryButtonLink,
            autoSlide,
            timer,
            sliderImages[]{
                "url": asset->url,
                alt,
                "height": asset->metadata.dimensions.height,
                "width": asset->metadata.dimensions.width,
                "size": asset->size
            }
        }`;

export const aboutQuery = groq`*[_type == "about"][0]{
            subheading,
            heading,
            content,
            image{
                "url": asset->url,
                alt,
                "height": asset->metadata.dimensions.height,
                "width": asset->metadata.dimensions.width,
                "size": asset->size
            }
        }`;

export const certificationQuery = groq`*[_type == "certification"]{
            title,
            logo{
                "url": asset->url,
                alt,
                "height": asset->metadata.dimensions.height,
                "width": asset->metadata.dimensions.width,
                "size": asset->size
            }
        }`;

export const settingsQuery = groq`*[_id == "settings"][0]{
            companyName,
            phone,
            email,
            address1,
            address2,
            city,
            county,
            postCode,
            location
        }`;
