"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  CarouselBanner: () => CarouselBanner
});
module.exports = __toCommonJS(src_exports);

// src/CarouselBanner.tsx
var import_react = require("react");
var import_hooks = require("@hoanggiangg199/hooks");
var import_icons = require("@chakra-ui/icons");
var import_utilities = require("@hoanggiangg199/utilities");
var import_jsx_runtime = require("react/jsx-runtime");
function CarouselBanner({ listItems }) {
  const [currentItem, setCurrentItem] = (0, import_react.useState)(1);
  const slideItem = (id) => {
    setCurrentItem(id);
  };
  (0, import_react.useEffect)(() => {
    const id = setInterval(async () => {
      let latestCurrentItem = await (0, import_hooks.useLatestState)(setCurrentItem);
      console.log("@@latestCurrentItem", latestCurrentItem);
      let nextCurrentItem;
      nextCurrentItem = latestCurrentItem + 1;
      if (nextCurrentItem > listItems.length) {
        nextCurrentItem = 1;
      }
      slideItem(nextCurrentItem);
    }, 3e3);
    return () => clearInterval(id);
  }, []);
  const isCurrentItem = (id) => {
    return id === currentItem ? true : false;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "flex flex-row gap-x-4",
      children: [
        listItems.map((item) => {
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              id: item.id,
              className: `relative h-full basis-5/6 mobile:basis-full animate-slide ${isCurrentItem(item.id) ? "" : "hidden"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: `absolute bottom-0 p-10 w-[40%] mobile:w-[90%] mobile:hidden`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                      className: "text-xl antialiased leading-4 font-black",
                      children: item.name
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                      className: "antialiased mt-5",
                      children: (0, import_utilities.getElipsisString)(item.description, 100)
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                      className: "mt-5",
                      children: [
                        "Starting at ",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                          className: "font-semibold",
                          children: [
                            item.price,
                            "$"
                          ]
                        })
                      ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "mt-7 flex flex-row",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                          className: "bg-white border text-black rounded p-3 basis-1/2 text-center",
                          href: `/${item.nameAlias}`,
                          children: "BUY NOW"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          className: "rounded ml-3 basis-1/2 hover:border hover:bg-[rgba(192,192,192,0.3)] p-2 text-white text-[10px]",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex flex-row",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_icons.AddIcon, {
                                boxSize: "2em",
                                className: "m-auto border-white border-[2px] rounded-full p-1 "
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                className: "my-auto ml-2 basis-3/4",
                                children: "ADD TO WISHLIST"
                              })
                            ]
                          })
                        })
                      ]
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
                        media: "(max-width:841px)",
                        srcSet: item.thumbnailUrl
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                        className: `rounded-2xl h-full`,
                        src: item.imageUrl
                      })
                    ]
                  })
                })
              ]
            }, item.id)
          });
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: `basis-1/6 flex flex-col justify-between mobile:hidden gap-y-2`,
          children: listItems.map((item) => {
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: `h-[16%] relative`,
                onClick: () => slideItem(item.id),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    id: `progress-bar-${item.id}`,
                    className: `absolute rounded-l-xl h-[100%] ${isCurrentItem(item.id) ? `bg-[rgba(192,192,192,0.3)] ` : ""}`
                  }, item.id),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: `hover:bg-[rgba(0,0,0,0.5)] ${isCurrentItem(item.id) ? "bg-[rgba(0,0,0,0.5)]" : ""} rounded-xl bp-2:rounded-lg h-[100%] flex flex-row my-auto`,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "my-auto ml-2 basis-1/4",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                          className: "bp-3:rounded rounded-lg",
                          src: `${item.thumbnailUrl}`
                        })
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "ml-3 m-auto basis-2/4",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "text-sm",
                          children: (0, import_utilities.getElipsisString)(item.name, 100)
                        })
                      })
                    ]
                  })
                ]
              }, item.id)
            });
          })
        })
      ]
    })
  });
}
CarouselBanner.displayName = "CarouselBanner";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CarouselBanner
});
