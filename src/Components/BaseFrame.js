import styled from "styled-components";
import { GlobalStyles } from "./global";

const Clock1Icon = styled.img`
  height: 29px;
  width: 31px;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const Div = styled.div`
  position: relative;
  font-weight: 500;
  z-index: 1;
`;
const FindText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const Telephone1Icon = styled.img`
  height: 28px;
  width: 30px;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const AboutUsText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-2xs);
  color: #ff0000;
`;
const EmergencyFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const SpacerFrame = styled.div`
  width: 358px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-8xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const RegistrationFrameChild = styled.div`
  height: 70px;
  width: 200px;
  position: relative;
  border-radius: var(--br-6xl);
  background-color: var(--color-midnightblue);
  display: none;
`;
const AboutUs = styled.div`
  height: 29px;
  position: relative;
  font-size: var(--font-size-5xl);
  font-weight: 500;
  font-family: var(--font-montserrat);
  color: var(--color-silver-200);
  text-align: left;
  display: inline-block;
  white-space: nowrap;
  z-index: 2;
`;
const RegistrationFrame = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-2xl) var(--padding-17xl) var(--padding-xl)
    var(--padding-16xl);
  background-color: var(--color-midnightblue);
  border-radius: var(--br-6xl);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  z-index: 1;
  &:hover {
    background-color: var(--color-darkslateblue);
  }
`;
const ClockRectangle = styled.div`
  width: 662px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
`;
const ClockRectangleWrapper = styled.div`
  width: 958px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const RectangleContainerChild = styled.div`
  height: 103px;
  width: 1497px;
  position: relative;
  background-color: var(--color-midnightblue);
  display: none;
  max-width: 100%;
`;
const Emergency = styled.div`
  height: 29px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Uploadbutton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-smi) 0px 0px;
`;
const Register = styled.div`
  height: 29px;
  position: relative;
  font-weight: 500;
  color: var(--color-darkgray-300);
  display: inline-block;
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const UploadXRay = styled.div`
  height: 29px;
  position: relative;
  font-weight: 500;
  color: var(--color-darkgray-200);
  display: inline-block;
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Registerframe = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-32xl);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    gap: var(--gap-32xl);
  }
`;
const Emergencyframe = styled.div`
  width: 575px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-9xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const User1Icon = styled.img`
  height: 71px;
  width: 71px;
  position: relative;
  object-fit: cover;
  z-index: 2;
`;
const Aboutusframe = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-4xl);
  color: var(--color-silver-100);
`;
const RectangleContainer = styled.div`
  flex: 1;
  background-color: var(--color-midnightblue);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-lg) var(--padding-101xl) var(--padding-sm)
    var(--padding-75xl);
  box-sizing: border-box;
  gap: var(--gap-xl);
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-28xl);
    padding-right: var(--padding-41xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    padding-left: var(--padding-4xl);
    padding-right: var(--padding-11xl);
    box-sizing: border-box;
  }
`;
const RegisterandUpload = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const Emergencycontainer = styled.div`
  align-self: stretch;
  height: -43px;
  position: relative;
  background-color: var(--color-white);
`;
const EmergencyInstructions = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 103px;
  max-width: 100%;
  font-size: var(--font-size-5xl);
  color: var(--color-darkgray-100);
`;
const FrameParent = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-26xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-darkslategray-200);
  font-family: var(--font-montserrat);
  @media screen and (max-width: 750px) {
    gap: var(--gap-26xl);
  }
