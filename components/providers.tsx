"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { createContext, useContext, useReducer } from "react";
import {
  ExploreImagesFilterValueType,
  ExploreImagesSubFilterValueType,
  ImagePlaceType,
  MyImagesFilterValueType,
  MyImagesSubFilterValueType,
} from "./image-filters";
import { useSearchParams } from "next/navigation";

// This is to avoid TypeScript warning (Next.js specific)
export const ThemeProvider = (props: ThemeProviderProps): React.JSX.Element => {
  return NextThemesProvider(props) as React.JSX.Element;
};

interface AppProviderProps {
  children: React.ReactNode;
}

type AppState = {
  openCreate: boolean;
  imagePlace: ImagePlaceType;
  exploreImagesFilter: ExploreImagesFilterValueType;
  myImagesFilter: MyImagesFilterValueType;
  exploreImagesSubFilter: ExploreImagesSubFilterValueType;
  myImagesSubFilter: MyImagesSubFilterValueType;
  lastViewedPhotoId: string;
  setOpenCreate: (open: boolean) => void;
  setImagePlace: (place: ImagePlaceType) => void;
  setExploreImagesFilter: (filter: ExploreImagesFilterValueType) => void;
  setExploreImagesSubFilter: (filter: ExploreImagesSubFilterValueType) => void;
  setMyImagesFilter: (filter: MyImagesFilterValueType) => void;
  setMyImagesSubFilter: (filter: MyImagesSubFilterValueType) => void;
  setLastViewedPhotoId: (id: string) => void;
};

const initialAppState: AppState = {
  openCreate: false,
  imagePlace: "explore",
  exploreImagesFilter: "all",
  exploreImagesSubFilter: "rising",
  myImagesFilter: "all",
  myImagesSubFilter: "everything",
  lastViewedPhotoId: "",
  setOpenCreate: () => null,
  setImagePlace: () => null,
  setExploreImagesFilter: () => null,
  setExploreImagesSubFilter: () => null,
  setMyImagesFilter: () => null,
  setMyImagesSubFilter: () => null,
  setLastViewedPhotoId: () => null,
};

const AppProviderContext = createContext<AppState>(initialAppState);

type SetOpenCreateAction = {
  type: "SET_OPEN_CREATE";
  open: boolean;
};

type SetImagePlaceAction = {
  type: "SET_IMAGE_PLACE";
  place: ImagePlaceType;
};

type SetExploreImagesFilter = {
  type: "SET_EXPLORE_IMAGES_FILTER";
  filter: ExploreImagesFilterValueType;
};

type SetExploreImagesSubFilter = {
  type: "SET_EXPLORE_IMAGES_SUBFILTER";
  filter: ExploreImagesSubFilterValueType;
};

type SetMyImagesFilter = {
  type: "SET_MY_IMAGES_FILTER";
  filter: MyImagesFilterValueType;
};

type SetMyImagesSubFilter = {
  type: "SET_MY_IMAGES_SUBFILTER";
  filter: MyImagesSubFilterValueType;
};

type SetLatViewedPhotoId = {
  type: "SET_LAST_VIEWED_PHOTO_ID";
  id: string;
};

type AppAction =
  | SetOpenCreateAction
  | SetImagePlaceAction
  | SetExploreImagesFilter
  | SetExploreImagesSubFilter
  | SetMyImagesFilter
  | SetMyImagesSubFilter
  | SetLatViewedPhotoId;

function reducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case "SET_OPEN_CREATE":
      return { ...state, openCreate: action.open };
    case "SET_IMAGE_PLACE":
      return { ...state, imagePlace: action.place };
    case "SET_EXPLORE_IMAGES_FILTER":
      return { ...state, exploreImagesFilter: action.filter };
    case "SET_EXPLORE_IMAGES_SUBFILTER":
      return { ...state, exploreImagesSubFilter: action.filter };
    case "SET_MY_IMAGES_FILTER":
      return { ...state, myImagesFilter: action.filter };
    case "SET_MY_IMAGES_SUBFILTER":
      return { ...state, myImagesSubFilter: action.filter };
    case "SET_LAST_VIEWED_PHOTO_ID":
      return { ...state, lastViewedPhotoId: action.id };
    default:
      return state;
  }
}

export const AppProvider = (props: AppProviderProps) => {
  const searchParams = useSearchParams();

  const photoId = searchParams.get("photoId");

  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialAppState);

  const setOpenCreate = (open: boolean) =>
    dispatch({ type: "SET_OPEN_CREATE", open });

  const setImagePlace = (place: ImagePlaceType) =>
    dispatch({ type: "SET_IMAGE_PLACE", place });

  const setExploreImagesFilter = (filter: ExploreImagesFilterValueType) =>
    dispatch({ type: "SET_EXPLORE_IMAGES_FILTER", filter: filter || "all" });

  const setExploreImagesSubFilter = (filter: ExploreImagesSubFilterValueType) =>
    dispatch({ type: "SET_EXPLORE_IMAGES_SUBFILTER", filter });

  const setMyImagesFilter = (filter: MyImagesFilterValueType) =>
    dispatch({ type: "SET_MY_IMAGES_FILTER", filter: filter || "all" });

  const setMyImagesSubFilter = (filter: MyImagesSubFilterValueType) =>
    dispatch({ type: "SET_MY_IMAGES_SUBFILTER", filter });

  const setLastViewedPhotoId = (id: string) =>
    dispatch({ type: "SET_LAST_VIEWED_PHOTO_ID", id });

  const value: AppState = {
    ...state,
    lastViewedPhotoId: photoId || "",
    setOpenCreate,
    setImagePlace,
    setExploreImagesFilter,
    setExploreImagesSubFilter,
    setMyImagesFilter,
    setMyImagesSubFilter,
    setLastViewedPhotoId,
  };

  return (
    <AppProviderContext.Provider value={value}>
      {children}
    </AppProviderContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppProviderContext);
  if (context === undefined)
    throw new Error("useApp must be used within a AppProvider");

  return context;
};
