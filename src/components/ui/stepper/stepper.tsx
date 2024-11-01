/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export const Stepper: any = React.forwardRef<any, any>(
  ({ children, active, ...props }, ref) => {
    const convertedChildren = React.Children.toArray(
      children
    ) as React.ReactElement[];

    const _children = convertedChildren.filter(
      (child) => child.type !== StepCompleted
    );
    const completedStep = convertedChildren.find(
      (item) => item.type === StepCompleted
    );

    const stepContent = _children[active]?.props.children;
    const completedContent = completedStep?.props.children;

    const content =
      active > _children.length - 1 ? completedContent : stepContent;

    return (
      <div ref={ref} key={active} {...props}>
        {content || null}
      </div>
    );
  }
);

Stepper.displayName = "Stepper";
Stepper.Completed = StepCompleted;
Stepper.Step = Step;

function StepCompleted() {
  return null;
}

function Step() {
  return null;
}
