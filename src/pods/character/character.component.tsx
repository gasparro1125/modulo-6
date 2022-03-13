import React from 'react';
import { Formik, Form } from 'formik';
import {
    TextFieldComponent,
    PhraseComponent
} from 'common/components';
import { Button } from '@material-ui/core';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
  onBack:() => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave, onBack } = props;

  React.useEffect(() => {
    console.log(character.bestSentences)
  }, [character]);

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="name" />
          <TextFieldComponent name="status" label="status" />
          <TextFieldComponent name="species" label="species" />
          <TextFieldComponent name="type" label="type" />
          <TextFieldComponent name="gender" label="gender" />
          <h3>Best Phrases</h3>
          <PhraseComponent items={character.bestSentences}/>
          <br />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
          <br />
          <Button type="button"  variant="contained" color="primary" onClick={onBack}>volver </Button>
        </Form>
      )}
    </Formik>
  );
};
