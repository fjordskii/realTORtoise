import React, { FunctionComponent, useState } from 'react';
import { AppTable } from '../components/AppTable';
import { CreateForm } from '../components/CreateForm';
import { supabase } from '../utils/supabase';

interface IGroups {
  recipient_groups: any;
}

const Groups: FunctionComponent<IGroups> = ({ recipient_groups }) => {
  const [groupName, setGroupName] = useState('');

  const filteredGroups = recipient_groups.map((rg: any) => {
    const { created_at, ...rest } = rg;
    return rest;
  });

  const handleCreateEntity = async () => {
    try {
      const { data, error } = await supabase
        .from('recipient_groups')
        .insert([{ group_name: groupName }]);
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
      <CreateForm entityType="Group" handleCreateEntity={handleCreateEntity}>
        <div className="form-group">
          <label htmlFor="groupName">Group Name</label>
          <input
            name="groupName"
            type="text"
            required={true}
            minLength={3}
            value={groupName}
            placeholder="Group Name"
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
      </CreateForm>

      <AppTable title="Groups" entity={filteredGroups} />
    </div>
  );
};

export const getStaticProps = async () => {
  const { data: recipient_groups } = await supabase
    .from('recipient_groups')
    .select('*');
  return {
    props: { recipient_groups },
  };
};

export default Groups;
