import React from 'react';
import Field, { addWrapperToField } from '../Field';

import './Input.styl';

/*
 *
 * */
export const InputElement = Field;

/*
 *
 * */
const Input = addWrapperToField(InputElement, 'Input');
export default Input;
