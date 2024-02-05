import styled from "styled-components";
import BaseFrame from "../Components/BaseFrame";
import Framewrapper from "../Components/FrameWrapper";

const Desktop1Child = styled.div`
  align-self: stretch;
  height: 861px;
  position: relative;
  background: linear-gradient(180deg, #211c6a, #59b4c3);
  display: none;
  z-index: 0;
`;
const Desktop1Item = styled.div`
  width: 1555px;
  height: 646px;
  position: relative;
  background: linear-gradient(180deg, rgba(116, 226, 145, 0), #74e291);
  display: none;
  max-width: 100%;
  z-index: 3;
`;
const BertholdBlock1RemovebgPrIcon = styled.img`
  width: 100%;
  height: 100%;
  z-index: 2;
  object-fit: contain;
  position: absolute;
  left: 3px;
  top: 6px;
  transform: scale(1.363);
`;
const WrapperBertholdBlock1Rem = styled.div`
  width: 423px;
  height: 179px;
  position: absolute;
  margin: 0 !important;
  top: 1px;
  left: -77px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Pngegg = styled.img`
  position: absolute;
  top: 0px;
  left: 301px;
  width: 1216px;
  height: 710px;
  object-fit: cover;
`;
const Pngegg1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;
`;
const Topmapstipsrectangle = styled.div`
  position: absolute;
  top: 420px;
  left: 217px;
  border-radius: var(--br-13xl);
  background-color: #74e291;
  width: 482px;
  height: 86px;
  z-index: 3;
`;
const RegisterframeChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-13xl);
  background-color: var(--color-khaki-100);
  width: 100%;
  height: 100%;
  display: none;
`;
const Register = styled.div`
  position: absolute;
  top: 13px;
  left: 112px;
  font-size: var(--font-size-29xl);
  font-weight: 900;
  font-family: var(--font-montserrat);
  color: var(--color-darkslategray-300);
  text-align: left;
  z-index: 5;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-19xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const Registerframe1 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: var(--color-khaki-100);
  position: absolute;
  top: 440px;
  left: 217px;
  border-radius: var(--br-13xl);
  width: 482px;
  height: 86px;
  z-index: 4;
  &:hover {
    background-color: var(--color-khaki-200);
  }
`;
const Pngegg2 = styled.img`
  width: 100%;
  height: 100%;
  z-index: 3;
  object-fit: contain;
  position: absolute;
  left: 4px;
  top: 5px;
  transform: scale(1.108);
`;
const WrapperPngegg = styled.div`
  position: absolute;
  top: 314px;
  left: 736px;
  width: 154px;
  height: 157px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Registerandupload1 = styled.section`
  position: absolute;
  top: 1125px;
  left: 250px;
  width: 916px;
  height: 829px;
  background-image: url("/registerandupload@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 2;
`;
const Emergencyinforectangle1 = styled.section`
  position: absolute;
  top: 693px;
  left: 4px;
  background-color: var(--color-khaki-100);
  width: 1491px;
  height: 249px;
  z-index: 1;
`;
const Top20GoogleMapsHacksTips = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-34xl);
  background-color: var(--color-gray-100);
  width: 100%;
  height: 100%;
  display: none;
`;
const Top20GoogleMapsHacksTips1 = styled.div`
  position: absolute;
  top: 3px;
  left: 4px;
  border-radius: var(--br-34xl);
  background-color: #c4c4c4;
  width: 100%;
  height: 100%;
`;
const Top20GoogleMapsHacksTips2 = styled.img`
  position: absolute;
  width: calc(100% - 22px);
  top: 8px;
  right: 13px;
  left: 9px;
  border-radius: var(--br-34xl);
  max-width: 100%;
  overflow: hidden;
  height: 482px;
  object-fit: cover;
  z-index: 5;
`;
const Maphacksframes1 = styled.section`
  position: absolute;
  top: 551px;
  left: 232px;
  border-radius: var(--br-34xl);
  background-color: var(--color-gray-100);
  width: 946px;
  height: 508px;
  z-index: 3;
`;
const Userinterfacerectangle = styled.div`
  position: absolute;
  top: 320px;
  left: 87px;
  border-radius: var(--br-13xl);
  background-color: #59b4c3;
  box-shadow: 5px 4px 11.8px rgba(0, 0, 0, 0.25);
  width: 548px;
  height: 88px;
  z-index: 1;
