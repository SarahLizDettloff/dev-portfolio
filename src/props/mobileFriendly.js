import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";

function useIsMobile() {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  return isMobile;
}
