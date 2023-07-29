import React, { Fragment, useCallback } from 'react';
import { Modal, useModal } from '@faceless-ui/modal';
import { Transforms } from 'slate';
import { useSlate, ReactEditor } from 'slate-react';
import MinimalTemplate from '../../../../../../../src/admin/components/templates/Minimal';
import ElementButton from '../../../../../../../src/admin/components/forms/field-types/RichText/elements/Button';
import X from '../../../../../../../src/admin/components/icons/X';
import Button from '../../../../../../../src/admin/components/elements/Button';
import Form from '../../../../../../../src/admin/components/forms/Form';
import Submit from '../../../../../../../src/admin/components/forms/Submit';
import reduceFieldsToValues from '../../../../../../../src/admin/components/forms/Form/reduceFieldsToValues';
import Text from '../../../../../../../src/admin/components/forms/field-types/Text';
import Checkbox from '../../../../../../../src/admin/components/forms/field-types/Checkbox';
import Select from '../../../../../../../src/admin/components/forms/field-types/Select';

import './index.scss';

const baseClass = 'button-rich-text-button';

const initialFormData = {
  style: 'primary',
};

const insertButton = (editor, { href, label, style, newTab = false }: any) => {
  const text = { text: ' ' };
  const button = {
    type: 'button',
    href,
    style,
    newTab,
    label,
    children: [
      text,
    ],
  };

  const nodes = [button, { children: [{ text: '' }] }];

  if (editor.blurSelection) {
    Transforms.select(editor, editor.blurSelection);
  }

  Transforms.insertNodes(editor, nodes);

  const currentPath = editor.selection.anchor.path[0];
  const newSelection = { anchor: { path: [currentPath + 1, 0], offset: 0 }, focus: { path: [currentPath + 1, 0], offset: 0 } };

  Transforms.select(editor, newSelection);
  ReactEditor.focus(editor);
};

const ToolbarButton: React.FC<{path: string}> = ({ path }) => {
  const { open, closeAll } = useModal();
  const editor = useSlate();

  const handleAddButton = useCallback((fields) => {
    const data = reduceFieldsToValues(fields);
    insertButton(editor, data);
    closeAll();
  }, [editor, closeAll]);

  const modalSlug = `${path}-add-button`;

  return (
    <Fragment>
      <ElementButton
        className={baseClass}
        format="button"
        onClick={() => open(modalSlug)}
      >
        Button
      </ElementButton>
      <Modal
        slug={modalSlug}
        className={`${baseClass}__modal`}
      >
        <MinimalTemplate>
          <header className={`${baseClass}__header`}>
            <h3>Add button</h3>
            <Button
              buttonStyle="none"
              onClick={closeAll}
            >
              <X />
            </Button>
          </header>
          <Form
            onSubmit={handleAddButton}
            initialData={initialFormData}
          >
            <Text
              label="Label"
              name="label"
              required
            />
            <Text
              label="URL"
              name="href"
              required
            />
            <Select
              label="Style"
              name="style"
              options={[
                {
                  label: 'Primary',
                  value: 'primary',
                },
                {
                  label: 'Secondary',
                  value: 'secondary',
                },
              ]}
            />
            <Checkbox
              label="Open in new tab"
              name="newTab"
            />
            <Submit>
              Add button
            </Submit>
          </Form>
        </MinimalTemplate>
      </Modal>
    </Fragment>
  );
};

export default ToolbarButton;
