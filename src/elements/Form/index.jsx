/* eslint-disable react/jsx-filename-extension */
import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Listbox, Transition } from '@headlessui/react'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export default function Form(props) {
  // const {
  //   errorResponse: 'Please match the requested format.',
  //   type: '',
  //   placeholder: '',
  //   className: '',
  // } = props;
  const {
    name, value, type = "", placeholder = "", className = "", errorResponse = 'Please match the requested format.',
  } = props;

  const [hasError, setHasError] = useState(null);

  const services = [
    { name: 'Choose a topic...' },
    { name: 'Youtube Automation Service' },
    { name: 'Content Production Service' },
    { name: 'Script Writing Service' },
    { name: 'Other' },
  ]
  const [selected, setSelected] = useState(services[0])


  let pattern = '';
  if (type === 'email') pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === 'tel') pattern = '[0-9]*';

  const onChange = (event) => {
    const target = {
      target: {
        // eslint-disable-next-line object-shorthand
        name: name,
        value: event.target.value,
      },
    };

    if (type === 'email') {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === 'tel') {
      if (event.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };

  if (type === 'textarea') {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        className={[
          'w-95 sm:w-192 lg:w-192.5 xl:w-192.5 p-4 mx-2 mb-6 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-purple',
          className,
        ].join(' ')}
        onChange={onChange}
        rows="9"
        required
      />
    );
  }

  if (type === 'tel') {
    return (
      <div className="flex flex-col mb-6 mx-2 lg:mx-5 ">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          value={value}
          className={[
            'p-4 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-purple',
            className,
          ].join(' ')}
          onChange={onChange}
          required
        />
        {hasError && (
          <span className="text-sm text-white bg-red-500 p-1 rounded">
            {hasError}
          </span>
        )}
      </div>
    );
  }

  if (type === 'select') {
    return (
      <div className="fixed top-16 w-72 border-black">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                {/* <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                /> */}
                ⬆⬇
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {services.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                            ✔
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    )
  }

  return (
    <div className="flex flex-col mb-6 mx-2 lg:mx-5 ">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={[
          'p-4 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-purple',
          className,
        ].join(' ')}
        onChange={onChange}
        required
      />
      {hasError && (
        <span className="text-sm text-white bg-red-500 p-1 rounded">
          {hasError}
        </span>
      )}
    </div>
  );
}

// Form.defaultProps = {
//   errorResponse: 'Please match the requested format.',
//   type: '',
//   placeholder: '',
//   className: '',
// };

Form.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  errorResponse: PropTypes.string,
};
