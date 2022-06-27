import useDisplay from "../../../hooks/useDisplay";

function MainContainer(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          width: isSmall ? "100%" : 1200,
          display: "flex",
        }}
      >
        {props.children}
      </div>
    </>
  );
}

export default MainContainer;
