"use client";

import { Create } from "@/components/create";
import {
  ExploreImagesFilter,
  ExploreImagesSubFilter,
  MyImagesFilter,
  MyImagesSubFilter,
} from "@/components/image-filters";
import { Modal } from "@/components/modal";
import { Photo } from "@/components/photo";
import { useApp } from "@/components/providers";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { motion } from "framer-motion";
import { SearchIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const ids = Array.from({ length: 400 }).map((_, i) => i);

export default function Home() {
  const searchParams = useSearchParams();

  const photoId = searchParams.get("photoId");

  const {
    setOpenCreate,
    imagePlace,
    setImagePlace,
    myImagesFilter,
    myImagesSubFilter,
    exploreImagesFilter,
    exploreImagesSubFilter,
    setMyImagesFilter,
    setExploreImagesFilter,
    setExploreImagesSubFilter,
    setMyImagesSubFilter,
    lastViewedPhotoId,
    setLastViewedPhotoId,
  } = useApp();

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (lastViewedPhotoId && photoId) {
      lastViewedPhotoRef?.current?.scrollIntoView({ block: "center" });
    }
  }, [photoId, lastViewedPhotoId, setLastViewedPhotoId]);

  return (
    <main className="mt-6 sm:mt-10 w-full mx-auto max-w-6xl px-2 sm:px-10 lg:px-0">
      <div className="w-full">
        {/* Start creating component */}
        <motion.div
          className="mb-8"
          onViewportLeave={() => setOpenCreate(true)}
          onViewportEnter={() => setOpenCreate(false)}
          viewport={{ margin: "-64px" }}
        >
          <Create />
        </motion.div>

        {/* Sticky filters */}
        <div className="w-full bg-background z-10 sticky top-16 my-3">
          <div className="flex bg-background pb-2">
            <div className="flex items-center space-x-2">
              <ToggleGroup
                defaultValue="explore"
                type="single"
                onValueChange={setImagePlace}
              >
                <ToggleGroupItem value="explore">Explore</ToggleGroupItem>
                <ToggleGroupItem
                  value="my_images"
                  className="whitespace-nowrap"
                >
                  My images
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="hidden lg:flex items-center mx-2 py-1">
              <Separator orientation="vertical" />
            </div>

            <div className="hidden lg:flex items-center flex-1  space-x-1 overflow-x-scroll no-scrollbar">
              {imagePlace === "explore" ? (
                <ExploreImagesFilter
                  value={exploreImagesFilter}
                  onValueChange={setExploreImagesFilter}
                />
              ) : (
                <MyImagesFilter
                  value={myImagesFilter}
                  onValueChange={setMyImagesFilter}
                />
              )}
            </div>

            <div className="flex items-center flex-1 lg:flex-none justify-end space-x-2">
              <div>
                {imagePlace === "explore" ? (
                  <ExploreImagesSubFilter
                    value={exploreImagesSubFilter}
                    onValueChange={setExploreImagesSubFilter}
                  />
                ) : (
                  <MyImagesSubFilter
                    value={myImagesSubFilter}
                    onValueChange={setMyImagesSubFilter}
                  />
                )}
              </div>
              <div>
                <SearchIcon className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <Separator className="lg:hidden my-2" />

            <div className="lg:hidden bg-background pb-2 flex items-center space-x-1 overflow-x-scroll no-scrollbar">
              {imagePlace === "explore" ? (
                <ExploreImagesFilter
                  value={exploreImagesFilter}
                  onValueChange={setExploreImagesFilter}
                />
              ) : (
                <MyImagesFilter
                  value={myImagesFilter}
                  onValueChange={setMyImagesFilter}
                />
              )}
            </div>
          </div>
        </div>

        {photoId && (
          <Modal
            open={!!lastViewedPhotoId}
            onClose={() => setLastViewedPhotoId(photoId)}
            id={photoId}
          />
        )}

        {/* Image grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {ids.map((id) => (
            <a
              key={id}
              className="after:content group relative block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:hover:bg-muted-foreground"
              onClick={() => {
                window.history.pushState(null, "", `?photoId=${id}`);
                setLastViewedPhotoId(id.toString());
              }}
              ref={id === Number(lastViewedPhotoId) ? lastViewedPhotoRef : null}
            >
              <Photo />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
