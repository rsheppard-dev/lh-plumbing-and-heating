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
            },
            metaTitle,
            metaDescription,
            ogImage{
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
            },
            metaTitle,
            metaDescription,
            ogImage{
                "url": asset->url,
                alt,
                "height": asset->metadata.dimensions.height,
                "width": asset->metadata.dimensions.width,
                "size": asset->size
            }
        }`;

export const serviceQuery = groq`*[_type == "service"][0]{
            subheading,
            heading,
            services[]{
              name,
                "icon": icon.asset->url,
                body
            },
            metaTitle,
            metaDescription,
            ogImage{
                "url": asset->url,
                alt,
                "height": asset->metadata.dimensions.height,
                "width": asset->metadata.dimensions.width,
                "size": asset->size
            }
        }`;

export const contactQuery = groq`*[_type == "contact"][0]{
            subheading,
            heading,
            content,
            "phoneIcon": phoneIcon.asset->url,
            "emailIcon": emailIcon.asset->url,
            "locationIcon": locationIcon.asset->url,
            successMessage,
            metaTitle,
            metaDescription,
            ogImage{
                "url": asset->url,
                alt,
                "height": asset->metadata.dimensions.height,
                "width": asset->metadata.dimensions.width,
                "size": asset->size
            }
        }`;

export const certificationQuery = groq`*[_type == "certification"]{
            _id,
            title,
            logo{
                "url": asset->url,
                alt,
                "height": asset->metadata.dimensions.height,
                "width": asset->metadata.dimensions.width,
                "size": asset->size
            }
        }`;

export const testimonialQuery = groq`*[_type == "testimonial"]{
            _id,
            name,
            reviewDate,
            rating,
            content
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
            location,
            times,
            "favicon": favicon.asset->url,
            "favicon16": favicon16.asset->url,
            "favicon32": favicon32.asset->url,
            "favicon192": favicon192.asset->url,
            "favicon512": favicon512.asset->url,
            "appleTouchIcon": appleTouchIcon.asset->url,
            metaTitle,
            metaDescription,
            ogImage{
                "url": asset->url,
                alt,
                "height": asset->metadata.dimensions.height,
                "width": asset->metadata.dimensions.width,
                "size": asset->size
            }
        }`;
