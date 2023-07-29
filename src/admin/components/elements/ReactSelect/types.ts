import { CommonProps, GroupBase, Props as ReactSelectStateManagerProps } from 'react-select';
import { DocumentDrawerProps } from '../DocumentDrawer/types';

type CustomSelectProps = {
  disableMouseDown?: boolean
  disableKeyDown?: boolean
  droppableRef?: React.RefObject<HTMLDivElement>
  setDrawerIsOpen?: (isOpen: boolean) => void
  onSave?: DocumentDrawerProps['onSave']
  draggableProps?: any
}

// augment the types for the `Select` component from `react-select`
// this is to include the `selectProps` prop at the top-level `Select` component
declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  > {
    customProps?: CustomSelectProps
  }
}

// augment the types for the `CommonPropsAndClassName` from `react-select`
// this will include the `selectProps` prop to every `react-select` component automatically
declare module 'react-select/dist/declarations/src' {
  export interface CommonPropsAndClassName<Option, IsMulti extends boolean, Group extends GroupBase<Option>> extends CommonProps<Option, IsMulti, Group> {
    customProps?: ReactSelectStateManagerProps<Option, IsMulti, Group> & CustomSelectProps
  }
}

export type Option = {
  [key: string]: unknown
  value: unknown
  //* The ID is used to identify the option in the UI. If it doesn't exist and value cannot be transformed into a string, sorting won't work */
  id?: string
}

export type OptionGroup = {
  label: string
  options: Option[]
}

export type Props = {
  className?: string
  value?: Option | Option[],
  onChange?: (value: any) => void, // eslint-disable-line @typescript-eslint/no-explicit-any
  onMenuOpen?: () => void
  disabled?: boolean,
  showError?: boolean,
  options: Option[] | OptionGroup[]
  /** Allows you to specify multiple values instead of just one */
  isMulti?: boolean,
  /** Allows you to create own values in the UI despite them not being pre-specified */
  isCreatable?: boolean,
  isLoading?: boolean
  isOptionSelected?: any
  isSortable?: boolean,
  onInputChange?: (val: string) => void
  onMenuScrollToBottom?: () => void
  placeholder?: string
  isSearchable?: boolean
  isClearable?: boolean
  blurInputOnSelect?: boolean
  filterOption?:
  | (({ label, value, data }: { label: string, value: string, data: Option }, search: string) => boolean)
  | undefined,
  numberOnly?: boolean,
  components?: {
    [key: string]: React.FC<any>
  }
  customProps?: CustomSelectProps
  /**
  * @deprecated Since version 1.0. Will be deleted in version 2.0. Use customProps instead.
  */
  selectProps?: CustomSelectProps
  backspaceRemovesValue?: boolean
}
