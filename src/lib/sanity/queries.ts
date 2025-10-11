import { groq } from "next-sanity";

export const menuItemsQuery = groq`
  *[_type == "menuItem"] | order(category asc, name asc) {
    _id,
    name,
    description,
    price,
    category,
    spicy,
    vegetarian,
    popular,
    image {
      asset->{
        _id,
        url
      }
    },
    imageAlt,
    slug
  }
`;

export const menuItemsByCategoryQuery = groq`
  *[_type == "menuItem" && category == $category] | order(name asc) {
    _id,
    name,
    description,
    price,
    category,
    spicy,
    vegetarian,
    popular,
    image {
      asset->{
        _id,
        url
      }
    },
    imageAlt,
    slug
  }
`;

export const menuItemByIdQuery = groq`
  *[_type == "menuItem" && _id == $id][0] {
    _id,
    name,
    description,
    price,
    category,
    spicy,
    vegetarian,
    popular,
    image {
      asset->{
        _id,
        url
      }
    },
    imageAlt,
    slug
  }
`;
