'use client';

import {
  EventHandler,
  HTMLInputTypeAttribute,
  MouseEventHandler,
  ReactEventHandler,
  useCallback,
  useState
} from 'react';
import Button from 'components/Button';
import Card from 'components/Card';
import TextField from 'components/TextField';
import SectionTitle from 'components/SectionTitle';
import TextArea from 'components/TextArea';

interface InputFieldProps {
  id: string;
  dataField: string;
  inputType: HTMLInputTypeAttribute;
  placeholder: string;
  required: boolean;
  colSpan?: number;
}

const inputFields: InputFieldProps[] = [
  {
    id: 'appointment-name',
    dataField: 'name',
    inputType: 'text',
    placeholder: 'Όνομα',
    required: true
  },
  {
    id: 'appointment-email',
    dataField: 'email',
    inputType: 'email',
    placeholder: 'Email',
    required: true
  },
  {
    id: 'appointment-phone',
    dataField: 'phone',
    inputType: 'tel',
    placeholder: 'Τηλέφωνο',
    required: true
  },
  {
    id: 'appointment-date',
    dataField: 'date',
    inputType: 'date',
    placeholder: 'Ημερομηνία Ραντεβού',
    required: true
  },
  {
    id: 'appointment-info',
    dataField: 'info',
    inputType: 'textarea',
    placeholder: 'Επιπλέον Πληροφορίες',
    required: true,
    colSpan: 2
  }
];

const AppointmentForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<Record<string, any>>({
    name: '',
    date: new Date(),
    email: '',
    info: ''
  });

  const onChangeFormData = useCallback(
    (dataField: string) => (e: any) => {
      setFormData(prev => ({ ...prev, [dataField]: e.target.value }));
    },
    []
  );

  const onSendEmail = useCallback(
    async (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      setLoading(true);

      await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          formData
        })
      });

      setLoading(false);
    },
    [formData]
  );

  const disabled = Object.values(formData).some(value => !value);

  return (
    <main className='flex items-center justify-center flex-col'>
      <SectionTitle title='ΚΛΕΙΣΕ ΡΑΝΤΕΒΟΥ' />
      <Card className='mb-5 w-full max-w-[600px]'>
        <form>
          <div className='grid p-4 gap-2 sm:grid-cols-1 md:grid-cols-2'>
            {inputFields.map(inputField => {
              const { dataField, inputType, placeholder, required, colSpan, id } = inputField;

              return inputType === 'textarea' ? (
                <TextArea
                  key={dataField}
                  className={colSpan ? 'col-span-full' : ''}
                  required={false}
                  rows={4}
                  autoComplete={id}
                  value={formData.info as string}
                  placeholder='Επιπλέον Πληροφορίες'
                  onChange={onChangeFormData('info')}
                />
              ) : (
                <TextField
                  id={id}
                  key={dataField}
                  required={required}
                  type={inputType}
                  value={formData[dataField as string]}
                  placeholder={placeholder}
                  autoComplete={id}
                  onChange={onChangeFormData(dataField)}
                />
              );
            })}

            <Button
              className='mt-5'
              onClick={onSendEmail}
              disabled={disabled}
              loading={loading}
              type='submit'
            >
              Κλεισε Ραντεβου
            </Button>
          </div>
        </form>
      </Card>
    </main>
  );
};

export default AppointmentForm;
