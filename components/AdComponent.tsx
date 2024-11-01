import { useEffect } from 'react';

const AdComponent: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://lovingassociate.com/bA3qVp0/P.3Rpfv/b/mcV/JgZADK0_1JN-jNAp3/Npz/gMy/LuTSUp2xM/DHcx3gOhDuMT';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h3>Sponsored Ad</h3>
      <p>Check out our latest offers!</p>
      {/* Placeholder for the ad script */}
      <div id="ad-script-placeholder" />
    </div>
  );
};

const adCardStyle = {
  border: '1px solid #ccc',
  padding: '16px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  maxWidth: '300px',
  margin: '0 auto',
};

export default AdComponent;
