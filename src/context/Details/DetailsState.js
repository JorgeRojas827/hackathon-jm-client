import { DetailsProvider } from "./DetailsContext";

export const DetailsState = ({ children }) => {
    return (
      <DetailsProvider>
        { children }
      </DetailsProvider>
    );
  };