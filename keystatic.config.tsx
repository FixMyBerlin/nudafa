import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { collection, config, fields, singleton } from "@keystatic/core";
import { block, inline } from "@keystatic/core/content-components";
import { Uint8Array } from "./src/components/Unit8Image.tsx";

const contentViewImageVertical = (props: any) => {
  if (props.value.src)
    return (
      <div>
        <small style={{ color: "gray" }}>
          *Positionierung und Seitenverhältnis sind in der Vorschau nicht
          korrekt dargestellt
        </small>
        <figure>
          <div style={{ height: "300px", width: "200px" }}>
            <Uint8Array data={props.value.src?.data} />
          </div>
          <figcaption>{props.value.caption}</figcaption>
        </figure>
      </div>
    );
  return <p>Füge ein Bild hinzu über "Edit"</p>;
};
const contentViewImageSquare = (props: any) => {
  if (props.value.src)
    return (
      <div>
        <small style={{ color: "gray" }}>
          *Positionierung und Seitenverhältnis sind in der Vorschau nicht
          korrekt dargestellt
        </small>
        <figure>
          <div style={{ height: "200px", width: "200px" }}>
            <Uint8Array data={props.value.src?.data} />
          </div>
          <figcaption>{props.value.caption}</figcaption>
        </figure>
      </div>
    );
  return <p>Füge ein Bild hinzu über "Edit"</p>;
};
const contentViewImageHorizontal = (props: any) => {
  if (props.value.src)
    return (
      <div>
        <small style={{ color: "gray" }}>
          *Positionierung und Seitenverhältnis sind in der Vorschau nicht
          korrekt dargestellt
        </small>
        <figure>
          <div style={{ height: "200px", width: "300PX" }}>
            <Uint8Array data={props.value.src?.data} />
          </div>
          <figcaption>{props.value.caption}</figcaption>
        </figure>
      </div>
    );
  return <p>Füge ein Bild hinzu über "Edit"</p>;
};
const contentViewImageDefaultDouble = (props: any) => {
  if (props.value.src)
    return (
      <div>
        <small style={{ color: "gray" }}>
          *Positionierung und Seitenverhältnis sind in der Vorschau nicht
          korrekt dargestellt
        </small>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "49% 49%",
            width: "100%",
          }}
        >
          <figure>
            <div style={{ height: "250px" }}>
              <Uint8Array data={props.value.src?.data} />
            </div>
            <figcaption>{props.value.caption}</figcaption>
          </figure>
          <figure>
            <div style={{ height: "250px" }}>
              <Uint8Array data={props.value.srcSecond?.data} />
            </div>
            <figcaption>{props.value.captionSecond}</figcaption>
          </figure>
        </div>
      </div>
    );
  return <p>Füge ein Bild hinzu über "Edit"</p>;
};

