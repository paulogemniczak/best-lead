import * as S from "./style";


const Plan = ({
  index,
  planName,
  planIntegerPrice,
  planDecimalPrice,
  planTime,
  planBenefits,
}) => {
  function IsCustomPlan() {
    if (planIntegerPrice != "") {
      return (
        <>
          <S.Price>
            <S.Currency>R$</S.Currency>
            <S.Integer>{planIntegerPrice}</S.Integer>
            <S.Decimal>{planDecimalPrice}</S.Decimal>
            <S.Time>{planTime}</S.Time>
          </S.Price>
        </>
      );
    } else {
      return (
        <S.Price className="d-flex justify-content-center align-items-center">
          <h3 className="on-demand">Sob demanda</h3>
        </S.Price>
      );
    }
  }

  function eventClick(index) {
    if (index == 0) {
      window.open("https://bestleadwebapp.azurewebsites.net/", "_blank")
    } else {
      window.open("https://api.whatsapp.com/send?phone=5541992238152", "_blank");
    }
  }

  return (
    <S.Plan onClick={() => eventClick(index)} >
      <S.PlanName>{planName}</S.PlanName>
        <IsCustomPlan />
      <S.Benefits>
        {planBenefits.map((b, index) => (
          <li key={index}>{b}</li>
        ))}
      </S.Benefits>
    </S.Plan>
  );
};

export default Plan;
