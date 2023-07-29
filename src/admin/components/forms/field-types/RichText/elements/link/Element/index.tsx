import React, { HTMLAttributes, useCallback, useEffect, useState } from 'react';
import { ReactEditor, useSlate } from 'slate-react';
import { Transforms, Node, Editor } from 'slate';
import { useModal } from '@faceless-ui/modal';
import { Trans, useTranslation } from 'react-i18next';
import { transformExtraFields, unwrapLink } from '../utilities';
import Popup from '../../../../../../elements/Popup';
import { LinkDrawer } from '../LinkDrawer';
import { Fields } from '../../../../../Form/types';
import buildStateFromSchema from '../../../../../Form/buildStateFromSchema';
import { useAuth } from '../../../../../../utilities/Auth';
import { useLocale } from '../../../../../../utilities/Locale';
import { useConfig } from '../../../../../../utilities/Config';
import reduceFieldsToValues from '../../../../../Form/reduceFieldsToValues';
import deepCopyObject from '../../../../../../../../utilities/deepCopyObject';
import Button from '../../../../../../elements/Button';
import { getTranslation } from '../../../../../../../../utilities/getTranslation';
import { Props as RichTextFieldProps } from '../../../types';
import { useDrawerSlug } from '../../../../../../elements/Drawer/useDrawerSlug';
import { useDocumentInfo } from '../../../../../../utilities/DocumentInfo';

import './index.scss';

const baseClass = 'rich-text-link';

/**
 * This function is called when an existing link is edited.
 * When a link is first created, another function is called: {@link ../Button/index.tsx#insertLink}
 */
const insertChange = (editor, fields, customFieldSchema) => {
  const data = reduceFieldsToValues(fields, true);

  const [, parentPath] = Editor.above(editor);

  const newNode: Record<string, unknown> = {
    newTab: data.newTab,
    url: data.url,
    linkType: data.linkType,
    doc: data.doc,
  };

  if (customFieldSchema) {
    newNode.fields = data.fields;
  }

  Transforms.setNodes(
    editor,
    newNode,
    { at: parentPath },
  );

  Transforms.delete(editor, { at: editor.selection.focus.path, unit: 'block' });
  Transforms.move(editor, { distance: 1, unit: 'offset' });
  Transforms.insertText(editor, String(data.text), { at: editor.selection.focus.path });

  ReactEditor.focus(editor);
};

export const LinkElement: React.FC<{
  attributes: HTMLAttributes<HTMLDivElement>
  children: React.ReactNode
  element: any
  fieldProps: RichTextFieldProps
  editorRef: React.RefObject<HTMLDivElement>
}> = (props) => {
  const {
    attributes,
    children,
    element,
    editorRef,
    fieldProps,
  } = props;

  const customFieldSchema = fieldProps?.admin?.link?.fields;

  const editor = useSlate();
  const config = useConfig();
  const { user } = useAuth();
  const locale = useLocale();
  const { t, i18n } = useTranslation('fields');
  const { openModal, toggleModal, closeModal } = useModal();
  const [renderModal, setRenderModal] = useState(false);
  const [renderPopup, setRenderPopup] = useState(false);
  const [initialState, setInitialState] = useState<Fields>({});
  const { getDocPreferences } = useDocumentInfo();
  const [fieldSchema] = useState(() => {
    const fields = transformExtraFields(customFieldSchema, config, i18n);


    return fields;
  });

  const drawerSlug = useDrawerSlug('rich-text-link');

  const handleTogglePopup = useCallback((render) => {
    if (!render) {
      setRenderPopup(render);
    }
  }, []);

  useEffect(() => {
    const awaitInitialState = async () => {
      const data = {
        text: Node.string(element),
        linkType: element.linkType,
        url: element.url,
        doc: element.doc,
        newTab: element.newTab,
        fields: deepCopyObject(element.fields),
      };

      const preferences = await getDocPreferences();
      const state = await buildStateFromSchema({ fieldSchema, preferences, data, user, operation: 'update', locale, t });
      setInitialState(state);
    };

    awaitInitialState();
  }, [renderModal, element, fieldSchema, user, locale, t, getDocPreferences]);

  return (
    <span
      className={baseClass}
      {...attributes}
    >
      <span
        style={{ userSelect: 'none' }}
        contentEditable={false}
      >
        {renderModal && (
          <LinkDrawer
            drawerSlug={drawerSlug}
            fieldSchema={fieldSchema}
            handleClose={() => {
              toggleModal(drawerSlug);
              setRenderModal(false);
            }}
            handleModalSubmit={(fields) => {
              insertChange(editor, fields, customFieldSchema);
              closeModal(drawerSlug);
            }}
            initialState={initialState}
          />
        )}
        <Popup
          buttonType="none"
          size="small"
          forceOpen={renderPopup}
          onToggleOpen={handleTogglePopup}
          horizontalAlign="left"
          verticalAlign="bottom"
          boundingRef={editorRef}
          render={() => (
            <div className={`${baseClass}__popup`}>
              {element.linkType === 'internal' && element.doc?.relationTo && element.doc?.value && (
                <Trans
                  i18nKey="fields:linkedTo"
                  values={{ label: getTranslation(config.collections.find(({ slug }) => slug === element.doc.relationTo)?.labels?.singular, i18n) }}
                >
                  <a
                    className={`${baseClass}__link-label`}
                    href={`${config.routes.admin}/collections/${element.doc.relationTo}/${element.doc.value}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    label
                  </a>
                </Trans>
              )}
              {(element.linkType === 'custom' || !element.linkType) && (
                <a
                  className={`${baseClass}__link-label`}
                  href={element.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {element.url}
                </a>
              )}
              <Button
                className={`${baseClass}__link-edit`}
                icon="edit"
                round
                buttonStyle="icon-label"
                onClick={(e) => {
                  e.preventDefault();
                  setRenderPopup(false);
                  openModal(drawerSlug);
                  setRenderModal(true);
                }}
                tooltip={t('general:edit')}
              />
              <Button
                className={`${baseClass}__link-close`}
                icon="x"
                round
                buttonStyle="icon-label"
                onClick={(e) => {
                  e.preventDefault();
                  unwrapLink(editor);
                }}
                tooltip={t('general:remove')}
              />
            </div>
          )}
        />
      </span>
      <span
        tabIndex={0}
        role="button"
        className={[
          `${baseClass}__popup-toggler`,
        ].filter(Boolean).join(' ')}
        onKeyDown={(e) => { if (e.key === 'Enter') setRenderPopup(true); }}
        onClick={() => setRenderPopup(true)}
      >
        {children}
      </span>
    </span>
  );
};
