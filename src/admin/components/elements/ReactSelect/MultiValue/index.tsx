import React from 'react';
import {
  MultiValueProps,
  components as SelectComponents,
} from 'react-select';
import { useDraggableSortable } from '../../DraggableSortable/useDraggableSortable';
import type { Option } from '../types';

import './index.scss';

const baseClass = 'multi-value';
export const MultiValue: React.FC<MultiValueProps<Option>> = (props) => {
  const {
    className,
    isDisabled,
    innerProps,
    data: {
      value,
    },
    selectProps: {
      customProps: {
        disableMouseDown,
      } = {},
    } = {},
  } = props;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggableSortable({
    id: value.toString(),
  });

  const classes = [
    baseClass,
    className,
    !isDisabled && 'draggable',
    isDragging && `${baseClass}--is-dragging`,
  ].filter(Boolean).join(' ');

  return (
    <SelectComponents.MultiValue
      {...props}
      className={classes}
      innerProps={{
        ...innerProps,
        ...attributes,
        ...listeners,
        ref: setNodeRef,
        onMouseDown: (e) => {
          if (!disableMouseDown) {
            // we need to prevent the dropdown from opening when clicking on the drag handle, but not when a modal is open (i.e. the 'Relationship' field component)
            e.stopPropagation();
          }
        },
        style: {
          transform,
        },
      }}
    />
  );
};
