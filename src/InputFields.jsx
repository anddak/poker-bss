import React, { useState } from 'react'
import { Typography, Radio, RadioGroup, FormLabel, FormControlLabel, TextField } from '@material-ui/core';

export const RadioButtonGroupField = ({ onButtonGroupChange, value, options, instrText }) => {

    return (
        <>
        <Typography color="error" style={{paddingTop: 5, paddingBottom: 25}}>{instrText}</Typography>
            <RadioGroup
                aria-label="position"
                value={value}
                onChange={evt => onButtonGroupChange(evt.target.value)}
            >
                {options.map(o => (
                    <FormControlLabel
                        value={o.value}
                        control={<Radio />}
                        label={o.label}>
                    </FormControlLabel>
                ))}
            </RadioGroup>
        </>
    )
}

export const FreeTextInput = ({ instrText, label, onTextFieldChange }) => {
    return (
        <>
            <Typography color="error" style={{paddingTop: 5, paddingBottom: 25}}>{instrText}</Typography>
            <TextField
                id={label}
                label={label}
                variant="outlined"
                onChange={evt => onTextFieldChange(evt.target.value)}

            />
        </>
    );
};