`;
const FindhelptextChild = styled.div`
  height: 146px;
  width: 602px;
  position: relative;
  border-radius: var(--br-31xl);
  background: linear-gradient(180deg, #74e291, rgba(255, 255, 255, 0));
  display: none;
  max-width: 100%;
`;
const InCaseOf = styled.span`
  font-weight: 500;
  font-family: var(--font-montserrat);
  color: var(--color-darkslategray-200);
`;
const Emergency1 = styled.b`
  font-family: var(--font-montserrat);
  color: var(--color-red);
`;
const HealthCareNeed = styled.span`
  font-weight: 500;
`;
const InCaseOfAnyEmergencyHealt = styled.p`
  margin: 0;
`;
const WeSuggestYou = styled.p`
  margin: 0;
  font-weight: 500;
`;
const InCaseOfContainer = styled.div`
  align-self: stretch;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Findhelptext = styled.div`
  flex: 1;
  border-radius: var(--br-31xl);
  background: linear-gradient(180deg, #74e291, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xl) var(--padding-12xl) var(--padding-10xl)
    var(--padding-19xl);
  box-sizing: border-box;
  max-width: 100%;
  z-index: 1;
`;
const PngplaceholderframeChild = styled.div`
  height: 88px;
  width: 548px;
  position: relative;
  border-radius: var(--br-13xl);
  background-color: var(--color-khaki-100);
  box-shadow: 5px 4px 11.8px rgba(0, 0, 0, 0.25);
  display: none;
  max-width: 100%;
`;
const Find1 = styled.div`
  height: 59px;
  width: 126px;
  position: relative;
  font-size: var(--font-size-29xl);
  font-weight: 900;
  font-family: var(--font-montserrat);
  color: var(--color-darkslategray-100);
  text-align: left;
  display: inline-block;
  text-shadow: 8px 8px 60.2px rgba(0, 0, 0, 0.25);
  z-index: 3;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-19xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const Pngplaceholderframe1 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-mini) var(--padding-sm) var(--padding-sm);
  background-color: var(--color-khaki-100);
  flex: 1;
  border-radius: var(--br-13xl);
  box-shadow: 5px 4px 11.8px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  max-width: 100%;
  z-index: 2;
  &:hover {
    background-color: var(--color-khaki-200);
  }
`;
const Workflowoptimization = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-15xl) 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const Healthemergencyframe = styled.div`
  align-self: stretch;
  width: 602px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-16xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-16xl);
  }
`;
const Mainframe = styled.div`
  width: 768px;
  height: 269px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const BertholdBlock = styled.div`
  width: 1529px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-110xl);
  max-width: 103%;
  flex-shrink: 0;
  @media screen and (max-width: 1200px) {
    gap: var(--gap-110xl);
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-110xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-110xl);
  }
`;
const BertholdBlockWrapper = styled.div`
  width: 1480px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  max-width: 103%;
  flex-shrink: 0;
`;
const BaseFrameRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  min-height: 669px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-darkslategray-200);
  font-family: var(--font-montserrat);
`;

const BaseFrame = () => {
  return (
    <BaseFrameRoot>
      <GlobalStyles />
      <BertholdBlockWrapper>
        <BertholdBlock>
          <FrameParent>
            <ClockRectangleWrapper>
              <ClockRectangle>
                <SpacerFrame>
                  <EmergencyFrame>
                    <FindText>
                      <Clock1Icon
                        loading="eager"
                        alt=""
                        src="../../images/clock.png"
                      />
                      <Div>24/7</Div>
                    </FindText>
                    <AboutUsText>
                      <Telephone1Icon
                        loading="eager"
                        alt=""
                        src="../../images/telephone.png"
                      />
                      <Div>999-999-9999</Div>
                    </AboutUsText>
                  </EmergencyFrame>
                </SpacerFrame>
                <RegistrationFrame>
                  <RegistrationFrameChild />
                  <AboutUs>ABOUT US</AboutUs>
                </RegistrationFrame>
              </ClockRectangle>
            </ClockRectangleWrapper>
            <EmergencyInstructions>
              <RegisterandUpload>
                <RectangleContainer>
                  <RectangleContainerChild />
                  <Emergencyframe>
                    <Registerframe>
                      <Uploadbutton>
                        <Emergency>EMERGENCY</Emergency>
                      </Uploadbutton>
                      <Register>REGISTER</Register>
                      <UploadXRay>UPLOAD X RAY</UploadXRay>
                    </Registerframe>
                  </Emergencyframe>
                  <Aboutusframe>
                    <Emergency>PROFILE</Emergency>
                    <User1Icon
                      loading="eager"
                      alt=""
                      src="../../images/user.png"
                    />
                  </Aboutusframe>
                </RectangleContainer>
              </RegisterandUpload>
              <Emergencycontainer />
            </EmergencyInstructions>
          </FrameParent>
          <Mainframe>
            <Healthemergencyframe>
              <Findhelptext>
                <FindhelptextChild />
                <InCaseOfContainer>
                  <InCaseOfAnyEmergencyHealt>
                    <InCaseOf>{`In case of any `}</InCaseOf>
                    <Emergency1>Emergency</Emergency1>
                    <HealthCareNeed> health care need,</HealthCareNeed>
                  </InCaseOfAnyEmergencyHealt>
                  <WeSuggestYou>{`we suggest you to search nearby hospitals `}</WeSuggestYou>
                  <WeSuggestYou>and ambulances right now</WeSuggestYou>
                </InCaseOfContainer>
              </Findhelptext>
              <Workflowoptimization>
                <Pngplaceholderframe1>
                  <PngplaceholderframeChild />
                  <Find1>FIND</Find1>
                </Pngplaceholderframe1>
              </Workflowoptimization>
            </Healthemergencyframe>
          </Mainframe>
        </BertholdBlock>
      </BertholdBlockWrapper>
    </BaseFrameRoot>
  );
};

export default BaseFrame;
