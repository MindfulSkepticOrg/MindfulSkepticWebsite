// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [ 
    [require.resolve('docusaurus-lunr-search'), {indexBaseUrl: true}],
    ['@docusaurus/plugin-pwa',
    {
      offlineModeActivationStrategies: [
        'queryString',
      ],
      pwaHead: [
        {
          tagName: 'link',
          rel: 'icon',
          href: '/img/logo.png',
        },
        {
          tagName: 'link',
          rel: 'manifest',
          href: '/manifest.json',
          crossorigin: 'use-credentials',
        },
        {
          tagName: 'meta',
          name: 'theme-color',
          content: 'rgb(37, 194, 160)',
        },
        {
          tagName: 'meta',
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        {
          tagName: 'meta',
          name: 'apple-mobile-web-app-status-bar-style',
          content: '#000',
        },
        {
          tagName: 'link',
          rel: 'apple-touch-icon',
          href: '/img/logo.png',
        },
        {
          tagName: 'link',
          rel: 'mask-icon',
          href: '/img/docusaurus.svg',
          color: 'rgb(37, 194, 160)',
        },
        {
          tagName: 'meta',
          name: 'msapplication-TileImage',
          content: '/img/logo.png',
        },
        {
          tagName: 'meta',
          name: 'msapplication-TileColor',
          content: '#000',
        },
      ],
    }],
  ],
  title: 'Mindful Skeptic',
  tagline: 'Open healing',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.mindfulskeptic.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://www.mindfulskeptic.org',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://www.mindfulskeptic.org',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'Mindful Skeptic',
        hideOnScroll: true,
        logo: {
          alt: 'Mindful Skeptic Logo',
          src: 'img/logoLight.png',
          srcDark: 'img/logoDark.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'sidebarMain',
          //   position: 'left',
          //   label: 'Docs',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/MindfulSkepticInc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Links',
          //   items: [
          //     {
          //       label: 'Frequently Asked Questions',
          //       to: '/',
          //     },
          //   ],
          // },
          {
            title: 'Follow',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/MindfulSkepticInc',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@MindfulSkepticInc',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/MindfulSkepticInc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mindful Skeptic, Inc. (a 501(c)(3) nonprofit organization, EIN: 99-3433788)`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