`;
const Hospitalbackgroundrectangle = styled.div`
  position: absolute;
  top: 2385px;
  left: 757px;
  border-radius: var(--br-13xl);
  background-color: var(--color-midnightblue);
  width: 482px;
  height: 86px;
  z-index: 1;
`;
const Pngegg3 = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: contain;
  position: absolute;
  left: 4px;
  top: 5px;
  transform: scale(1.108);
`;
const WrapperPngegg1 = styled.div`
  position: absolute;
  top: 147px;
  left: 1226px;
  width: 154px;
  height: 157px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Pngegg4 = styled.img`
  width: 100%;
  height: 100%;
  z-index: 2;
  object-fit: contain;
  position: absolute;
  left: 4px;
  top: 5px;
  transform: scale(1.108);
`;
const WrapperPngegg2 = styled.div`
  position: absolute;
  top: 10px;
  left: 629px;
  width: 154px;
  height: 157px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Pngegg5 = styled.img`
  width: 100%;
  height: 100%;
  z-index: 4;
  object-fit: contain;
  position: absolute;
  left: 4px;
  top: 5px;
  transform: scale(1.108);
`;
const WrapperPngegg3 = styled.div`
  position: absolute;
  top: 1030px;
  left: 1208px;
  width: 154px;
  height: 157px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WrapperPngegg4 = styled.div`
  position: absolute;
  top: 1416px;
  left: 73px;
  width: 154px;
  height: 157px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WrapperPngegg5 = styled.div`
  position: absolute;
  top: 1891px;
  left: 1092px;
  width: 154px;
  height: 157px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Pngegg6 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: none;
`;
const WrapperPngegg6 = styled.div`
  position: absolute;
  top: 101px;
  left: 173px;
  width: 154px;
  height: 157px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WrapperPngegg7 = styled.div`
  position: absolute;
  top: 548px;
  left: 467px;
  width: 154px;
  height: 157px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Registrationanduploadframe = styled.div`
  position: absolute;
  top: 1841px;
  left: 0px;
  width: 908px;
  height: 911px;
  background-image: url("/registrationanduploadframe@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const Pngegg7 = styled.img`
  width: 100%;
  height: 100%;
  z-index: 6;
  object-fit: contain;
  position: absolute;
  left: 4px;
  top: 5px;
  transform: scale(1.108);
`;
const WrapperPngegg8 = styled.div`
  position: absolute;
  top: 503px;
  left: 155px;
  width: 154px;
  height: 157px;
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Emergencyframe1 = styled.main`
  width: 1517px;
  height: 2752px;
  position: absolute;
  margin: 0 !important;
  right: -73px;
  bottom: -127px;
`;
const EmergencyhelpframeChild = styled.div`
  height: 198px;
  width: 828px;
  position: relative;
  border-radius: var(--br-14xl);
  background: linear-gradient(180deg, #eff396, rgba(255, 255, 255, 0));
  display: none;
  max-width: 100%;
`;
const AnalyzeXRays = styled.p`
  margin: 0;
`;
const AnalyzeXRaysContainer = styled.div`
  height: 87px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Emergencyhelpframe = styled.div`
  flex: 1;
  border-radius: var(--br-14xl);
  background: linear-gradient(180deg, #eff396, rgba(255, 255, 255, 0));
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-29xl) 72px var(--padding-29xl) 43px;
  box-sizing: border-box;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    padding-left: var(--padding-2xl);
    padding-right: var(--padding-17xl);
    box-sizing: border-box;
  }
`;
const UploadButtonChild = styled.div`
  height: 86px;
  width: 482px;
  position: relative;
  border-radius: var(--br-13xl);
  background-color: var(--color-khaki-100);
  display: none;
  max-width: 100%;
`;
const Upload = styled.div`
  height: 59px;
  position: relative;
  font-size: var(--font-size-29xl);
  font-weight: 900;
  font-family: var(--font-montserrat);
  color: var(--color-darkslategray-300);
  text-align: left;
  display: inline-block;
  z-index: 3;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-19xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const UploadButton = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-smi) var(--padding-2xl) var(--padding-sm)
    var(--padding-xl);
  background-color: var(--color-khaki-100);
  flex: 1;
  border-radius: var(--br-13xl);
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
const Registeruploadxrayframe = styled.div`
  width: 528px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 26px 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const Profiletextframe = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-89xl);
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    gap: var(--gap-89xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-89xl);
  }
`;
const Aboutusframe = styled.div`
  height: 392px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-mini);
  box-sizing: border-box;
  max-width: 100%;
`;
const DesktopRoot = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(
    180deg,
    #59b4c3,
    #1e453a 52.1%,
    #74e291 99.99%,
    rgba(89, 180, 195, 0)
  );
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 37px 0px 134px;
  box-sizing: border-box;
  gap: var(--gap-677xl);
  letter-spacing: normal;
  text-align: right;
  font-size: var(--font-size-5xl);
  color: #5a5a5a;
  font-family: var(--font-montserrat);
  @media screen and (max-width: 750px) {
    gap: var(--gap-677xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-677xl);
  }
