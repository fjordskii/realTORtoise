import React, { FunctionComponent, useState } from 'react';
import { AppTable } from '../components/AppTable';
import { CreateForm } from '../components/CreateForm';
import { supabase } from '../utils/supabase';

interface IRecipientProps {
  recipients: any;
  recipient_groups: any;
}

const Recipients: FunctionComponent<IRecipientProps> = ({
  recipients,
  recipient_groups,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const filteredRecipients = recipients.map((r: any) => {
    const { created_at, ...rest } = r;
    return rest;
  });

  const handleCreateEntity = async () => {
    try {
      const { data, error } = await supabase
        .from('recipients')
        .insert([{ full_name: fullName, phone }]);
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      alert(error);
    }
    getStaticProps();
  };

  return (
    <div>
      {/* Create Form */}
      <CreateForm
        entityType="Recipient"
        handleCreateEntity={handleCreateEntity}
      >
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            name="fullName"
            type="text"
            required={true}
            minLength={3}
            value={fullName}
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            name="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required={true}
            minLength={5}
            placeholder="Phone Number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="check">Add to group:</label>
          <input type="checkbox" />
        </div>

        <div className="form-group">
          <select id="select" name="select">
            {recipient_groups.map((rg: any) => {
              return <option key={rg.id}>{rg.group_name}</option>;
            })}
          </select>
        </div>
      </CreateForm>

      {/* Table */}
      <AppTable title="Recipients" entity={filteredRecipients} />
    </div>
  );
};

export const getStaticProps = async () => {
  const { data: recipients } = await supabase.from('recipients').select('*');
  const { data: recipient_groups } = await supabase
    .from('recipient_groups')
    .select('*');
  return {
    props: { recipients, recipient_groups },
  };
};

export default Recipients;
