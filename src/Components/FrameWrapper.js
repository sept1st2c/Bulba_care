import styled from "styled-components";
import { GlobalStyles } from "./global";

const EmergencyinfoframeChild = styled.div`
  width: 1194px;
  height: 226px;
  position: relative;
  border-radius: var(--br-33xl);
  background: linear-gradient(180deg, rgba(217, 217, 217, 0), #59b4c3);
  display: none;
  max-width: 100%;
`;
const RegisterYourselfAs = styled.p`
  margin: 0;
`;
const RegisterYourselfAsContainer = styled.div`
  height: 96px;
  position: relative;
  font-weight: 500;
  white-space: pre-wrap;
  display: inline-block;
  z-index: 4;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const Caseofemergencytext = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-sm) 0px var(--padding-9xs);
`;
const AnEfficientAndContainer = styled.div`
  height: 72px;
  position: relative;
  font-weight: 500;
  color: var(--color-gray-200);
  text-align: center;
  display: inline-block;
  z-index: 4;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const Emergencyinfoframe = styled.div`
  border-radius: var(--br-33xl);
  background: linear-gradient(180deg, rgba(217, 217, 217, 0), #59b4c3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-38xl) var(--padding-9xl)
    var(--padding-22xl);
  box-sizing: border-box;
  gap: var(--gap-7xs);
  max-width: 100%;
  z-index: 3;
  @media screen and (max-width: 1200px) {
    padding-right: var(--padding-9xl);
    box-sizing: border-box;
  }
`;
const FramewrapperRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-37xl) 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  font-family: var(--font-montserrat);
  @media screen and (max-width: 1200px) {
    padding-right: var(--padding-9xl);
    box-sizing: border-box;
  }
`;

const Framewrapper = () => {
  return (
    <FramewrapperRoot>
      <GlobalStyles />
      <Emergencyinfoframe>
        <EmergencyinfoframeChild />
        <Caseofemergencytext>
          <RegisterYourselfAsContainer>
            <RegisterYourselfAs>{`Register yourself as a stakeholder for your hospital, infirmary ,first aid posts, clinic, Field Hospital,  `}</RegisterYourselfAs>
            <RegisterYourselfAs>
              Ambulance Bay, Emergency Response Center. This in turn will help
              us out with a fluent workflow and more availability of resources
              for those in real need!
            </RegisterYourselfAs>
            <RegisterYourselfAs>{` `}</RegisterYourselfAs>
          </RegisterYourselfAsContainer>
        </Caseofemergencytext>
        <AnEfficientAndContainer>
          <RegisterYourselfAs>{`"An efficient and seamless workflow not only optimizes resource availability but becomes a lifeline for those `}</RegisterYourselfAs>
          <RegisterYourselfAs>
            in real need, ensuring that every moment counts in the pursuit of
            timely and effective care."
          </RegisterYourselfAs>
        </AnEfficientAndContainer>
      </Emergencyinfoframe>
    </FramewrapperRoot>
  );
};
export default Framewrapper;
