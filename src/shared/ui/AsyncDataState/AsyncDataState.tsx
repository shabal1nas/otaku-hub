import type { ReactNode } from "react";
import { PageState } from "@/shared/ui/PageState";
import { Button } from "@/shared/ui/button";

type AsyncDataStateProps = {
  children: ReactNode;
  isPending: boolean;
  isError: boolean;
  isEmpty: boolean;
  onRetry?: () => void;
}

export const AsyncDataState = ({
  isPending,
  isError,
  isEmpty,
  onRetry,
  children,
}: AsyncDataStateProps) => {

  if (isPending) {
    return <PageState variant="loading" size="compact" />;
  };

  if (isError && isEmpty) {
    return (
      <PageState
        variant="error"
        size="compact"
        action={
          onRetry
            ? <Button label="Try again" onClick={onRetry}/>
            : null
        }
      />
    )
  };

  if (isEmpty) {
    return <PageState variant="empty" size="compact" />
  };

  return children;
}
