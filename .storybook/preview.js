import StylesProvider from "@material-ui/styles/StylesProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered'
}

export const decorators = [
  Story => (
    <>
      <StylesProvider injectFirst>
          <Story />
      </StylesProvider>
    </>
  ),
];