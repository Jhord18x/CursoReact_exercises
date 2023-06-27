import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const taskSchema = Yup.object().shape({
  name: Yup.string().required('Se requiere nombre'),
  description: Yup.string().required('Se requiere descripción'),
});

const TaskForm = ({add, length}) => {

  const initialValues = {
    name: '',
    description: '',
    completed: false,
    level: LEVELS.NORMAL,
  };

  function addTask(values){
    const newTask = new Task(
        values.name,
        values.description,
        false,
        values.level
    );
    add(newTask);
  }

  return (
    <div>
      <h1>Crear tarea</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
        onSubmit={(values, { resetForm }) => {
          addTask(values);
          resetForm();
        }}
      >
        {({ values, touched, errors, isSubmitting, handleChange, handleBlur
         }) => (
          <Form>
            <div>
              <label htmlFor="name">Nombre</label>
              <Field id="name" name="name" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <label htmlFor="description">Descripción</label>
              <Field id="description" name="description" as="textarea" />
              <ErrorMessage name="description" />
            </div>
            <div>
              <label htmlFor="level">Nivel</label>
              <Field as="select" id="level" name="level">
                <option value={LEVELS.NORMAL}>Normal</option>
                <option value={LEVELS.URGENT}>Urgente</option>
                <option value={LEVELS.BLOCKING}>Bloqueante</option>
              </Field>
              <ErrorMessage name="level" />
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>
              {length > 0 ? 'Añadir nueva tarea' : 'Crea tu primera tarea'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default TaskForm;