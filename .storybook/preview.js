import StylesProvider from "@material-ui/styles/StylesProvider";
import Center from '../src/components/Center/Center'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  Story => (
    <>
      <StylesProvider injectFirst>
        <Center>
          <Story />
        </Center>
      </StylesProvider>
    </>
  ),
];