export default config({
  storage: {
    kind: process.env.NODE_ENV === "development" ? "local" : "github",
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
      Home: ["homepageintro", "homepagemain"],
      "Das Reallabor": [
        "projectpartnerpageintro",
        "projectpartnerpagemain",
        "persons",
        "presspage",
      ],
      Teilprojekte: ["subProjects", "subprojectstopics", "communes"],
      Maßnahmen: ["measures", "measuretypes", "subprojectstopics"],
      "Weitere Seiten": ["imprintpage", "privacypage"],
    },
  },
  singletons: {
    homepageintro: singleton({
      label: "Homepage Einführung (Über Teilprojekte-Teasern)",
      format: { contentField: "content" },
      path: "src/content/homepageintro/",
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
            TextLinkArrow: inline({
              label: "Textlink mit Pfeil",
              schema: {
                href: fields.url({
                  label: "URL",
                  validation: { isRequired: true },
                }),
                display: fields.text({
                  label: "Link-Label",
                  validation: { isRequired: true },
                }),
                external: fields.checkbox({
                  label: "Externer Link",
                  defaultValue: false,
                }),
              },
              NodeView: (props) => {
                if (props.value.external) {
                  return (
                    <span
                      style={{
                        color: "#977214",
                      }}
                    >
                      <ArrowRightIcon
                        style={{
                          width: "0.74rem",
                        }}
                      />{" "}
                      {props.value.display}
                    </span>
                  );
                } else {
                  return (
                    <span
                      style={{
                        color: "#977214",
                      }}
                    >
                      <ArrowUpRightIcon
                        style={{
                          width: "0.74rem",
                        }}
                      />{" "}
                      {props.value.display}
                    </span>
                  );
                }
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
              ContentView: contentViewImageVertical,
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
              ContentView: contentViewImageHorizontal,
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
              ContentView: contentViewImageSquare,
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
    homepagemain: singleton({
      label: "Homepage Hauptteil (Unter Teilprojekte-Teasern)",
      format: { contentField: "content" },
      path: "src/content/homepagemain/",
      schema: {
        content: fields.mdx({
          label: "Content",
          components: {
            TextLinkArrow: inline({
              label: "Textlink mit Pfeil",
              schema: {
                href: fields.url({
                  label: "Link-Label",
                  validation: { isRequired: true },
                }),
                display: fields.text({
                  label: "URL",
                  validation: { isRequired: true },
                }),
                external: fields.checkbox({
                  label: "Externer Link",
                  defaultValue: false,
                }),
              },
              NodeView: (props) => {
                if (props.value.external) {
                  return (
                    <span
                      style={{
                        color: "#977214",
                      }}
                    >
                      <ArrowRightIcon
                        style={{
                          width: "0.74rem",
                        }}
                      />{" "}
                      {props.value.display}
                    </span>
                  );
                } else {
                  return (
                    <span
                      style={{
                        color: "#977214",
                      }}
                    >
                      <ArrowUpRightIcon
                        style={{
                          width: "0.74rem",
                        }}
                      />{" "}
                      {props.value.display}
                    </span>
                  );
                }
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
              ContentView: contentViewImageVertical,
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
              ContentView: contentViewImageHorizontal,
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
              ContentView: contentViewImageSquare,
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
          components: {
            TextLinkArrow: inline({
              label: "Textlink mit Pfeil",
              schema: {
                href: fields.url({
                  label: "Link-Label",
                  validation: { isRequired: true },
                }),
                display: fields.text({
                  label: "URL",
                  validation: { isRequired: true },
                }),
                external: fields.checkbox({
                  label: "Externer Link",
                  defaultValue: false,
                }),
              },
              NodeView: (props) => {
                if (props.value.external) {
                  return (
                    <span
                      style={{
                        color: "#977214",
                      }}
                    >
                      <ArrowRightIcon
                        style={{
                          width: "0.74rem",
                        }}
                      />{" "}
                      {props.value.display}
                    </span>
                  );
                } else {
                  return (
                    <span
                      style={{
                        color: "#977214",
                      }}
                    >
                      <ArrowUpRightIcon
                        style={{
                          width: "0.74rem",
                        }}
                      />{" "}
                      {props.value.display}
                    </span>
                  );
                }
              },
            }),
            ImageSingleVertical: block({
              label: "Bild: einzeln, Hochformat",
              schema: {
                src: fields.image({
                  label: "Bild",
                  directory: "src/assets/presspage",
                  publicPath: "/src/assets/presspage",
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
              ContentView: contentViewImageVertical,
            }),
            ImageSingleHorizontal: block({
              label: "Bild: einzeln, Querformat",
              schema: {
                src: fields.image({
                  label: "Bild",
                  directory: "src/assets/presspage",
                  publicPath: "/src/assets/presspage",
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
              ContentView: contentViewImageHorizontal,
            }),
            ImageSingleSquare: block({
              label: "Bild: einzeln, quadratisch",
              schema: {
                src: fields.image({
                  label: "Bild",
                  directory: "src/assets/presspage",
                  publicPath: "/src/assets/presspage",
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
              ContentView: contentViewImageSquare,
            }),
            ImageDouble: block({
              label: "Bild: doppelt",
              description: "quer / hoch / quadratisch",
              schema: {
                src: fields.image({
                  label: "1. Bild",
                  directory: "src/assets/presspage",
                  publicPath: "/src/assets/presspage",
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: "Bildunterschrift",
                  validation: { length: { min: 1, max: 80 } },
                }),
                srcSecond: fields.image({
                  label: "2. Bild",
                  directory: "src/assets/presspage",
                  publicPath: "/src/assets/presspage",
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
        }),
      },
    }),
    projectpartnerpageintro: singleton({
      label: "Über uns-Seite Einführung",
      format: { contentField: "content" },
      path: "src/content/projectpartnerpageintro/",
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
            TextLinkArrow: inline({
              label: "Textlink mit Pfeil",
              schema: {
                href: fields.url({
                  label: "Link-Label",
                  validation: { isRequired: true },
                }),
                display: fields.text({
                  label: "URL",
                  validation: { isRequired: true },
                }),
                external: fields.checkbox({
                  label: "Externer Link",
                  defaultValue: false,
                }),
              },
              NodeView: (props) => {
                if (props.value.external) {
                  return (
                    <span
                      style={{
                        color: "#977214",
                      }}
                    >
                      <ArrowRightIcon
                        style={{
                          width: "0.74rem",
                        }}
                      />{" "}
                      {props.value.display}
                    </span>
                  );
                } else {
                  return (
                    <span
                      style={{
                        color: "#977214",
                      }}
                    >
                      <ArrowUpRightIcon
                        style={{
                          width: "0.74rem",
                        }}
                      />{" "}
                      {props.value.display}
                    </span>
                  );
                }
              },
            }),
            ImageSingleVertical: block({
              label: "Bild: einzeln, Hochformat",
              schema: {
                src: fields.image({
                  label: "Bild",
                  directory: "src/assets/projectpartnerpage",
                  publicPath: "/src/assets/projectpartnerpage",
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
              ContentView: contentViewImageVertical,
            }),
            ImageSingleHorizontal: block({
              label: "Bild: einzeln, Querformat",
              schema: {
                src: fields.image({
                  label: "Bild",
                  directory: "src/assets/projectpartnerpage",
                  publicPath: "/src/assets/projectpartnerpage",
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
              ContentView: contentViewImageHorizontal,
            }),
            ImageSingleSquare: block({
              label: "Bild: einzeln, quadratisch",
              schema: {
                src: fields.image({
                  label: "Bild",
                  directory: "src/assets/projectpartnerpage",
                  publicPath: "/src/assets/projectpartnerpage",
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
              ContentView: contentViewImageSquare,
            }),
            ImageDouble: block({
              label: "Bild: doppelt",
              description: "quer / hoch / quadratisch",
              schema: {
                src: fields.image({
                  label: "1. Bild",
                  directory: "src/assets/projectpartnerpage",
                  publicPath: "/src/assets/projectpartnerpage",
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: "Bildunterschrift",
                  validation: { length: { min: 1, max: 80 } },
                }),
                srcSecond: fields.image({
                  label: "2. Bild",
                  directory: "src/assets/projectpartnerpage",
                  publicPath: "/src/assets/projectpartnerpage",
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
        }),
      },
    }),
    projectpartnerpagemain: singleton({
      label: "Über uns-Seite Hauptteil",
      format: { contentField: "content" },
      path: "src/content/projectpartnerpagemain/",
      schema: {
        content: fields.mdx({
          label: "Content",
          components: {
            TextLinkArrow: inline({
              label: "Textlink mit Pfeil",
              schema: {
                href: fields.url({
                  label: "Link-Label",
                  validation: { isRequired: true },
                }),
                display: fields.text({
                  label: "URL",
                  validation: { isRequired: true },
                }),
                external: fields.checkbox({
                  label: "Externer Link",
                  defaultValue: false,
                }),
              },
              NodeView: (props) => {
                if (props.value.external) {
                  return (
                    <span
                      style={{
                        color: "#977214",
                      }}
                    >
                      <ArrowRightIcon
                        style={{
                          width: "0.74rem",
                        }}
                      />{" "}
                      {props.value.display}
                    </span>
                  );
                } else {
                  return (
                    <span
                      style={{
                        color: "#977214",
                      }}
                    >
                      <ArrowUpRightIcon
                        style={{
                          width: "0.74rem",
                        }}
                      />{" "}
                      {props.value.display}
                    </span>
                  );
                }
              },
            }),
            ImageSingleVertical: block({
              label: "Bild: einzeln, Hochformat",
              schema: {
                src: fields.image({
                  label: "Bild",
                  directory: "src/assets/projectpartnerpage",
                  publicPath: "/src/assets/projectpartnerpage",
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
              ContentView: contentViewImageVertical,
            }),
            ImageSingleHorizontal: block({
              label: "Bild: einzeln, Querformat",
              schema: {
                src: fields.image({
                  label: "Bild",
                  directory: "src/assets/projectpartnerpage",
                  publicPath: "/src/assets/projectpartnerpage",
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
              ContentView: contentViewImageHorizontal,
            }),
            ImageSingleSquare: block({
              label: "Bild: einzeln, quadratisch",
              schema: {
                src: fields.image({
                  label: "Bild",
                  directory: "src/assets/projectpartnerpage",
                  publicPath: "/src/assets/projectpartnerpage",
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
              ContentView: contentViewImageSquare,
            }),
            ImageDouble: block({
              label: "Bild: doppelt",
              description: "quer / hoch / quadratisch",
              schema: {
                src: fields.image({
                  label: "1. Bild",
                  directory: "src/assets/projectpartnerpage",
                  publicPath: "/src/assets/projectpartnerpage",
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: "Bildunterschrift",
                  validation: { length: { min: 1, max: 80 } },
                }),
                srcSecond: fields.image({
                  label: "2. Bild",
                  directory: "src/assets/projectpartnerpage",
                  publicPath: "/src/assets/projectpartnerpage",
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
        teaserImageCopyright: fields.text({
          label: "Copyright Teaser Bild",
          validation: { length: { max: 100 } },
        }),
        topics: fields.multiRelationship({
          label: "Themen",
          collection: "subprojectstopics",
        }),
        partners: fields.multiselect({
          label: "Projektpartner",
          options: [
            { label: "TH Wildau", value: "th" },
            { label: "Gemeinde Eichwalde", value: "eichwalde" },
            { label: "Gemeinde Zeuthen", value: "zeuthen" },
            { label: "Gemeinde Schulzendorf", value: "schulzendorf" },
            { label: "Stadt Wildau", value: "wildau" },
            { label: "TU Berlin", value: "tu" },
            { label: "FixMyCity", value: "fmc" },
          ],
          defaultValue: ["th"],
        }),
        projectCommunes: fields.multiRelationship({
          label: "Weitere Projektpartner",
          collection: "communes",
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
            TextLinkArrow: inline({
              label: "Textlink mit Pfeil",
              schema: {
                href: fields.url({
                  label: "Link-Label",
                  validation: { isRequired: true },
                }),
                display: fields.text({
                  label: "URL",
                  validation: { isRequired: true },
                }),
                external: fields.checkbox({
                  label: "Externer Link",
                  defaultValue: false,
                }),
              },
              NodeView: (props) => {
                if (props.value.external) {
                  return (
                    <span
                      style={{
                        color: "#977214",
                      }}
                    >
                      <ArrowRightIcon
                        style={{
                          width: "0.74rem",
                        }}
                      />{" "}
                      {props.value.display}
                    </span>
                  );
                } else {
                  return (
                    <span
                      style={{
                        color: "#977214",
                      }}
                    >
                      <ArrowUpRightIcon
                        style={{
                          width: "0.74rem",
                        }}
                      />{" "}
                      {props.value.display}
                    </span>
                  );
                }
              },
            }),
            ImageSingleVertical: block({
              label: "Bild: einzeln, Hochformat",
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
              ContentView: contentViewImageVertical,
            }),
            ImageSingleHorizontal: block({
              label: "Bild: einzeln, Querformat",
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
              ContentView: contentViewImageHorizontal,
            }),
            ImageSingleSquare: block({
              label: "Bild: einzeln, quadratisch",
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
              ContentView: contentViewImageSquare,
            }),
            ImageDouble: block({
              label: "Bild: doppelt",
              description: "quer / hoch / quadratisch",
              schema: {
                src: fields.image({
                  label: "1. Bild",
                  directory: "src/assets/subprojects",
                  publicPath: "/src/assets/subprojects",
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: "Bildunterschrift",
                  validation: { length: { min: 1, max: 80 } },
                }),
                srcSecond: fields.image({
                  label: "2. Bild",
                  directory: "src/assets/subprojects",
                  publicPath: "/src/assets/subprojects",
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
        type: fields.relationship({
          label: "Maßnahmenart",
          collection: "measuretypes",
        }),
        topics: fields.multiRelationship({
          label: "Themen/Typ",
          collection: "subprojectstopics",
        }),
        urgency: fields.checkbox({
          label: "Dringlichkeit",
          defaultValue: false,
        }),
        startDate: fields.date({
          label: "Datum Beginn",
        }),
        realisationDate: fields.date({
          label: "Datum der Fertigstellung",
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
        imageCopyright: fields.text({
          label: "Copyright Bild",
          validation: { length: { max: 100 } },
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
        operators: fields.multiselect({
          label: "Baulastträger",
          options: [
            { label: "Eichwalde", value: "eichwalde" },
            { label: "Schulzendorf", value: "schulzendorf" },
            { label: "Zeuthen", value: "zeuthen" },
            { label: "Wildau", value: "wildau" },
            { label: "Königs-Wusterhausen", value: "kw" },
            { label: "Schönefeld", value: "schoenefeld" },
          ],
        }),
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
    measuretypes: collection({
      label: "Maßnahmenart",
      slugField: "title",
      path: "src/content/measuretypes/*",
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
            { label: "Stadt Wildau", value: "wildau" },
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
    communes: collection({
      label: "Kommunen",
      path: "src/content/communes/*",
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
        image: fields.image({
          label: "Bild",
          directory: "src/assets/communes",
          publicPath: "../../assets/communes",
          validation: { isRequired: true },
        }),
        website: fields.url({
          label: "Website",
          validation: { isRequired: true },
        }),
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
