import { useEffect } from 'react';
import { CSSProperties } from 'react';

const adCardStyle: CSSProperties = {
  border: '1px solid #ccc',
  padding: '16px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  maxWidth: '300px',
  margin: '20px auto',
};

const AdComponent: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    
    // Set up script properties
    script.async = true;
    script.referrerPolicy = 'no-referrer-when-downgrade';
    
    // Define the source URL for the script
    script.src = "//scented-leather.com/b.XmV/sidoG/lO0GYwWidTiNYPWL5YuyZ/XpIA/Be/mR9NuJZQUvluk_PxTeUc3/M/DCEIxrNVj/IOtyNqTdcMwdMYTiEp2VMXwg";
    
    // Insert the script into the document
    document.body.appendChild(script);

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={adCardStyle}>
      <h3>Sponsored Ad</h3>
      <div id="ad-script-placeholder">
        {/* This is where the ad content generated by the script will appear */}
      </div>
    </div>
  );
};


export default AdComponent;
