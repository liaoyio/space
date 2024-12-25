'use client';

import { SVGProps, useState } from 'react';
import React from 'react';
import { useControllableValue } from 'ahooks';
import { Decimal } from 'decimal.js';
import { useDefaultProps } from '@/hooks/use-default-props';

export function StarOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.997 15.462q1.01 0 1.804-.617q.793-.616 1.16-1.549H9.04q.367.933 1.157 1.55q.79.615 1.8.615M9.89 11.924q.467 0 .789-.326q.322-.327.322-.794t-.327-.789t-.793-.322t-.789.327t-.322.793t.327.789t.793.322m4.231 0q.466 0 .789-.326q.322-.327.322-.794q0-.466-.327-.788q-.327-.323-.793-.323q-.467 0-.789.327t-.322.793t.327.789t.793.322m-5.995-4.83l2.608-3.472q.238-.32.566-.47Q11.627 3 12 3t.701.15t.566.471l2.608 3.471l4.02 1.368q.534.18.822.605q.289.426.289.94q0 .237-.07.471t-.228.449l-2.635 3.573l.1 3.83q.025.706-.466 1.189T16.564 20l-.454-.056L12 18.733l-4.11 1.211q-.124.05-.24.053q-.117.003-.214.003q-.665 0-1.15-.483t-.459-1.188l.1-3.856l-2.629-3.548q-.159-.217-.229-.453Q3 10.236 3 10q0-.506.297-.942q.296-.435.828-.618zm.629.859L4.462 9.398q-.289.096-.395.394t.087.548l2.792 3.84l-.119 4.16q-.02.327.23.52q.25.192.559.096L12 17.696l4.385 1.285q.307.096.557-.096q.25-.193.231-.52l-.12-4.184l2.793-3.79q.192-.25.087-.549q-.106-.298-.395-.394l-4.292-1.496l-2.765-3.683q-.173-.25-.481-.25t-.48.25zM12 11.519"
      ></path>
    </svg>
  );
}

export function Star(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.997 15.462q1.01 0 1.804-.617q.793-.616 1.16-1.549H9.04q.367.933 1.157 1.55q.79.615 1.8.615M9.89 11.924q.467 0 .789-.326q.322-.327.322-.794t-.327-.789t-.793-.322t-.789.327t-.322.793t.327.789t.793.322m4.231 0q.466 0 .789-.326q.322-.327.322-.794q0-.466-.327-.788q-.327-.323-.793-.323q-.467 0-.789.327t-.322.793t.327.789t.793.322m-5.995-4.83l2.608-3.472q.238-.32.566-.47Q11.627 3 12 3t.701.15t.566.471l2.608 3.471l4.02 1.368q.534.18.822.605q.289.426.289.94q0 .237-.07.471t-.228.449l-2.635 3.573l.1 3.83q.025.706-.466 1.189T16.564 20l-.454-.056L12 18.733l-4.11 1.211q-.124.05-.24.053q-.117.003-.214.003q-.665 0-1.15-.483t-.459-1.188l.1-3.856l-2.629-3.548q-.159-.217-.229-.453Q3 10.236 3 10q0-.506.297-.942q.296-.435.828-.618z"
      ></path>
    </svg>
  );
}

export interface RateProps {
  value?: number;
  defaultValue?: number;
  count?: number;
  onChange?: (value: number) => void;
  icon?: React.ReactNode;
  emptyIcon?: React.ReactNode;
  precision?: number;
  disabled?: boolean;
}

export const Rate = (_props: RateProps) => {
  const props = useDefaultProps(_props, {
    defaultValue: 0,
    count: 5,
    icon: <Star color="#f7bb07" className="size-6" />,
    emptyIcon: <StarOutline color="#f7bb07" className="size-6" />,
    precision: 1,
    disabled: false,
  });

  const { count, icon, precision, disabled, emptyIcon } = props;
  const [value, setValue] = useControllableValue<RateProps['value']>(props);
  const [hoverValue, setHoverValue] = useState(updateValuePrecision(value ?? 0));

  const resetHoverValue = () => setHoverValue(updateValuePrecision(value ?? 0));

  function updateValuePrecision(value: number) {
    return new Decimal(value).dividedBy(precision).floor().times(precision).toNumber();
  }

  function onClick(event: React.MouseEvent<HTMLDivElement>) {
    if (disabled) return;
    const newValue = getPreciseValue(event);
    if (newValue === value) {
      setValue(0);
      setHoverValue(0);
    } else {
      setValue(newValue);
    }
  }

  function getPreciseValue(event: React.MouseEvent<HTMLDivElement>) {
    const element = event.currentTarget;
    const elementRect = element.getBoundingClientRect();
    const iconRect = element.children[0].getBoundingClientRect();
    const x = new Decimal(event.clientX).minus(elementRect.left).toNumber();
    const value = new Decimal(x).dividedBy(iconRect.width).toFixed(1);
    return updateValuePrecision(parseFloat(value));
  }

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (disabled) return;
    const value = getPreciseValue(event);
    setHoverValue(value);
  }

  function render() {
    if (hoverValue === undefined) return null;
    const fullIndex = new Decimal(hoverValue).minus(1).floor().toNumber();
    const hasDecimal = hoverValue % 1 !== 0;

    const _num = new Decimal(updateValuePrecision(hoverValue))
      .minus(new Decimal(hoverValue).floor())
      .toNumber();

    const decimal = hasDecimal ? _num : 0;

    function renderIcon(i: number) {
      if (i <= fullIndex) {
        return React.cloneElement(icon);
      }

      if (i === fullIndex + 1 && hasDecimal) {
        return (
          <div className="relative">
            {React.cloneElement(emptyIcon)}
            <div className="absolute top-0 overflow-hidden" style={{ width: `${decimal * 100}%` }}>
              {React.cloneElement(icon)}
            </div>
          </div>
        );
      }

      return React.cloneElement(emptyIcon);
    }

    return [...Array(count)].map((_, i) => (
      <div className="size-6" key={i}>
        {renderIcon(i)}
      </div>
    ));
  }

  return (
    <div
      className="inline-flex cursor-pointer"
      onMouseLeave={resetHoverValue}
      onClick={(e) => onClick(e)}
      onMouseMove={(e) => onMouseMove(e)}
    >
      {render()}
    </div>
  );
};

Rate.displayName = 'Rate';
