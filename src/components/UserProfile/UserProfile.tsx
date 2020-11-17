import React, { FunctionComponent, useEffect } from 'react';

interface Props {
  name?: string;
  onMount(): void;
}

const UserProfile: FunctionComponent<Props> = ({ name, onMount }) => {
  useEffect(() => {
    onMount();
  });

  return (
    <div>
      <form>
        <input type="text" value={name} />
      </form>
    </div>
  );
};

export default UserProfile;
