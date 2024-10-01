import {
  Bot,
  Box,
  Eye,
  EyeOff,
  GalleryHorizontalEnd,
  Grip,
  Origami,
  Pin,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export type ImagePlaceType = "explore" | "my_images";

export type ExploreImagesFilterValueType =
  | "all"
  | "realistic"
  | "design"
  | "3d"
  | "anime";

export interface ExploreImagesFilterProps {
  value: ExploreImagesFilterValueType;
  onValueChange: (value: ExploreImagesFilterValueType) => void;
}

export function ExploreImagesFilter({
  value,
  onValueChange,
}: ExploreImagesFilterProps) {
  return (
    <ToggleGroup
      value={value}
      onValueChange={onValueChange}
      defaultValue="all"
      type="single"
    >
      <ToggleGroupItem value="all">
        <Grip className="mr-2 h-4 w-4" /> All
      </ToggleGroupItem>
      <ToggleGroupItem value="realistic">
        <GalleryHorizontalEnd className="mr-2 h-4 w-4" /> Realistic
      </ToggleGroupItem>
      <ToggleGroupItem value="design">
        <Origami className="mr-2 h-4 w-4" /> Design
      </ToggleGroupItem>
      <ToggleGroupItem value="3d">
        <Box className="mr-2 h-4 w-4" /> 3D
      </ToggleGroupItem>
      <ToggleGroupItem value="anime">
        <Bot className="mr-2 h-4 w-4" /> Anime
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export type MyImagesFilterValueType = "all" | "pinned" | "public" | "private";

export interface MymagesFilterProps {
  value: MyImagesFilterValueType;
  onValueChange: (value: MyImagesFilterValueType) => void;
}

export function MyImagesFilter({ value, onValueChange }: MymagesFilterProps) {
  return (
    <ToggleGroup
      value={value}
      onValueChange={onValueChange}
      defaultValue="all"
      type="single"
    >
      <ToggleGroupItem value="all">
        <Grip className="mr-2 h-4 w-4" /> All
      </ToggleGroupItem>
      <ToggleGroupItem value="pinned">
        <Pin className="mr-2 h-4 w-4" /> Pinned
      </ToggleGroupItem>
      <ToggleGroupItem value="public">
        <Eye className="mr-2 h-4 w-4" /> Public
      </ToggleGroupItem>
      <ToggleGroupItem value="private">
        <EyeOff className="mr-2 h-4 w-4" /> Private
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export type ExploreImagesSubFilterValueType =
  | "rising"
  | "hour"
  | "day"
  | "week"
  | "month"
  | "all"
  | "following";

export interface ExploreImagesSubFilterProps {
  value: ExploreImagesSubFilterValueType;
  onValueChange: (value: ExploreImagesSubFilterValueType) => void;
}

export function ExploreImagesSubFilter({
  value,
  onValueChange,
}: ExploreImagesSubFilterProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="min-w-[90px] border-none">
        <SelectValue
          defaultChecked={true}
          defaultValue={value}
          placeholder="Rising"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="rising" className="border-b rounded-none">
            Rising
          </SelectItem>
          <SelectItem value="hour">Top hour</SelectItem>
          <SelectItem value="day">Top day</SelectItem>
          <SelectItem value="week">Top week</SelectItem>
          <SelectItem value="month">Top month</SelectItem>
          <SelectItem value="all">Top all time</SelectItem>
          <SelectItem value="following" className="border-t rounded-none">
            Following
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export type MyImagesSubFilterValueType =
  | "everything"
  | "generations"
  | "edits"
  | "uploads"
  | "upscales";

export interface MyImagesSubFilterProps {
  value: MyImagesSubFilterValueType;
  onValueChange: (value: MyImagesSubFilterValueType) => void;
}

export function MyImagesSubFilter({
  value,
  onValueChange,
}: MyImagesSubFilterProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="min-w-[90px] border-none">
        <SelectValue
          defaultValue={value}
          defaultChecked={true}
          placeholder="Everything"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="everything">Everything</SelectItem>
          <SelectItem value="generations">Generations</SelectItem>
          <SelectItem value="edits">Edits</SelectItem>
          <SelectItem value="uploads">Uploads</SelectItem>
          <SelectItem value="upscales">Upscales</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
