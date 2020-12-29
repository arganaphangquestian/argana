import useTheme from "@hooks/use_theme";
import Head from "next/head";
import { Container, Center, Glitch } from "./index_style";

const Index = () => {
  // TODO: Change this into Context Hooks State Management
  const [theme, toggleTheme] = useTheme();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Container>
        <Center>
          <Glitch
            text={`Argana Phangquestian`}
            onClick={() => toggleTheme(!theme)}
          >
            Argana Phangquestian
          </Glitch>
        </Center>
      </Container>
    </>
  );
};

export default Index;
