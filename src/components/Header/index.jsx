import * as S from "./styles";
import Logo from "../Logo";

export default function Header() {
  return (
    <S.Header>
      <Logo />
      <S.Nav>
        <ul>
          <li>
            <a onClick={() => window.open("https://app.bestlead.com.br/", "_blank")} >Login</a>
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
}
