import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from "../../ui/dialog";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import useDeleteInterestRate from "../../../api/admin/interest/delete-interest.api";
import { Spinner } from "../../ui/spinner";
import { useQueryClient } from "@tanstack/react-query";

function DeleteInterestRate({
  children,
  userData,
}: {
  children: React.ReactNode;
  userData: any;
}) {
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useDeleteInterestRate(userData?.id);
  const onSubmit = async () => {
    try {
      const response = await mutateAsync();
      if (response.status === 200) {
        queryClient.invalidateQueries({
          queryKey: ["GET_ALL_INTEREST"],
        });

        setShowModal(false);

        // setShowModal(false);
        // reset();
      } else {
        // toast.error(response.data);
      }
    } catch (error: any) {
      // toast.error("Customer Interest Failed");
    }
  };

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Delete Interest</DialogTitle>
        </DialogHeader>
        <Separator />

        <p className="text-sm">
          Are you sure you want to delete this Interest?
        </p>

        <DialogFooter>
          <div className="flex items-center gap-4 mt-5">
            <Button
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md"
              onClick={() => setShowModal(false)}
            >
              <p className="text-sm font-semibold">No</p>
              <i className="ri-close-line text-xl"></i>
            </Button>
            <Button
              //   className="flex items-center gap-2 border border-red-500 px-4 py-2 rounded-md"
              variant={"destructive"}
              disabled={isPending}
              onClick={() => onSubmit()}
            >
              <p className="text-sm font-semibold">
                {isPending ? (
                  <Spinner size="medium" className="text-white" />
                ) : (
                  "Yes"
                )}
              </p>
              <i className="ri-check-line text-xl"></i>
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteInterestRate;
