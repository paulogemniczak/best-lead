import * as S from './styles';

const Service = ({
  serviceIconName,
  serviceTitle,
  serviceText,
}) => {
  let SelectedIcon = serviceIconName;

  return (
    <S.Wrapper>
      <SelectedIcon size={32} />
      <S.Title>{serviceTitle}</S.Title>
      <S.Text>{serviceText}</S.Text>
    </S.Wrapper>
  );
};

export default Service;
