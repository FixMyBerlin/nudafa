import { config, fields, collection, singleton } from "@keystatic/core";
import { block, inline, wrapper } from "@keystatic/core/content-components";

const contentViewImageDefault = (props: any) => (
  <figure>
    <div>
      <img src="/placeholder_image.jpg" alt="" />
    </div>
    {/* <img
     src={`/src/assets/news/${}/${props.value.src?.filename}`}
     alt=""
     width={200}
     height={200}
   /> */}
    <figcaption>{props.value.caption}</figcaption>
  </figure>
);

const contentViewImageDefaultDouble = (props: any) => (
  <figure>
    <div>
      <img
        style={{ position: "relative" }}
        src="/placeholder_image.jpg"
        alt=""
      />

      <img
        style={{ position: "relative" }}
        src="/placeholder_image.jpg"
        alt=""
      />
    </div>
    <figcaption>{props.value.caption}</figcaption>
  </figure>
);

export default config({
  storage: {
    // kind: "local",
    kind: "github",
    repo: {
      owner: "FixMyBerlin",
      name: "nudafa",
    },
    // https://keystatic.com/docs/github-mode
  },
  ui: {
    brand: {
      name: "Nudafa",
      mark: () => <img src="/favicon-32x32.png" height={27} />,
    },
    navigation: {
      Home: ["homepage"],
      Projektpartner: ["projectpartnerpage", "persons"],
      Teilprojekte: ["subProjects", "subprojectstopics"],
      Maßnahmen: ["measures", "measureoperators", "subprojectstopics"],
      "Weitere Seiten": ["presspage", "imprintpage", "privacypage"],
    },
  },
  singletons: {
    homepage: singleton({
      label: "Homepage",
      format: { contentField: "content" },
      path: "src/content/homepage/",
      schema: {
        title: fields.text({
          label: "Überschrift",
          validation: { length: { min: 1, max: 80 } },
        }),
        subTitle: fields.text({
          label: "Unterüberschrift",
          validation: { length: { max: 160 } },
        }),
        content: fields.mdx({
          label: "Content",
          components: {
            StatusBadge: inline({
              label: "StatusBadge",
              schema: {
                status: fields.select({
                  label: "Status",
                  options: [
                    { label: "To do", value: "todo" },
                    { label: "In Progress", value: "in-progress" },
                    { label: "Ready for review", value: "ready-for-review" },
                    { label: "Done", value: "done" },
                  ],
                  defaultValue: "todo",
                }),
              },
            }),
            TextLinkArrow: inline({
              label: "Textlink mit Pfeil",
              schema: {
                href: fields.text({
                  label: "Link",
                  validation: { isRequired: true },
                }),
              },
            }),
            ImageSingleVertical: block({
              label: "Bild: einzeln, Hochformat",
              schema: {
                src: fields.image({
                  label: "Bild",
                  directory: "src/assets/homepage",
                  publicPath: "/src/assets/homepage",
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: "Bildunterschrift",
                  validation: { length: { min: 1, max: 80 } },
                }),
                alt: fields.text({ label: "Alt-Text" }),
                imageConfig: fields.conditional(
                  fields.select({
                    label: "Breite",
                    description:
                      "Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.",
                    options: [
                      { label: "halbe Breite", value: "half" },
                      { label: "ganze Breite", value: "full" },
                    ],
                    defaultValue: "half",
                  }),
                  {
                    half: fields.select({
                      label: "Position",
                      options: [
                        { label: "links", value: "left" },
                        { label: "zentriert", value: "center" },
                        { label: "rechts", value: "right" },
                      ],
                      defaultValue: "left",
                    }),
                    full: fields.empty(),
                  }
                ),
              },
              ContentView: contentViewImageDefault,
            }),
            ImageSingleHorizontal: block({
              label: "Bild: einzeln, Querformat",
              schema: {
                src: fields.image({
                  label: "Bild",
                  directory: "src/assets/homepage",
                  publicPath: "/src/assets/homepage",
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: "Bildunterschrift",
                  validation: { length: { min: 1, max: 80 } },
                }),
                alt: fields.text({ label: "Alt-Text" }),
                imageConfig: fields.conditional(
                  fields.select({
                    label: "Seitenverhältnis",
                    description:
                      "Breite Formate (16:9 und 9:4) werden immer über die ganze Breite dargestellt.",
                    options: [
                      { label: "3:2", value: "3/2" },
                      { label: "4:3", value: "4/3" },
                      { label: "9:4", value: "9/4" },
                      { label: "16:9", value: "pano" },
                    ],
                    defaultValue: "4/3",
                  }),
                  {
                    "3/2": fields.conditional(
                      fields.select({
                        label: "Breite",
                        description:
                          "Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.",
                        options: [
                          { label: "halbe Breite", value: "half" },
                          { label: "ganze Breite", value: "full" },
                        ],
                        defaultValue: "full",
                      }),
                      {
                        half: fields.select({
                          label: "Position",
                          options: [
                            { label: "links", value: "left" },
                            { label: "zentriert", value: "center" },
                            { label: "rechts", value: "right" },
                          ],
                          defaultValue: "left",
                        }),
                        full: fields.empty(),
                      }
                    ),
                    "4/3": fields.conditional(
                      fields.select({
                        label: "Breite",
                        description:
                          "Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.",
                        options: [
                          { label: "halbe Breite", value: "half" },
                          { label: "ganze Breite", value: "full" },
                        ],
                        defaultValue: "full",
                      }),
                      {
                        half: fields.select({
                          label: "Position",
                          options: [
                            { label: "links", value: "left" },
                            { label: "zentriert", value: "center" },
                            { label: "rechts", value: "right" },
                          ],
                          defaultValue: "left",
                        }),
                        full: fields.empty(),
                      }
                    ),
                    "9/4": fields.empty(),
                    pano: fields.empty(),
                  }
                ),
              },
              ContentView: contentViewImageDefault,
            }),
            ImageSingleSquare: block({
              label: "Bild: einzeln, quadratisch",
              schema: {
                src: fields.image({
                  label: "Bild",
                  directory: "src/assets/homepage",
                  publicPath: "/src/assets/homepage",
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: "Bildunterschrift",
                  validation: { length: { min: 1, max: 80 } },
                }),
                alt: fields.text({ label: "Alt-Text" }),
                imageConfig: fields.conditional(
                  fields.select({
                    label: "Breite",
                    description:
                      "Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.",
                    options: [
                      { label: "halbe Breite", value: "half" },
                      { label: "ganze Breite", value: "full" },
                    ],
                    defaultValue: "full",
                  }),
                  {
                    half: fields.select({
                      label: "Position",
                      options: [
                        { label: "links", value: "left" },
                        { label: "zentriert", value: "center" },
                        { label: "rechts", value: "right" },
                      ],
                      defaultValue: "left",
                    }),
                    full: fields.empty(),
                  }
                ),
              },
              ContentView: contentViewImageDefault,
            }),
            ImageDouble: block({
              label: "Bild: doppelt",
              description: "quer / hoch / quadratisch",
              schema: {
                src: fields.image({
                  label: "1. Bild",
                  directory: "src/assets/homepage",
                  publicPath: "/src/assets/homepage",
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: "Bildunterschrift",
                  validation: { length: { min: 1, max: 80 } },
                }),
                srcSecond: fields.image({
                  label: "2. Bild",
                  directory: "src/assets/homepage",
                  publicPath: "/src/assets/homepage",
                  validation: { isRequired: true },
                }),
                captionSecond: fields.text({
                  label: "Bildunterschrift",
                  validation: { length: { min: 1, max: 80 } },
                }),
                alt: fields.text({ label: "Alt-Text" }),
                imageConfig: fields.conditional(
                  fields.select({
                    label: "Ausrichtung",
                    description: "",
                    options: [
                      { label: "quer", value: "horizontal" },
                      { label: "hoch", value: "vertical" },
                      { label: "quadratisch", value: "square" },
                    ],
                    defaultValue: "vertical",
                  }),
                  {
                    vertical: fields.select({
                      label: "Seitenverhältnis",
                      options: [
                        { label: "3:2", value: "3/2" },
                        { label: "4:3", value: "4/3" },
                      ],
                      defaultValue: "3/2",
                    }),
                    horizontal: fields.select({
                      label: "Seitenverhältnis",
                      options: [
                        { label: "3:2", value: "3/2" },
                        { label: "4:3", value: "4/3" },
                      ],
                      defaultValue: "3/2",
                    }),
                    square: fields.empty(),
                  }
                ),
              },
              ContentView: contentViewImageDefaultDouble,
            }),
          },
          options: {
            image: {
              directory: "src/assets/homepage",
              publicPath: "/src/assets/homepage",
            },
          },
        }),
      },
    }),
    presspage: singleton({
      label: "Presse-Seite",
      format: { contentField: "content" },
      path: "src/content/presspage/",
      schema: {
        title: fields.text({
          label: "Überschrift",
          validation: { length: { min: 1, max: 80 } },
        }),
        subTitle: fields.text({
          label: "Unterüberschrift",
          validation: { length: { max: 160 } },
        }),
        mediaLinks: fields.array(
          fields.object({
            url: fields.url({
              label: "Link URL",
              validation: { isRequired: true },
            }),
            display: fields.text({
              label: "Link-Beschriftung",
              validation: { length: { min: 1 } },
            }),
          }),
          {
            label: "Liste Medienartikel",
            itemLabel: (props) => props.fields.url.value || "Artikel",
          }
        ),
        content: fields.mdx({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/presspage",
              publicPath: "/src/assets/presspage",
            },
          },
        }),
      },
    }),
    projectpartnerpage: singleton({
      label: "Projektpartner-Seite",
      format: { contentField: "content" },
      path: "src/content/projectpartnerpage/",
      schema: {
        title: fields.text({
          label: "Überschrift",
          validation: { length: { min: 1, max: 80 } },
        }),
        subTitle: fields.text({
          label: "Unterüberschrift",
          validation: { length: { max: 160 } },
        }),
        content: fields.mdx({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/projectpartnerpage",
              publicPath: "/src/assets/projectpartnerpage",
            },
          },
        }),
      },
    }),
    imprintpage: singleton({
      label: "Impressum",
      format: { contentField: "content" },
      path: "src/content/imprintpage/",
      schema: {
        title: fields.text({
          label: "Überschrift",
          validation: { length: { min: 1, max: 80 } },
        }),
        subTitle: fields.text({
          label: "Unterüberschrift",
          validation: { length: { max: 160 } },
        }),
        content: fields.mdx({
          label: "Content",
        }),
      },
    }),
    privacypage: singleton({
      label: "Datenschutz",
      format: { contentField: "content" },
      path: "src/content/privacypage/",
      schema: {
        title: fields.text({
          label: "Überschrift",
          validation: { length: { min: 1, max: 80 } },
        }),
        subTitle: fields.text({
          label: "Unterüberschrift",
          validation: { length: { max: 160 } },
        }),
        content: fields.mdx({
          label: "Content",
        }),
      },
    }),
  },
  collections: {
    subProjects: collection({
      label: "Teilprojekte",
      slugField: "title",
      path: "src/content/subprojects/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Title", validation: { length: { min: 1, max: 80 } } },
        }),
        subTitle: fields.text({
          label: "Unterüberschrift",
          validation: { length: { max: 160 } },
        }),
        teaser: fields.text({
          label: "Teaser Text",
          validation: { length: { max: 160 } },
        }),
        showBig: fields.checkbox({
          label: "Als große Vorschau-Karte auf der Homepage anzeigen?",
          defaultValue: false,
        }),
        teaserImage: fields.image({
          label: "Teaser Bild",
          description:
            "Bild bitte im Format 2:3 (quer) hochlade bzw. wird dementsprechend beschnitten.",
          directory: "src/assets/subprojects",
          publicPath: "/src/assets/subprojects",
          validation: { isRequired: true },
        }),
        topics: fields.array(
          fields.relationship({
            label: "Themen",
            collection: "subprojectstopics",
          }),
          {
            label: "Themen",
            itemLabel: (props) => props.value || "thema",
          }
        ),
        partners: fields.multiselect({
          label: "Projektpartner",
          options: [
            { label: "TH Wildau", value: "th" },
            { label: "Gemeinde Eichwalde", value: "eichwalde" },
            { label: "Gemeinde Zeuthen", value: "zeuthen" },
            { label: "Gemeinde Schulzendorf", value: "schulzendorf" },
            { label: "Gemeinde Wildau", value: "wildau" },
            { label: "TU Berlin", value: "tu" },
            { label: "FixMyCity", value: "fmc" },
          ],
          defaultValue: ["th"],
        }),
        commune: fields.multiselect({
          label: "Projektkommune(n)",
          options: [
            { label: "Gemeinde Eichwalde", value: "eichwalde" },
            { label: "Gemeinde Zeuthen", value: "zeuthen" },
            { label: "Gemeinde Schulzendorf", value: "schulzendorf" },
            { label: "Gemeinde Wildau", value: "wildau" },
          ],
          defaultValue: ["eichwalde"],
        }),
        start: fields.date({
          label: "Projektstart",
          validation: { isRequired: true },
        }),
        end: fields.date({
          label: "Projektende",
        }),
        funding: fields.text({ label: "Finanzierung" }),
        content: fields.mdx({
          label: "Content",
          components: {
            ImageWithCaption: block({
              label: "Bild mit Unterschrift",
              schema: {
                src: fields.image({
                  label: "Bild",
                  directory: "src/assets/subprojects",
                  publicPath: "/src/assets/subprojects",
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: "Bildunterschrift",
                  validation: { length: { min: 1, max: 80 } },
                }),
                alt: fields.text({ label: "Alt-Text" }),
                position: fields.select({
                  label: "Position",
                  options: [
                    { label: "links", value: "left" },
                    { label: "zentriert", value: "center" },
                    { label: "rechts", value: "right" },
                  ],
                  defaultValue: "left",
                }),
              },
              // as we are using atsro we have to copy paste the whole component and have to keep it in sync manually
              // talwind does not work in the keysatic ui YET
              // Image Preview is not working yet so we have a default image here for now
              ContentView: contentViewImageDefault,
            }),
          },
          options: {
            image: {
              directory: "src/assets/images/subprojects",
              publicPath: "/src/assets/images/subprojects/",
            },
          },
        }),
      },
    }),
    // topics for measures and subprojects
    subprojectstopics: {
      label: "Themen",
      slugField: "title",
      path: "src/content/subprojectstopics/*",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
      },
    },
    measures: collection({
      label: "Maßnahmen",
      slugField: "title",
      path: "src/content/measures/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Titel", validation: { length: { min: 1, max: 80 } } },
        }),
        id: fields.text({
          label: "ID",
          validation: { length: { min: 1, max: 80 } },
        }),
        geometry: fields.conditional(
          fields.checkbox({
            label: "Geometrie vorhanden",
            defaultValue: false,
          }),
          {
            true: fields.select({
              label: "Geometrie Typ",
              options: [
                { label: "Punkt", value: "point" },
                { label: "Linie", value: "line" },
              ],
              defaultValue: "line",
            }),
            false: fields.empty(),
          }
        ),
        topics: fields.array(
          fields.relationship({
            label: "Themen/Typ",
            collection: "subprojectstopics",
          }),
          {
            label: "Themen",
            itemLabel: (props) => props.value || "thema",
            validation: { length: { min: 1 } },
          }
        ),
        realisationDate: fields.date({
          label: "Datum der Realisierung",
        }),
        cost: fields.number({
          label: "Kosten in €",
          validation: { min: 0 },
        }),
        image: fields.image({
          label: "Bild",
          description:
            "Bild bitte im Format 2:3 (quer) hochlade bzw. wird dementsprechend beschnitten.",
          directory: "src/assets/measures",
          publicPath: "/src/assets/measures",
        }),
        state: fields.select({
          label: "Status",
          options: [
            { label: "Idee", value: "idea" },
            { label: "Planung", value: "planning" },
            { label: "Umsetzung", value: "realization" },
            { label: "Fertig", value: "complete" },
          ],
          defaultValue: "idea",
        }),
        operators: fields.array(
          fields.relationship({
            label: "Baulastträger",
            collection: "measureoperators",
          }),
          {
            label: "Baulastträger",
            itemLabel: (props) => props.value || "thema",
            validation: { length: { min: 1 } },
          }
        ),
        content: fields.mdx({
          label: "Beschreibung",
          options: {
            image: {
              directory: "src/assets/images/measures",
              publicPath: "/src/assets/images/measures/",
            },
          },
        }),
      },
    }),
    measureoperators: collection({
      label: "Baulastträger",
      slugField: "title",
      path: "src/content/measureoperator/*",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
      },
    }),
    persons: collection({
      label: "Personen",
      path: "src/content/persons/*",
      format: {
        contentField: "fakeDocument",
      },
      slugField: "name",
      schema: {
        name: fields.slug({
          name: {
            label: "Name",
            validation: { length: { min: 1, max: 500 } },
          },
        }),
        firstName: fields.text({
          label: "Vorname",
          validation: { length: { min: 1, max: 500 } },
        }),
        personImage: fields.image({
          label: "Bild",
          description: "Bild bitte im Format 1:1 hochladen.",
          directory: "src/assets/persons",
          publicPath: "../../assets/persons",
          validation: { isRequired: true },
        }),
        institution: fields.select({
          label: "Institution",
          options: [
            { label: "TH Wildau", value: "th" },
            { label: "Gemeinde Eichwalde", value: "eichwalde" },
            { label: "Gemeinde Zeuthen", value: "zeuthen" },
            { label: "Gemeinde Schulzendorf", value: "schulzendorf" },
            { label: "Gemeinde Wildau", value: "wildau" },
            { label: "TU Berlin", value: "tu" },
            { label: "FixMyCity", value: "fmc" },
          ],
          defaultValue: "th",
        }),
        position: fields.text({
          label: "Position",
          validation: { length: { min: 1, max: 500 } },
        }),
        email: fields.text({ label: "Email" }),
        fakeDocument: fields.emptyDocument(),
      },
    }),
    // posts: collection({
    //   label: "Posts",
    //   slugField: "title",
    //   path: "src/content/posts/*",
    //   format: { contentField: "content" },
    //   schema: {
    //     title: fields.slug({ name: { label: "Title" } }),
    //     content: fields.document({
    //       label: "Content",
    //       formatting: true,
    //       dividers: true,
    //       links: true,
    //       images: {
    //         directory: "src/assets/images/posts",
    //         publicPath: "../../assets/images/posts/",
    //       },
    //     }),
    //   },
    // }),
    // news: collection({
    //   label: "News",
    //   slugField: "title",
    //   path: "src/content/news/*",
    //   format: { contentField: "content" },
    //   schema: {
    //     title: fields.slug({ name: { label: "Title" } }),
    //     teaserImage: fields.image({
    //       label: "Teaser Bild",
    //       directory: "src/assets/news",
    //       publicPath: "/src/assets/news",
    //     }),
    //     content: fields.mdx({
    //       label: "Rich text",
    //       components: {
    //         Testimonial: wrapper({
    //           label: "Testimonial",
    //           schema: {
    //             author: fields.text({ label: "Author" }),
    //             role: fields.text({ label: "Role" }),
    //           },
    //         }),
    //         Container: wrapper({
    //           label: "Container",
    //           schema: {
    //             crop: fields.select({
    //               label: "Crop",
    //               description: "Max width container and options",
    //               options: [
    //                 { label: "normal", value: "normal" },
    //                 { label: "narrow", value: "narrow" },
    //                 { label: "narrower", value: "narrower" },
    //                 { label: "bleed", value: "bleed" },
    //                 { label: "boxed", value: "boxed" },
    //                 { label: "narrow-boxed", value: "narrow-boxed" },
    //               ],
    //               defaultValue: "normal",
    //             }),
    //           },
    //         }),
    //         Playlist: block({
    //           label: "Playlist",
    //           schema: {
    //             id: fields.text({
    //               label: "Playlist ID",
    //               validation: { length: { min: 1, max: 100 } },
    //             }),
    //           },
    //           // as we are using atsro we have to copy paste the whole component and have to keep it in sync manually
    //           // talwind does not work in the keysatic ui YET
    //           ContentView: (props) => (
    //             <h1
    //               style={{
    //                 borderRadius: "9999px",
    //                 backgroundColor: "#fecaca",
    //                 padding: "1rem",
    //               }}
    //               className="rounded-full bg-red-200 p-4"
    //             >
    //               {props.value.id}
    //             </h1>
    //           ),
    //         }),
    //         ImageWithCaption: block({
    //           label: "Bild mit Unterschrift",
    //           schema: {
    //             src: fields.image({
    //               label: "Bild",
    //               directory: "src/assets/news",
    //               publicPath: "/src/assets/news",
    //               validation: { isRequired: true },
    //             }),
    //             caption: fields.text({
    //               label: "Bildunterschrift",
    //               validation: { length: { min: 1, max: 80 } },
    //             }),
    //             alt: fields.text({ label: "Alt-Text" }),
    //           },
    //           // as we are using atsro we have to copy paste the whole component and have to keep it in sync manually
    //           // talwind does not work in the keysatic ui YET
    //           // Image Preview is not working yet so we have a default image here for now
    //           ContentView: contentViewImageDefault,
    //         }),
    //       },
    //     }),
    //   },
    // }),
  },
});
