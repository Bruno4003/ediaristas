import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <UserInformation
        name={"Bruno Florencio"}
        picture={"https://github.com/Bruno4003.png"}
        rating={3}
        description={"São Paulo"}
      />
      <UserInformation
        name={"Mario Alberto"}
        picture={"https://github.com/Bruno4003.png"}
        rating={3}
        description={"Minas Gerais"}
      />
    </div>
  );
};

export default Home;
