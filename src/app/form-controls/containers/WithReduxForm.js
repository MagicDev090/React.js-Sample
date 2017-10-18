import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Paper, Typography, TextField, Select, Input } from 'material-ui';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import { MenuItem } from 'material-ui/Menu';

import { INITIAL } from '../constants';

const renderTextField = ({ input, meta, ...other }) => (
  <TextField
    {...input}
    helperText={meta.touched && meta.error}
    {...other}
  />
);

const renderSelect = ({ input, label, meta: { touched, error }, list, ...other }) => (
  <div>
    <div>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <Select
        {...input}
        {...other}
        input={<Input id={label} style={{ width: '7rem' }} />}
      >
        <MenuItem value=""><em>None</em></MenuItem>
        {
          list.map(({ value, label }, index) => (
            <MenuItem key={index} value={value}>{label}</MenuItem>
          ))
        }
      </Select>
    </div>

    {touched && error && <div style={{ color: '#F44336' }}>{error}</div>}
  </div>
);

let WithReduxForm = ({ name, age }) => {

  return (
    <div className="container">
      <Paper>
        <Typography type="title" gutterBottom style={{ padding: '1rem 1rem 0' }}>
          With Redux Form
        </Typography>

        <form className="form">
          <div className="row">
            {/* input */}
            <FormControl>
              <Field name="name" component={renderTextField} label="Name" />
            </FormControl>
            <div className="outputs">{name}</div>
          </div>

          <div className="row">
            {/* select */}
            <FormControl>
              <Field name="age" component={renderSelect} label="Age" list={INITIAL['listOfage']} />
            </FormControl>
            <div className="outputs">{age}</div>
          </div>

          <div className="row">
            ...
          </div>
        </form>
      </Paper>

      <style jsx>{`
        .container {
          margin: 2rem 0;
        }

        .form {
          padding: .5rem 1rem;
        }

        .row {
          padding: .66rem;
          display: flex;
          flex-direction: row;
        }

        .outputs {
          align-self: flex-end;
          margin: 0 0 .5rem .5rem;
          color: #3F51B5;
        }
      `}</style>
    </div>
  );
};

WithReduxForm = reduxForm({ form: 'example' })(WithReduxForm);

const selector = formValueSelector('example');

export default connect(
  state => ({
    name: selector(state, 'name'),
    age: selector(state, 'age')
  }),
  // dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(WithReduxForm);
