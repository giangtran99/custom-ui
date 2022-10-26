// src/CarouselBanner.tsx
import { useEffect, useState } from "react";
import { useLatestState } from "@hoanggiangg199/hooks";
import { AddIcon } from "@chakra-ui/icons";
import { getElipsisString } from "@hoanggiangg199/utilities";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function CarouselBanner({ listItems }) {
  const [currentItem, setCurrentItem] = useState(1);
  const slideItem = (id) => {
    setCurrentItem(id);
  };
  useEffect(() => {
    const id = setInterval(async () => {
      let latestCurrentItem = await useLatestState(setCurrentItem);
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
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-row gap-x-4",
      children: [
        listItems.map((item) => {
          return /* @__PURE__ */ jsx(Fragment, {
            children: /* @__PURE__ */ jsxs("div", {
              id: item.id,
              className: `relative h-full basis-5/6 mobile:basis-full animate-slide ${isCurrentItem(item.id) ? "" : "hidden"}`,
              children: [
                /* @__PURE__ */ jsxs("div", {
                  className: `absolute bottom-0 p-10 w-[40%] mobile:w-[90%] mobile:hidden`,
                  children: [
                    /* @__PURE__ */ jsx("h1", {
                      className: "text-xl antialiased leading-4 font-black",
                      children: item.name
                    }),
                    /* @__PURE__ */ jsx("h1", {
                      className: "antialiased mt-5",
                      children: getElipsisString(item.description, 100)
                    }),
                    /* @__PURE__ */ jsxs("p", {
                      className: "mt-5",
                      children: [
                        "Starting at ",
                        /* @__PURE__ */ jsxs("span", {
                          className: "font-semibold",
                          children: [
                            item.price,
                            "$"
                          ]
                        })
                      ]
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "mt-7 flex flex-row",
                      children: [
                        /* @__PURE__ */ jsx("a", {
                          className: "bg-white border text-black rounded p-3 basis-1/2 text-center",
                          href: `/${item.nameAlias}`,
                          children: "BUY NOW"
                        }),
                        /* @__PURE__ */ jsx("button", {
                          className: "rounded ml-3 basis-1/2 hover:border hover:bg-[rgba(192,192,192,0.3)] p-2 text-white text-[10px]",
                          children: /* @__PURE__ */ jsxs("div", {
                            className: "flex flex-row",
                            children: [
                              /* @__PURE__ */ jsx(AddIcon, {
                                boxSize: "2em",
                                className: "m-auto border-white border-[2px] rounded-full p-1 "
                              }),
                              /* @__PURE__ */ jsx("span", {
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
                /* @__PURE__ */ jsx("div", {
                  children: /* @__PURE__ */ jsxs("picture", {
                    children: [
                      /* @__PURE__ */ jsx("source", {
                        media: "(max-width:841px)",
                        srcSet: item.thumbnailUrl
                      }),
                      /* @__PURE__ */ jsx("img", {
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
        /* @__PURE__ */ jsx("div", {
          className: `basis-1/6 flex flex-col justify-between mobile:hidden gap-y-2`,
          children: listItems.map((item) => {
            return /* @__PURE__ */ jsx(Fragment, {
              children: /* @__PURE__ */ jsxs("div", {
                className: `h-[16%] relative`,
                onClick: () => slideItem(item.id),
                children: [
                  /* @__PURE__ */ jsx("div", {
                    id: `progress-bar-${item.id}`,
                    className: `absolute rounded-l-xl h-[100%] ${isCurrentItem(item.id) ? `bg-[rgba(192,192,192,0.3)] ` : ""}`
                  }, item.id),
                  /* @__PURE__ */ jsxs("div", {
                    className: `hover:bg-[rgba(0,0,0,0.5)] ${isCurrentItem(item.id) ? "bg-[rgba(0,0,0,0.5)]" : ""} rounded-xl bp-2:rounded-lg h-[100%] flex flex-row my-auto`,
                    children: [
                      /* @__PURE__ */ jsx("div", {
                        className: "my-auto ml-2 basis-1/4",
                        children: /* @__PURE__ */ jsx("img", {
                          className: "bp-3:rounded rounded-lg",
                          src: `${item.thumbnailUrl}`
                        })
                      }),
                      /* @__PURE__ */ jsx("div", {
                        className: "ml-3 m-auto basis-2/4",
                        children: /* @__PURE__ */ jsx("span", {
                          className: "text-sm",
                          children: getElipsisString(item.name, 100)
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
export {
  CarouselBanner
};
