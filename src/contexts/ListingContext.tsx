import { createContext, useState, ReactNode } from 'react';

interface IListing {
  city: string;
  date: string;
  time: string;
}

interface IListingContext {
  listings: IListing[];
  addListing: (listing: IListing) => void;
}

interface IListingProps {
  children: ReactNode;
}

export const Context = createContext({} as IListingContext);

export const ListingContext = ({ children }: IListingProps) => {
  const [listings, setListings] = useState<IListing[]>([]);

  const addListing = (listing: IListing) => {
    setListings((prevListings) => [...prevListings, listing]);
  };

  return (
    <Context.Provider value={{ listings, addListing }}>
      {children}
    </Context.Provider>
  );
};