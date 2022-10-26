/**
 * 📝 Notes for Contributors:
 *
 * - When creating an interactive component, we recommend creating hooks that
 * handles accessibility, state management, and behavior concerns.
 *
 * - Hooks should return prop-getters and some state information.
 *
 * > If you're not creating an interactive component, you can delete this file.
 *
 * @see https://chakra-ui.com/guides/component-guide
 */
interface UseCarouselBarProps {
}
declare function useCarouselBar(props: UseCarouselBarProps): {};
declare type UseCarouselBarReturn = ReturnType<typeof useCarouselBar>;

/**
 * 📝 Notes for Contributors:
 *
 * - When creating an interactive component, we recommend consuming the
 * component hook created.
 *
 * For example, if you wanted to build an accordion component,
 * you'll first create a `useAccordion` hook and then create an `Accordion` component
 *
 * - Ensure this component is properly themable by following [this guide](https://chakra-ui.com/docs/theming/component-style)
 *
 * - Ensure the component is composable and can adapt to multiple use-cases
 *
 * @see Guide https://chakra-ui.com/guides/component-guide
 * @see Theming https://chakra-ui.com/docs/theming/component-style
 */
interface CarouselBarProps {
    autoPlay?: boolean;
    listItems: any[];
    title: string;
}
declare function CarouselBar({ listItems, title }: CarouselBarProps): JSX.Element;
declare namespace CarouselBar {
    var displayName: typeof CarouselBar;
}

export { CarouselBar, UseCarouselBarProps, UseCarouselBarReturn, useCarouselBar };
