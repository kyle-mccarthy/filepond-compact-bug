import { FC } from 'react';
import { FilePond } from 'react-filepond';

const Home: FC = () => {
  return (
    <div>
      <h3>Style Panel Layout Bug</h3>
      <div>
        <p style={{ color: 'green' }}>Default</p>
        <div style={{ maxWidth: 300, border: 'solid 1px black' }}>
          <FilePond />
        </div>
      </div>

      <div>
        <p style={{ color: 'green' }}>Integrated</p>
        <div style={{ maxWidth: 300, border: 'solid 1px black' }}>
          <FilePond stylePanelLayout="integrated" />
        </div>
      </div>

      <div>
        <p style={{ color: 'red' }}>Compact</p>
        <div style={{ maxWidth: 300, border: 'solid 1px black' }}>
          <FilePond stylePanelLayout="compact" />
        </div>
      </div>
    </div>
  );
};

export default Home;