`;

const Desktop = () => {
  return (
    <DesktopRoot>
      <Desktop1Child />
      <Desktop1Item />
      <WrapperBertholdBlock1Rem>
        <BertholdBlock1RemovebgPrIcon
          loading="eager"
          alt=""
          src="../../images/Berthold_Block__1_-removebg-preview.png"
        />
      </WrapperBertholdBlock1Rem>
      <BaseFrame />
      <Framewrapper />
      <Emergencyframe1>
        <Pngegg alt="" src="../../images/pngegg_3.png" />
        <Registerandupload1>
          <Pngegg1 alt="" src="../../images/pngegg (4).png" />
          <Topmapstipsrectangle />
          <Registerframe1>
            <RegisterframeChild />
            <Register>REGISTER</Register>
          </Registerframe1>
          <WrapperPngegg>
            <Pngegg2 loading="eager" alt="" src="/pngegg-6-6@2x.png" />
          </WrapperPngegg>
        </Registerandupload1>
        <Emergencyinforectangle1 />
        <Maphacksframes1>
          <Top20GoogleMapsHacksTips />
          <Top20GoogleMapsHacksTips1 />
          <Top20GoogleMapsHacksTips2
            alt=""
            src="/top-20-google-maps-hacks-tips-and-tricks-1@2x.png"
          />
        </Maphacksframes1>
        <Userinterfacerectangle />
        <Hospitalbackgroundrectangle />
        <WrapperPngegg1>
          <Pngegg3 loading="eager" alt="" src="/pngegg-6-1@2x.png" />
        </WrapperPngegg1>
        <WrapperPngegg2>
          <Pngegg4 loading="eager" alt="" src="/pngegg-6-9@2x.png" />
        </WrapperPngegg2>
        <WrapperPngegg3>
          <Pngegg5 loading="eager" alt="" src="/pngegg-6-3@2x.png" />
        </WrapperPngegg3>
        <WrapperPngegg4>
          <Pngegg4 loading="eager" alt="" src="/pngegg-6-4@2x.png" />
        </WrapperPngegg4>
        <WrapperPngegg5>
          <Pngegg2 loading="eager" alt="" src="/pngegg-6-5@2x.png" />
        </WrapperPngegg5>
        <Registrationanduploadframe>
          <Pngegg6 alt="" src="/pngegg-5-1@2x.png" />
          <WrapperPngegg6>
            <Pngegg2 loading="eager" alt="" src="/pngegg-6-7@2x.png" />
          </WrapperPngegg6>
          <WrapperPngegg7>
            <Pngegg3 loading="eager" alt="" src="/pngegg-6-8@2x.png" />
          </WrapperPngegg7>
        </Registrationanduploadframe>
        <WrapperPngegg8>
          <Pngegg7 alt="" src="/pngegg-6-2@2x.png" />
        </WrapperPngegg8>
      </Emergencyframe1>
      <Aboutusframe>
        <Profiletextframe>
          <Emergencyhelpframe>
            <EmergencyhelpframeChild />
            <AnalyzeXRaysContainer>
              <AnalyzeXRays>{`Analyze x rays report and `}</AnalyzeXRays>
              <AnalyzeXRays>{`will show you your broken bones condition instantly while `}</AnalyzeXRays>
              <AnalyzeXRays>you wait for the actual reports</AnalyzeXRays>
            </AnalyzeXRaysContainer>
          </Emergencyhelpframe>
          <Registeruploadxrayframe>
            <UploadButton>
              <UploadButtonChild />
              <Upload>UPLOAD</Upload>
            </UploadButton>
          </Registeruploadxrayframe>
        </Profiletextframe>
      </Aboutusframe>
    </DesktopRoot>
  );
};

export default Desktop;
