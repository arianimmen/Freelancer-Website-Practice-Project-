import { Field, Label, Switch } from "@headlessui/react";

function Toggle({ label, enabled, toggleHandler }) {
  return (
    <Field className="flex gap-x-4">
      <Label>{label}</Label>
      <Switch
        checked={enabled}
        onChange={toggleHandler}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-secondary-300 transition data-[checked]:bg-primary-900"
      >
        <span className="size-4 -translate-x-1 rounded-full bg-secondary-100 transition group-data-[checked]:-translate-x-6" />
      </Switch>
    </Field>
  );
}

export default Toggle;
