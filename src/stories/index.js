import React from 'react';

import { storiesOf } from '@storybook/react';
import RecongateTextArea from '../RecongateTextArea.js'
import { RECONGATE_CHALLENGE_TEXT } from '../App.js'

storiesOf('Recongate Text Area', module)
    .add('Only placeholder', () => <RecongateTextArea placeholder={'placeholder'}/>)
    .add('Min Max (1,1)', () => <RecongateTextArea minrows={1} maxrows={1} value='minrows = 1, maxrows = 1'/>)
    .add('Min Max (1,4)', () => <RecongateTextArea minrows={1} maxrows={4} value='minrows = 1, maxrows = 4'/>)
    .add('Placeholder and Min = 3', () => <RecongateTextArea minrows={3} cols={24} placeholder={'placeholder'} value={RECONGATE_CHALLENGE_TEXT}/>)
    .add('With Autofocus', () => <RecongateTextArea minrows={3} cols={24} placeholder={'placeholder'} autoFocus={true} value={RECONGATE_CHALLENGE_TEXT}/>);
