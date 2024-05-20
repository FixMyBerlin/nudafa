import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { fields, singleton } from '@keystatic/core'
import { block, inline } from '@keystatic/core/content-components'
import { contentViewImageDefaultDouble } from 'keystatic/contentViewImageDefaultDouble'
import { contentViewImageHorizontal } from 'keystatic/contentViewImageHorizontal'
import { contentViewImageSquare } from 'keystatic/contentViewImageSquare'
import { contentViewImageVertical } from 'keystatic/contentViewImageVertical.tsx'

export const keystaticHomepageConfig = {
  homepageintro: singleton({
    entryLayout: 'content',
    label: 'Homepage Einführung (Über Teilprojekte-Teasern)',
    format: { contentField: 'content' },
    path: 'src/content/homepageintro/',
    schema: {
      title: fields.text({
        label: 'Überschrift',
        validation: { length: { min: 1, max: 80 } },
      }),
      subTitle: fields.text({
        label: 'Unterüberschrift',
        validation: { length: { max: 160 } },
      }),
      content: fields.mdx({
        label: 'Content',
        components: {
          TextLinkArrow: inline({
            label: 'Textlink mit Pfeil',
            schema: {
              href: fields.url({
                label: 'URL',
                validation: { isRequired: true },
              }),
              display: fields.text({
                label: 'Link-Label',
                validation: { isRequired: true },
              }),
              external: fields.checkbox({
                label: 'Externer Link',
                defaultValue: false,
              }),
            },
            NodeView: (props) => {
              if (props.value.external) {
                return (
                  <span
                    style={{
                      color: '#977214',
                    }}
                  >
                    <ArrowRightIcon
                      style={{
                        width: '0.74rem',
                      }}
                    />{' '}
                    {props.value.display}
                  </span>
                )
              } else {
                return (
                  <span
                    style={{
                      color: '#977214',
                    }}
                  >
                    <ArrowUpRightIcon
                      style={{
                        width: '0.74rem',
                      }}
                    />{' '}
                    {props.value.display}
                  </span>
                )
              }
            },
          }),
          ImageSingleVertical: block({
            label: 'Bild: einzeln, Hochformat',
            schema: {
              src: fields.image({
                label: 'Bild',
                directory: 'src/assets/homepage',
                publicPath: '/src/assets/homepage',
                validation: { isRequired: true },
              }),
              caption: fields.text({
                label: 'Bildunterschrift',
                validation: { length: { min: 1, max: 80 } },
              }),
              alt: fields.text({ label: 'Alt-Text' }),
              imageConfig: fields.conditional(
                fields.select({
                  label: 'Breite',
                  description:
                    'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                  options: [
                    { label: 'halbe Breite', value: 'half' },
                    { label: 'ganze Breite', value: 'full' },
                  ],
                  defaultValue: 'half',
                }),
                {
                  half: fields.select({
                    label: 'Position',
                    options: [
                      { label: 'links', value: 'left' },
                      { label: 'zentriert', value: 'center' },
                      { label: 'rechts', value: 'right' },
                    ],
                    defaultValue: 'left',
                  }),
                  full: fields.empty(),
                },
              ),
            },
            ContentView: contentViewImageVertical,
          }),
          ImageSingleHorizontal: block({
            label: 'Bild: einzeln, Querformat',
            schema: {
              src: fields.image({
                label: 'Bild',
                directory: 'src/assets/homepage',
                publicPath: '/src/assets/homepage',
                validation: { isRequired: true },
              }),
              caption: fields.text({
                label: 'Bildunterschrift',
                validation: { length: { min: 1, max: 80 } },
              }),
              alt: fields.text({ label: 'Alt-Text' }),
              imageConfig: fields.conditional(
                fields.select({
                  label: 'Seitenverhältnis',
                  description:
                    'Breite Formate (16:9 und 9:4) werden immer über die ganze Breite dargestellt.',
                  options: [
                    { label: '3:2', value: '3/2' },
                    { label: '4:3', value: '4/3' },
                    { label: '9:4', value: '9/4' },
                    { label: '16:9', value: 'pano' },
                  ],
                  defaultValue: '4/3',
                }),
                {
                  '3/2': fields.conditional(
                    fields.select({
                      label: 'Breite',
                      description:
                        'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                      options: [
                        { label: 'halbe Breite', value: 'half' },
                        { label: 'ganze Breite', value: 'full' },
                      ],
                      defaultValue: 'full',
                    }),
                    {
                      half: fields.select({
                        label: 'Position',
                        options: [
                          { label: 'links', value: 'left' },
                          { label: 'zentriert', value: 'center' },
                          { label: 'rechts', value: 'right' },
                        ],
                        defaultValue: 'left',
                      }),
                      full: fields.empty(),
                    },
                  ),
                  '4/3': fields.conditional(
                    fields.select({
                      label: 'Breite',
                      description:
                        'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                      options: [
                        { label: 'halbe Breite', value: 'half' },
                        { label: 'ganze Breite', value: 'full' },
                      ],
                      defaultValue: 'full',
                    }),
                    {
                      half: fields.select({
                        label: 'Position',
                        options: [
                          { label: 'links', value: 'left' },
                          { label: 'zentriert', value: 'center' },
                          { label: 'rechts', value: 'right' },
                        ],
                        defaultValue: 'left',
                      }),
                      full: fields.empty(),
                    },
                  ),
                  '9/4': fields.empty(),
                  pano: fields.empty(),
                },
              ),
            },
            ContentView: contentViewImageHorizontal,
          }),
          ImageSingleSquare: block({
            label: 'Bild: einzeln, quadratisch',
            schema: {
              src: fields.image({
                label: 'Bild',
                directory: 'src/assets/homepage',
                publicPath: '/src/assets/homepage',
                validation: { isRequired: true },
              }),
              caption: fields.text({
                label: 'Bildunterschrift',
                validation: { length: { min: 1, max: 80 } },
              }),
              alt: fields.text({ label: 'Alt-Text' }),
              imageConfig: fields.conditional(
                fields.select({
                  label: 'Breite',
                  description:
                    'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                  options: [
                    { label: 'halbe Breite', value: 'half' },
                    { label: 'ganze Breite', value: 'full' },
                  ],
                  defaultValue: 'full',
                }),
                {
                  half: fields.select({
                    label: 'Position',
                    options: [
                      { label: 'links', value: 'left' },
                      { label: 'zentriert', value: 'center' },
                      { label: 'rechts', value: 'right' },
                    ],
                    defaultValue: 'left',
                  }),
                  full: fields.empty(),
                },
              ),
            },
            ContentView: contentViewImageSquare,
          }),
          ImageDouble: block({
            label: 'Bild: doppelt',
            description: 'quer / hoch / quadratisch',
            schema: {
              src: fields.image({
                label: '1. Bild',
                directory: 'src/assets/homepage',
                publicPath: '/src/assets/homepage',
                validation: { isRequired: true },
              }),
              caption: fields.text({
                label: 'Bildunterschrift',
                validation: { length: { min: 1, max: 80 } },
              }),
              srcSecond: fields.image({
                label: '2. Bild',
                directory: 'src/assets/homepage',
                publicPath: '/src/assets/homepage',
                validation: { isRequired: true },
              }),
              captionSecond: fields.text({
                label: 'Bildunterschrift',
                validation: { length: { min: 1, max: 80 } },
              }),
              alt: fields.text({ label: 'Alt-Text' }),
              imageConfig: fields.conditional(
                fields.select({
                  label: 'Ausrichtung',
                  description: '',
                  options: [
                    { label: 'quer', value: 'horizontal' },
                    { label: 'hoch', value: 'vertical' },
                    { label: 'quadratisch', value: 'square' },
                  ],
                  defaultValue: 'vertical',
                }),
                {
                  vertical: fields.select({
                    label: 'Seitenverhältnis',
                    options: [
                      { label: '3:2', value: '3/2' },
                      { label: '4:3', value: '4/3' },
                    ],
                    defaultValue: '3/2',
                  }),
                  horizontal: fields.select({
                    label: 'Seitenverhältnis',
                    options: [
                      { label: '3:2', value: '3/2' },
                      { label: '4:3', value: '4/3' },
                    ],
                    defaultValue: '3/2',
                  }),
                  square: fields.empty(),
                },
              ),
            },
            ContentView: contentViewImageDefaultDouble,
          }),
        },
        options: {
          image: {
            directory: 'src/assets/homepage',
            publicPath: '/src/assets/homepage',
          },
        },
      }),
    },
  }),
  homepagemain: singleton({
    entryLayout: 'content',
    label: 'Homepage Hauptteil (Unter Teilprojekte-Teasern)',
    format: { contentField: 'content' },
    path: 'src/content/homepagemain/',
    schema: {
      content: fields.mdx({
        label: 'Content',
        components: {
          TextLinkArrow: inline({
            label: 'Textlink mit Pfeil',
            schema: {
              href: fields.url({
                label: 'Link-Label',
                validation: { isRequired: true },
              }),
              display: fields.text({
                label: 'URL',
                validation: { isRequired: true },
              }),
              external: fields.checkbox({
                label: 'Externer Link',
                defaultValue: false,
              }),
            },
            NodeView: (props) => {
              if (props.value.external) {
                return (
                  <span
                    style={{
                      color: '#977214',
                    }}
                  >
                    <ArrowRightIcon
                      style={{
                        width: '0.74rem',
                      }}
                    />{' '}
                    {props.value.display}
                  </span>
                )
              } else {
                return (
                  <span
                    style={{
                      color: '#977214',
                    }}
                  >
                    <ArrowUpRightIcon
                      style={{
                        width: '0.74rem',
                      }}
                    />{' '}
                    {props.value.display}
                  </span>
                )
              }
            },
          }),
          ImageSingleVertical: block({
            label: 'Bild: einzeln, Hochformat',
            schema: {
              src: fields.image({
                label: 'Bild',
                directory: 'src/assets/homepage',
                publicPath: '/src/assets/homepage',
                validation: { isRequired: true },
              }),
              caption: fields.text({
                label: 'Bildunterschrift',
                validation: { length: { min: 1, max: 80 } },
              }),
              alt: fields.text({ label: 'Alt-Text' }),
              imageConfig: fields.conditional(
                fields.select({
                  label: 'Breite',
                  description:
                    'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                  options: [
                    { label: 'halbe Breite', value: 'half' },
                    { label: 'ganze Breite', value: 'full' },
                  ],
                  defaultValue: 'half',
                }),
                {
                  half: fields.select({
                    label: 'Position',
                    options: [
                      { label: 'links', value: 'left' },
                      { label: 'zentriert', value: 'center' },
                      { label: 'rechts', value: 'right' },
                    ],
                    defaultValue: 'left',
                  }),
                  full: fields.empty(),
                },
              ),
            },
            ContentView: contentViewImageVertical,
          }),
          ImageSingleHorizontal: block({
            label: 'Bild: einzeln, Querformat',
            schema: {
              src: fields.image({
                label: 'Bild',
                directory: 'src/assets/homepage',
                publicPath: '/src/assets/homepage',
                validation: { isRequired: true },
              }),
              caption: fields.text({
                label: 'Bildunterschrift',
                validation: { length: { min: 1, max: 80 } },
              }),
              alt: fields.text({ label: 'Alt-Text' }),
              imageConfig: fields.conditional(
                fields.select({
                  label: 'Seitenverhältnis',
                  description:
                    'Breite Formate (16:9 und 9:4) werden immer über die ganze Breite dargestellt.',
                  options: [
                    { label: '3:2', value: '3/2' },
                    { label: '4:3', value: '4/3' },
                    { label: '9:4', value: '9/4' },
                    { label: '16:9', value: 'pano' },
                  ],
                  defaultValue: '4/3',
                }),
                {
                  '3/2': fields.conditional(
                    fields.select({
                      label: 'Breite',
                      description:
                        'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                      options: [
                        { label: 'halbe Breite', value: 'half' },
                        { label: 'ganze Breite', value: 'full' },
                      ],
                      defaultValue: 'full',
                    }),
                    {
                      half: fields.select({
                        label: 'Position',
                        options: [
                          { label: 'links', value: 'left' },
                          { label: 'zentriert', value: 'center' },
                          { label: 'rechts', value: 'right' },
                        ],
                        defaultValue: 'left',
                      }),
                      full: fields.empty(),
                    },
                  ),
                  '4/3': fields.conditional(
                    fields.select({
                      label: 'Breite',
                      description:
                        'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                      options: [
                        { label: 'halbe Breite', value: 'half' },
                        { label: 'ganze Breite', value: 'full' },
                      ],
                      defaultValue: 'full',
                    }),
                    {
                      half: fields.select({
                        label: 'Position',
                        options: [
                          { label: 'links', value: 'left' },
                          { label: 'zentriert', value: 'center' },
                          { label: 'rechts', value: 'right' },
                        ],
                        defaultValue: 'left',
                      }),
                      full: fields.empty(),
                    },
                  ),
                  '9/4': fields.empty(),
                  pano: fields.empty(),
                },
              ),
            },
            ContentView: contentViewImageHorizontal,
          }),
          ImageSingleSquare: block({
            label: 'Bild: einzeln, quadratisch',
            schema: {
              src: fields.image({
                label: 'Bild',
                directory: 'src/assets/homepage',
                publicPath: '/src/assets/homepage',
                validation: { isRequired: true },
              }),
              caption: fields.text({
                label: 'Bildunterschrift',
                validation: { length: { min: 1, max: 80 } },
              }),
              alt: fields.text({ label: 'Alt-Text' }),
              imageConfig: fields.conditional(
                fields.select({
                  label: 'Breite',
                  description:
                    'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                  options: [
                    { label: 'halbe Breite', value: 'half' },
                    { label: 'ganze Breite', value: 'full' },
                  ],
                  defaultValue: 'full',
                }),
                {
                  half: fields.select({
                    label: 'Position',
                    options: [
                      { label: 'links', value: 'left' },
                      { label: 'zentriert', value: 'center' },
                      { label: 'rechts', value: 'right' },
                    ],
                    defaultValue: 'left',
                  }),
                  full: fields.empty(),
                },
              ),
            },
            ContentView: contentViewImageSquare,
          }),
          ImageDouble: block({
            label: 'Bild: doppelt',
            description: 'quer / hoch / quadratisch',
            schema: {
              src: fields.image({
                label: '1. Bild',
                directory: 'src/assets/homepage',
                publicPath: '/src/assets/homepage',
                validation: { isRequired: true },
              }),
              caption: fields.text({
                label: 'Bildunterschrift',
                validation: { length: { min: 1, max: 80 } },
              }),
              srcSecond: fields.image({
                label: '2. Bild',
                directory: 'src/assets/homepage',
                publicPath: '/src/assets/homepage',
                validation: { isRequired: true },
              }),
              captionSecond: fields.text({
                label: 'Bildunterschrift',
                validation: { length: { min: 1, max: 80 } },
              }),
              alt: fields.text({ label: 'Alt-Text' }),
              imageConfig: fields.conditional(
                fields.select({
                  label: 'Ausrichtung',
                  description: '',
                  options: [
                    { label: 'quer', value: 'horizontal' },
                    { label: 'hoch', value: 'vertical' },
                    { label: 'quadratisch', value: 'square' },
                  ],
                  defaultValue: 'vertical',
                }),
                {
                  vertical: fields.select({
                    label: 'Seitenverhältnis',
                    options: [
                      { label: '3:2', value: '3/2' },
                      { label: '4:3', value: '4/3' },
                    ],
                    defaultValue: '3/2',
                  }),
                  horizontal: fields.select({
                    label: 'Seitenverhältnis',
                    options: [
                      { label: '3:2', value: '3/2' },
                      { label: '4:3', value: '4/3' },
                    ],
                    defaultValue: '3/2',
                  }),
                  square: fields.empty(),
                },
              ),
            },
            ContentView: contentViewImageDefaultDouble,
          }),
        },
        options: {
          image: {
            directory: 'src/assets/homepage',
            publicPath: '/src/assets/homepage',
          },
        },
      }),
    },
  }),
}
