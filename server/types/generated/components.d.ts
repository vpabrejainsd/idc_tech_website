import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAchievementSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_achievement_sections';
  info: {
    displayName: 'achievement section';
  };
  attributes: {
    achievement: Schema.Attribute.Component<'elements.stat-item', true>;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'hero section';
  };
  attributes: {
    carousel: Schema.Attribute.Component<'elements.carousel', false>;
    cta: Schema.Attribute.Component<'elements.link', true>;
    heading: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'elements.logo', false>;
  };
}

export interface BlocksInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_sections';
  info: {
    displayName: 'info section';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.card', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    our_story: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    cardDescription: Schema.Attribute.Text;
    cardtitle: Schema.Attribute.String;
  };
}

export interface ElementsCarousel extends Struct.ComponentSchema {
  collectionName: 'components_elements_carousels';
  info: {
    displayName: 'carousel';
  };
  attributes: {
    carousel_image: Schema.Attribute.Component<'elements.image', true>;
  };
}

export interface ElementsDropdown extends Struct.ComponentSchema {
  collectionName: 'components_elements_dropdowns';
  info: {
    displayName: 'dropdown';
  };
  attributes: {
    navItem: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'carousel_image';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    logo: Schema.Attribute.Media<'images', true>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface ElementsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_stat_items';
  info: {
    displayName: 'stat_item';
  };
  attributes: {
    statDescription: Schema.Attribute.String;
    statTitle: Schema.Attribute.String;
    svg: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    dropdown: Schema.Attribute.Component<'elements.dropdown', true>;
    link: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images', true>;
    logo: Schema.Attribute.Component<'elements.logo', true>;
    navItem: Schema.Attribute.Component<'elements.link', true>;
    navSocial: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    logo: Schema.Attribute.Component<'elements.logo', true>;
    navDropDown: Schema.Attribute.Component<'elements.dropdown', true>;
    navLink: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.achievement-section': BlocksAchievementSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.info-section': BlocksInfoSection;
      'elements.card': ElementsCard;
      'elements.carousel': ElementsCarousel;
      'elements.dropdown': ElementsDropdown;
      'elements.image': ElementsImage;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.stat-item': ElementsStatItem;
      'layout.banner': LayoutBanner;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
