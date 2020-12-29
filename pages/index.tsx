import { useThemeAppDispatch } from "@contexts/theme_context";
import Head from "next/head";
import { Container, Center, Glitch } from "./index_style";

const Index = () => {
  const themeDispatch = useThemeAppDispatch();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Container>
        <Center>
          <Glitch
            text={`Argana Phangquestian`}
            onClick={() => themeDispatch({ type: "toggle" })}
          >
            Argana Phangquestian
          </Glitch>
        </Center>
      </Container>
    </>
  );
};

export default Index;
