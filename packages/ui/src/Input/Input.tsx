"use client";

import React, { forwardRef, useId, useState } from "react";
import type { InputProps } from "./InputTypes";
import { InputStyles } from "./InputStyles";
import { cn } from "@repo/utils";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      labelPlacement = "outside",
      placeholder,
      description,
      errorMessage,
      startContent,
      endContent,
      isClearable,
      onClear,
      fullWidth,
      isRequired,
      isInvalid,
      variant,
      color,
      size,
      radius,
      isDisabled,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      id: idProp,
      ...rest
    },
    ref
  ) => {
    const reactId = useId();
    const inputId = idProp ?? reactId;
    const [internalValue, setInternalValue] = useState(
      defaultValue || value || ""
    );
    const [isFocused, setIsFocused] = useState(false);

    // Simple controlled/uncontrolled handling for clear button visibility
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const hasValue = !!currentValue && currentValue !== "";

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue("");
      }
      if (onClear) {
        onClear();
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(event);
    };

    const labelContent = label ? (
      <label
        htmlFor={inputId}
        className={cn(
          InputStyles.label({
            color: "default",
            required: isRequired,
          })
        )}
      >
        {label}
      </label>
    ) : null;

    return (
      <div
        className={cn(InputStyles.base({ fullWidth }), className)}
        data-invalid={isInvalid}
        data-focus={isFocused}
      >
        {labelPlacement === "outside" || labelPlacement === "outside-left"
          ? labelContent
          : null}

        <div
          className={cn(
            InputStyles.inputWrapper({
              variant,
              color,
              size,
              radius,
              isInvalid,
              isDisabled,
            }),
            "group-data-[focus=true]:border-primary" // Example
          )}
        >
          {startContent}
          <div className="relative w-full h-full flex items-center">
            {labelPlacement === "inside" && label && (
              <label
                htmlFor={inputId}
                className="absolute top-1 left-0 text-[10px] text-zinc-500"
              >
                {label}
              </label>
            )}
            <input
              autoComplete="off"
              ref={ref}
              id={inputId}
              type={type}
              className={cn(
                InputStyles.input({ size: 'md' }),
                labelPlacement === "inside" ? "pt-4" : ""
              )}
              placeholder={placeholder}
              disabled={!!isDisabled}
              required={isRequired}
              aria-invalid={isInvalid}
              aria-required={isRequired}
              value={currentValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              data-has-start-content={!!startContent}
              data-has-end-content={!!endContent}
              {...rest}
            />
          </div>
          {isClearable && hasValue && !isDisabled && (
            <button
              type="button"
              onClick={handleClear}
              className={InputStyles.clearButton()}
              tabIndex={-1}
              aria-label="Clear input"
            >
              <span aria-hidden="true">{"\u00d7"}</span>
            </button>
          )}
          {endContent}
        </div>

        {isInvalid && errorMessage ? (
          <div className={InputStyles.errorMessage()}>{errorMessage}</div>
        ) : description ? (
          <div className={InputStyles.description()}>{description}</div>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
