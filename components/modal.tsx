import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  id: string;
}

export function Modal({ open, onClose, id }: ModalProps) {
  const router = useRouter();

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!open) {
          router.push("/", { scroll: false });
          onClose();
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generated Photo</DialogTitle>
          <DialogDescription>{`This is photo #${id}`}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
